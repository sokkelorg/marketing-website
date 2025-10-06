#!/usr/bin/env sh

set -x

revision="$(git rev-parse HEAD)"
docker build --platform linux/amd64 -t "europe-north2-docker.pkg.dev/sokkel-sandbox/martin-test-1/marketing-website:${revision}" .
