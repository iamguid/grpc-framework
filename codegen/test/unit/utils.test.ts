import "mocha";
import { assert } from "chai";
import { filePathToPseudoNamespace } from "../../src/utils";

describe("utils", () => {
    describe("filePathToPseudoNamespace", () => {
        [{
            in: 'github.com/improbable-eng/ts-protoc-gen/test/proto/examplecom/enum_message.proto',
            out: 'github_com_improbable_eng_ts_protoc_gen_test_proto_examplecom_enum_message_proto',
        }, {
            in: 'enum_message.proto',
            out: 'enum_message_proto',
        }, {
            in: 'enum_message.js',
            out: 'enum_message_js',
        }, {
            in: '.proto/enum_message.proto',
            out: '_proto_enum_message_proto',
        }, {
            in: 'protos/.proto/enum_message.proto',
            out: 'protos__proto_enum_message_proto',
        }, {
            in: '',
            out: '',
        }].forEach(scenario => {
            it(`should map '${scenario.in}' to '${scenario.out}'`, () => {
                const actual = filePathToPseudoNamespace(scenario.in);
                assert.equal(actual, scenario.out);
            });
        });
    });
});