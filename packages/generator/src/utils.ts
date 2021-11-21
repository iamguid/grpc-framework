export function filePathToPseudoNamespace(filePath: string): string {
  return filePath
    .replace(/\//g, '_')
    .replace(/\./g, '_')
    .replace(/\-/g, '_');
}

export function buildNamespace(...items: (string | undefined | null)[]) {
  let result = '';

  for (const item of items) {
    if (!item) {
      continue;
    }

    const trimmed = trimChar(item, '.');
    const isEmpty = trimmed === null || trimmed === '' || trimmed === undefined;

    if (!isEmpty) {
      result += '.' + item;
    }
  }

  return result.substring(1);
}

export function trimChar(str: string, charToRemove: string) {
  while (str.charAt(0) === charToRemove) {
    str = str.substring(1);
  }

  while (str.charAt(str.length - 1) === charToRemove) {
    str = str.substring(0, str.length - 1);
  }

  return str;
}

export function upperCaseFirst(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function lowerCaseFirst(str: string): string {
  return str.charAt(0).toLowerCase() + str.slice(1);
}

export function snakeToCamel(str: string): string {
  return str.replace(/(\_\w)/g, function (m) {
    return m[1].toUpperCase();
  });
}

export function getPathToRoot(fileName: string) {
  const depth = fileName.split('/').length;
  return depth === 1 ? './' : new Array(depth).join('../');
}

export function replaceProtoSuffix(protoFilePath: string, newSuffix: string): string {
  const suffix = '.proto';
  const hasProtoSuffix = protoFilePath.slice(protoFilePath.length - suffix.length) === suffix;
  return hasProtoSuffix
    ? protoFilePath.slice(0, -suffix.length) + '_' + newSuffix
    : protoFilePath;
}

export function withAllStdIn(callback: (buffer: Buffer) => void): void {
  const ret: Buffer[] = [];
  let len = 0;

  const stdin = process.stdin;
  stdin.on('readable', function () {
    let chunk;

    while ((chunk = stdin.read())) {
      if (!(chunk instanceof Buffer)) throw new Error('Did not receive buffer');
      ret.push(chunk);
      len += chunk.length;
    }
  });

  stdin.on('end', function () {
    callback(Buffer.concat(ret, len));
  });
}

// normaliseFieldObjectName modifies the field name that appears in the `asObject` representation
// to match the logic found in `protobuf/compiler/js/js_generator.cc`. See: https://goo.gl/tX1dPQ
export function normaliseFieldObjectName(name: string): string {
  switch (name) {
    case 'abstract':
    case 'boolean':
    case 'break':
    case 'byte':
    case 'case':
    case 'catch':
    case 'char':
    case 'class':
    case 'const':
    case 'continue':
    case 'debugger':
    case 'default':
    case 'delete':
    case 'do':
    case 'double':
    case 'else':
    case 'enum':
    case 'export':
    case 'extends':
    case 'false':
    case 'final':
    case 'finally':
    case 'float':
    case 'for':
    case 'function':
    case 'goto':
    case 'if':
    case 'implements':
    case 'import':
    case 'in':
    case 'instanceof':
    case 'int':
    case 'interface':
    case 'long':
    case 'native':
    case 'new':
    case 'null':
    case 'package':
    case 'private':
    case 'protected':
    case 'public':
    case 'return':
    case 'short':
    case 'static':
    case 'super':
    case 'switch':
    case 'synchronized':
    case 'this':
    case 'throw':
    case 'throws':
    case 'transient':
    case 'try':
    case 'typeof':
    case 'var':
    case 'void':
    case 'volatile':
    case 'while':
    case 'with':
      return `pb_${name}`;
  }
  return name;
}