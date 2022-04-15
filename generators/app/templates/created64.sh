#!/bin/bash
c1541 -format "c64arcadegame,1" d64 ./d64/c64arcadegame.d64
for filename in ./bin/*.prg; do
    SOURCE=$(echo $filename)
    echo $SOURCE
    DEST=$(echo ${SOURCE##*/})
    echo $DEST
    c1541 ./d64/c64arcadegame.d64 -write $filename $DEST
done

