#! /bin/bash
set -e

function usage()
{
  cat << HEREDOC

  Usage: protogen [--proto_path PATH] [--files FILES] [--output_dir OUTPUT_DIR] [--annotations FILE]

  arguments:
    -h, --help           Show this text and exit
    --proto_path         Specify the directory in which to search for proto file imports
    -o, --output_dir     Specify directory in which to put generated code
    --annotations        Specify proto files that has annotations for generator
    --files              One or more protobuf files names which that use for generate code
HEREDOC
}

PROTOGEN_ROOT=$(cd `dirname "${BASH_SOURCE}"`/..; pwd -P)
DEPS_DIR="${PROTOGEN_ROOT}/deps"

proto_path=""
output_dir=""
annotations_files=()
file_names=()

POSITIONAL=()
while [[ $# -gt 0 ]]
do
  key="$1"

  case $key in
      -h|--help)
      usage
      exit
      ;;
      --proto_path)
      proto_path="$2"
      shift 2
      ;;
      -o | --output_dir)
      output_dir="$2"
      shift 2
      ;;
      --annotations)
      file_name="$2"
      while ! [[ "$file_name" =~ -.* ]] && [[ $# -gt 1 ]];
      do
          annotations_files+=(${file_name});
          shift
          file_name="$2"
      done

      shift
      ;;
      --files)
      file_name="$2"

      while ! [[ "$file_name" =~ -.* ]] && [[ $# -gt 1 ]];
      do
          file_names+=(${file_name});
          shift
          file_name="$2"
      done

      shift
      ;;
      *)
      usage
      exit
      ;;
  esac
done

if [ -z $proto_path ] || [ -z "$file_names" ] || [ -z $output_dir ]; then
  usage
  exit
fi

PROTOC_LIB="${DEPS_DIR}/protoc/bin/protoc"
PROTOC_LIB_OS="linux"
PROTOC_LIB_VERSION="3.18.1"
PROTOC_GEN_FRONTEND_PLUGIN="${PROTOGEN_ROOT}/scripts/protoc_gen_frontend.sh"
GOOGLEAPIS_DIR="${DEPS_DIR}/googleapis/googleapis-master"
PROTOC_GEN_PLUGIN_VERSION="1.3.0"
PROTOC_GEN_PLUGIN_VERSION_FILE="${DEPS_DIR}/protoc-gen-grpc-web-version"
PROTOC_GEN_PLUGIN_OS="linux"

# Add deps dir to path for grpc-web generator
PATH=${DEPS_DIR}:$PATH

case `uname` in
  'Linux')
    PROTOC_LIB_OS="linux"
    PROTOC_GEN_PLUGIN_OS="linux"
    ;;
  'Darwin')
    PROTOC_LIB_OS="osx"
    PROTOC_GEN_PLUGIN_OS="darwin"
    ;;
  *) ;;
esac

if [ ! -d $DEPS_DIR ]; then
  mkdir $DEPS_DIR
  cd $DEPS_DIR
  echo "Downloading protoc"
  wget -q "https://github.com/protocolbuffers/protobuf/releases/download/v${PROTOC_LIB_VERSION}/protoc-${PROTOC_LIB_VERSION}-${PROTOC_LIB_OS}-x86_64.zip" -O protoc.zip && unzip protoc.zip -d protoc && rm protoc.zip
  echo "Downloading protoc-gen-grpc-web ${PROTOC_GEN_PLUGIN_VERSION}"
  wget -q "https://github.com/grpc/grpc-web/releases/download/${PROTOC_GEN_PLUGIN_VERSION}/protoc-gen-grpc-web-${PROTOC_GEN_PLUGIN_VERSION}-${PROTOC_GEN_PLUGIN_OS}-x86_64" -O protoc-gen-grpc-web && chmod +x protoc-gen-grpc-web
  echo $PROTOC_GEN_PLUGIN_VERSION > $PROTOC_GEN_PLUGIN_VERSION_FILE
  echo "Downloading googleapis"
  wget -q https://github.com/googleapis/googleapis/archive/master.zip -O googleapis-master.zip && unzip googleapis-master.zip -d googleapis && rm googleapis-master.zip
elif [ ! -f $PROTOC_GEN_PLUGIN_VERSION_FILE ] || ! grep -Fxq $PROTOC_GEN_PLUGIN_VERSION $PROTOC_GEN_PLUGIN_VERSION_FILE; then
  cd $DEPS_DIR
  echo "Downloading protoc-gen-grpc-web ${PROTOC_GEN_PLUGIN_VERSION}"
  wget -q "https://github.com/grpc/grpc-web/releases/download/${PROTOC_GEN_PLUGIN_VERSION}/protoc-gen-grpc-web-${PROTOC_GEN_PLUGIN_VERSION}-${PROTOC_GEN_PLUGIN_OS}-x86_64" -O protoc-gen-grpc-web && chmod +x protoc-gen-grpc-web
  echo $PROTOC_GEN_PLUGIN_VERSION > $PROTOC_GEN_PLUGIN_VERSION_FILE
fi

mkdir -p ${output_dir}

# build protoc-gen-frontend plugin
cd ${PROTOGEN_ROOT}
npm i && npm run build

# Generates messages, enums, models and client stubs
${PROTOC_LIB} -I=$GOOGLEAPIS_DIR -I=$proto_path "${file_names[@]}" \
  --plugin="protoc-gen-frontend=${PROTOC_GEN_FRONTEND_PLUGIN}" \
  --frontend_out="$output_dir" \
