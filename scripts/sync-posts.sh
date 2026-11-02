#!/usr/bin/env bash
# Clones or updates the private posts repo into ./posts.
set -euo pipefail

cd "$(dirname "$0")/.."

REPO="git@github.com:LavishGent/lavish-thoughts.git"

if [ -d posts/.git ]; then
  git -C posts pull --ff-only
else
  git clone "$REPO" posts
fi
