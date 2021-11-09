#!/usr/bin/env bash

PROTOGEN_ROOT=$(cd `dirname "${BASH_SOURCE}"`/..; pwd -P)

node $PROTOGEN_ROOT/lib/index.js
