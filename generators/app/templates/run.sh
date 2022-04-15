#!/bin/bash
SOURCE=$(echo $1)
FILENAME=$(echo ${SOURCE##*/})
echo $FILENAME
petcat -w2 -o ./bin/$FILENAME -- $1
x64sc ./bin/$FILENAME