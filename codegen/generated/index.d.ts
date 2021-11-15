// Code created by generator @whisklabs/grpc
// https://github.com/whisklabs/grpc-ts
// Version: 1.1.1

import {
  FieldMap,
  FieldRepeated,
  FieldType,
  FieldItem,
  Field,
  FieldEmpty,
  FieldGet,
  Service,
  ServiceRequest,
  ServiceResponse,
  Values
} from '@whisklabs/grpc';

/** Gender is one or two. */
export const whisk_api_user_v2_Gender: {
  readonly GENDER_MALE: 1,
  readonly GENDER_FEMALE: 2,
};
export type whisk_api_user_v2_Gender = Values<typeof whisk_api_user_v2_Gender>;
/** NumericEnum is one or zero. */
export const whisk_api_user_v2_NumericEnum: {
/** ZERO means 0 */
  readonly ZERO: 0,
/** ONE means 1 */
  readonly ONE: 1,
};
export type whisk_api_user_v2_NumericEnum = Values<typeof whisk_api_user_v2_NumericEnum>;
export type examples_empty_message_NoMessage = FieldEmpty;
export const examples_empty_message_NoMessage: Field<examples_empty_message_NoMessage>;
export type whisk_api_user_v2_Test2 = {
  hello: string;
};
/** example file */
export const whisk_api_user_v2_Test2: Field<whisk_api_user_v2_Test2>;
export type whisk_api_user_v2_Test2_Nested = {
/** Line comment */
  thing?: Uint8Array;
/** Line comment2 */
  thing2?: Uint8Array;
};
/** fgfg
    dfv */
export const whisk_api_user_v2_Test2_Nested: Field<whisk_api_user_v2_Test2_Nested>;
export const whisk_api_user_v2_Person_PhoneType: {
  readonly MOBILE: 0,
  readonly HOME: 1,
  readonly WORK: 2,
  readonly WORK2: 22,
  readonly WORK3: 33,
};
export type whisk_api_user_v2_Person_PhoneType = Values<typeof whisk_api_user_v2_Person_PhoneType>;
export type whisk_api_user_v2_Person = FieldEmpty;
export const whisk_api_user_v2_Person: Field<whisk_api_user_v2_Person>;
export type whisk_api_user_v2_Test = {
  data: Record<string, string>;
  data3: Record<string, string>;
  hello: string;
  test?:
    | { oneof: 'age'; value: number; }
    | { oneof: 'year'; value: number; };
};
/** example file */
export const whisk_api_user_v2_Test: Field<whisk_api_user_v2_Test>;
export type whisk_api_user_v2_Test_Nested = {
  thing?: Uint8Array;
};
export const whisk_api_user_v2_Test_Nested: Field<whisk_api_user_v2_Test_Nested>;
export type whisk_api_user_v2_TestItem = {
/** Required */
  id: string;
  name: string;
/** Optional */
  description?: string;
  test: string;
  array: string[];
};
/** service UserAPI {
   rpc GetMe(GetMeRequest) returns (GetMeResponse) {
     option (google.api.http) = {
       get : "/user/v2/me"
     };
   }
   /* fgfg
    *∕
   rpc Get(google.protobuf.Empty) returns (GetMeResponse); // Empty rpc
   rpc UpdateSettings(UpdateSettingsRequest) returns (UpdateSettingsResponse) {
     option (google.api.http) = {
       patch : "/user/v2/settings"
       body : "*"
       additional_bindings : {patch : "/user/v2/settings/{id}" body : "*"}
       additional_bindings :{put : "/user/v2/settings/{id}" body : "*"}
     };
   }
 } repeated SearchRecipesResponse searches = 40;
 map<string, SearchRecipesResponse> map_search = 41;
 SearchRecipesResponse search = 42; */
export const whisk_api_user_v2_TestItem: Field<whisk_api_user_v2_TestItem>;
export type examples_simple_message_SimpleMessage = {
  uuid: string;
  displayName: string;
};
export const examples_simple_message_SimpleMessage: Field<examples_simple_message_SimpleMessage>;
export type examples_simple_service_Request = {
  someValue: number;
};
export const examples_simple_service_Request: Field<examples_simple_service_Request>;
export type examples_simple_service_Response = {
  someValue: number;
};
export const examples_simple_service_Response: Field<examples_simple_service_Response>;
export type examples_simple_service_SimpleService_GetSomeValue = Service<Field<examples_simple_service_Request>, Field<examples_simple_service_Response>>;
export const examples_simple_service_SimpleService_GetSomeValue: examples_simple_service_SimpleService_GetSomeValue;