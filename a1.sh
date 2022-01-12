#!/bin/bash
input="r.txt"
while IFS= read -r line
do
  echo "cat $line"
done < "$input"
