---
title: "Converting .wav files for use with Pocketsphinx"
date: "2015-08-17"
layout: post
categories: notebook
---

When using [Pocketsphinx](http://cmusphinx.sourceforge.net/), you are required to have your audio data in a **16kHz** (or 8kHz, depending on the training data) **16bit Mono** (single channel) **Little-Endian** file. One way to do this is to export each file with Audacity but this is tiresome. However, Audacity is good for removing noise from a list of files using [chains](http://manual.audacityteam.org/o/man/edit_chains.html).

Once we have done that we can use [SoX](http://sox.sourceforge.net/) to take care of the rest. Here is a quick bash script I wrote which will do just that.

## Bash Script

```
#!/bin/bash
# converts all .wav-files in the immediate folder that
# this script is executed to
# .raw 16khz, 16bit, little endian, mono
# i.e. for using them with pocketsphinx:
# http://cmusphinx.sourceforge.net/
#
# all converted files will be in the new subdirectory
# "converted" inside the directory this script is
# executed; the original files will not be touched
#
# you have to install sox prior to running this
# script and add it to your bash profile or add to the directory
# http://sox.sourceforge.net/
#
# Author: benjgorman
# http://benjgorman.com
EXT=wav
DIRECTORY=converted
if [ ! -d DIRECTORY ]; then
  mkdir $DIRECTORY
fi
for i in *; do
    if [ "${i}" != "${i%.${EXT}}" ];then
        echo "Working on File $i"
        ./sox "$i" -r 16000 "./$DIRECTORY/$i.raw"
        if [ $? -eq 0 ]
        then
        echo "Successfully converted File: $i"
        else
        echo "File \"$i\" could not be converted. Aborting!"
        exit 1
        fi
    fi  
done
exit 0
```
