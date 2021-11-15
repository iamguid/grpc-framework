// Code created by generator @whisklabs/grpc
// https://github.com/whisklabs/grpc-ts
// Version: 1.1.1
"use strict";
export var whisk_api_user_v2_Gender = {
    GENDER_MALE: 1,
    GENDER_FEMALE: 2,
};
export var whisk_api_user_v2_NumericEnum = {
    ZERO: 0,
    ONE: 1,
};
export function examples_empty_message_NoMessage() {
    return [];
}
export function whisk_api_user_v2_Test2() {
    return [
        [2, "hello", "string", 1],
    ];
}
export function whisk_api_user_v2_Test2_Nested() {
    return [
        [1, "thing", "bytes", 0],
        [2, "thing2", "bytes", 0],
    ];
}
export var whisk_api_user_v2_Person_PhoneType = {
    MOBILE: 0,
    HOME: 1,
    WORK: 2,
    WORK2: 22,
    WORK3: 33,
};
export function whisk_api_user_v2_Person() {
    return [];
}
export function whisk_api_user_v2_Test() {
    return [
        [1, "data", ["map", "string", "string"], 1],
        [10, "data3", ["map", "string", "string"], 1],
        [2, "hello", "string", 1],
        [3, "age", "uint32", 1, "test"],
        [4, "year", "uint32", 1, "test"],
    ];
}
export function whisk_api_user_v2_Test_Nested() {
    return [
        [1, "thing", "bytes", 0],
    ];
}
export function whisk_api_user_v2_TestItem() {
    return [
        [1, "id", "string", 1],
        [2, "name", "string", 1],
        [10, "description", ["wrapper", "string"], 0],
        [11, "test", ["wrapper", "string"], 1],
        [12, "array", ["repeated", ["wrapper", "string"]], 1],
    ];
}
export function examples_simple_message_SimpleMessage() {
    return [
        [1, "uuid", "string", 1],
        [2, "displayName", "string", 1],
    ];
}
export function examples_simple_service_Request() {
    return [
        [1, "someValue", "int32", 1],
    ];
}
export function examples_simple_service_Response() {
    return [
        [1, "someValue", "int32", 1],
    ];
}
export var examples_simple_service_SimpleService_GetSomeValue = {
    name: "examples.simple_service.SimpleService/GetSomeValue",
    encode: examples_simple_service_Request,
    decode: examples_simple_service_Response,
};
