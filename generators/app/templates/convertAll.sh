#!/bin/bash
for filename in ./src/*.prg; do
    SOURCE=$(echo $filename)
    echo $SOURCE
    DEST=$(echo ${SOURCE##*/})
    echo $DEST
    petcat -w2 -o ./bin/$DEST -- $SOURCE
done

