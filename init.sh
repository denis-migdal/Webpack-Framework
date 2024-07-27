#!/usr/bin/bash

WF_ROOT=`dirname "$0"`
echo "* Found WebpackFramework root: $WF_ROOT"

cp "$WF_ROOT/files/"{*,.[^.]*} ./
git add .gitignore

mkdir dist src

npm install