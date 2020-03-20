#!/usr/bin/env bash

set -e
set -o pipefail
set -v

initialGitHash=$(git rev-list --max-parents=0 HEAD)
node ./studio-build.js $initialGitHash &

curl -s -X POST https://api.stackbit.com/project/5e74ef478cd40a0019dc90bb/webhook/build/pull > /dev/null
npx @stackbit/stackbit-pull --stackbit-pull-api-url=https://api.stackbit.com/pull/5e74ef478cd40a0019dc90bb
curl -s -X POST https://api.stackbit.com/project/5e74ef478cd40a0019dc90bb/webhook/build/ssgbuild > /dev/null
cd exampleSite && hugo --gc --baseURL "/" --themesDir ../.. && cd ..
wait

curl -s -X POST https://api.stackbit.com/project/5e74ef478cd40a0019dc90bb/webhook/build/publish > /dev/null
echo "Stackbit-build.sh finished build"
