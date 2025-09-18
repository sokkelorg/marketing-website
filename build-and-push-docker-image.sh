#!/usr/bin/env sh

set -e
set -x

tag="$(git rev-parse head)"
image="europe-north2-docker.pkg.dev/sokkel-shared/docker/marketing-website:${tag}"

docker build --platform linux/amd64 -t "${image}" .

docker push "${image}"
