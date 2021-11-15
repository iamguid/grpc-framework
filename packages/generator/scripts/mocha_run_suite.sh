#!/bin/bash
# mocha_run_suite.sh
# Runs the supplied suite of mocha tests and then asserts that at least a single test
# actually passed. This avoids a nasty edge case where mocha will return exit code 0
# if zero tests actually run, presumably because none of them failed.

set -e

TEST_SUITE="${1}"
if [[ -z "${TEST_SUITE}" ]]; then
 echo "No mocha test suite specified."
 exit 1
fi

if [[ "x${MOCHA_DEBUG}" != "x" ]]; then
  MOCHA_DEBUG="--inspect-brk"
fi

mocha \
    --require ts-node/register/type-check \
    --require source-map-support/register \
    ${MOCHA_DEBUG} \
    "${TEST_SUITE}"
