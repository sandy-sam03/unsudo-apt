#!/bin/bash
input="a.txt"
while IFS= read -r line
do
  echo "medias = cl.photo_upload(path=['/root/dank/$line'], caption='memes #memes')"
  echo "time.sleep(3600)"
done < "$input"
