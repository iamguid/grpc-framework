import * as fs from "fs";
import * as path from "path";
import { CharStreams, CommonTokenStream } from "antlr4ts";
import { Protobuf3Lexer } from "./generated/Protobuf3Lexer";
import { Protobuf3Parser } from "./generated/Protobuf3Parser";
import { Visitor } from "./visitor";

const filePath = path.resolve(__dirname, "../src/tests/proto/option.proto")
const content = fs.readFileSync(filePath).toString();

// Create the lexer and parser
let inputStream = CharStreams.fromString(content);

let lexer = new Protobuf3Lexer(inputStream);
let tokenStream = new CommonTokenStream(lexer);
let parser = new Protobuf3Parser(tokenStream);

// Parse the input, where `compilationUnit` is whatever entry point you defined
let tree = parser.proto();
const visitor = new Visitor();

console.log(JSON.stringify(visitor.visit(tree).toObject(), undefined, 2))