#!/bin/bash
set -e

PROTOGEN_ROOT=$(cd `dirname "${BASH_SOURCE}"`/..; pwd -P)
EXAMPLES_GENERATED_DIR=${PROTOGEN_ROOT}/generated

${PROTOGEN_ROOT}/scripts/generate.sh \
  --proto_path ${PROTOGEN_ROOT}/proto \
  -o ${EXAMPLES_GENERATED_DIR} \
  --annotations extensions.proto \
  --files $(cd ${PROTOGEN_ROOT}/proto; find . -type f -name '*.proto' -exec sh -c 'echo ${1#./}' -- {} \;)
