# generator-c64basicv2

> A Yeoman generator to scaffold a simple c64 basic v2 project. Designed to be used with [c64basicv2 Visual Studio Code Extension](https://marketplace.visualstudio.com/items?itemName=gverduci.c64basicv2) or standalone.

[![NPM version][npm-image]][npm-url]
[![NPM downloads][npm-downloads-image]][npm-url]
## Installation
First, install Yeoman and generator-c64basicv2 using npm and Node.js:

```bash
npm install -g yo
npm install -g generator-c64basicv2
```
Then generate your new project:
```bash
mkdir myC64Project
cd myC64Project

yo c64basicv2
```
## Folder structure

generator-c64basicv2 creates the following folder structure:

```
\       -> root dir
\bin    -> converted programs
\d64    -> d64 disk
\src    -> source programs
    |
    ------ helloworld.prg
```

## bash Script

generator-c64basicv2 gives you three bash scripts to convert and run c64 basic v2 programs. To use these script install [Vice](https://vice-emu.sourceforge.io/)

*run.sh*: to run a prg using Vice (x64sc)

```bash
#!/bin/bash
SOURCE=$(echo $1)
FILENAME=$(echo ${SOURCE##*/})
echo $FILENAME
petcat -w2 -o ./bin/$FILENAME -- $1
x64sc ./bin/$FILENAME
```

run this script using the command:

```bash
bash run.sh src/helloworld.prg
```


*convertAll.sh*: to convert all the prg (src folder) between ASCII, PETSCII and tokenized BASIC.

```bash
#!/bin/bash
for filename in ./src/*.prg; do
    SOURCE=$(echo $filename)
    echo $SOURCE
    DEST=$(echo ${SOURCE##*/})
    echo $DEST
    petcat -w2 -o ./bin/$DEST -- $SOURCE
done
```

*created64.sh*: to create a d64 image disk containing all the converted prg

```bash
#!/bin/bash
c1541 -format "diskname,1" d64 ./d64/diskname.d64
for filename in ./bin/*.prg; do
    SOURCE=$(echo $filename)
    echo $SOURCE
    DEST=$(echo ${SOURCE##*/})
    echo $DEST
    c1541 ./d64/diskname.d64 -write $filename $DEST
done
```

## License

[BSD 3-Clause "New" or "Revised" License](https://github.com/gverduci/generator-c64basicv2/blob/main/LICENSE)


[npm-image]: https://img.shields.io/npm/v/generator-c64basicv2.svg?style=flat-square
[npm-url]: https://npmjs.org/package/generator-c64basicv2
[npm-downloads-image]: https://img.shields.io/npm/dm/generator-c64basicv2.svg?style=flat-square