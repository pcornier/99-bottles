
## Language BASH ##
---
- Author: Olosta
- Date: 07/18/12
- Info: n/a
- Score:  (3.00 in 3 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-bash-2918.html
---

```#!/bin/bash
# Clean up previous run
f=$(mktemp scriptXXXX.sh)
head -n 31 $0 > $f
cp -f $f $0
rm $f
# Print verse
bottle=99
if [ $bottle == 1 ] ; then
  str="One bottle"
elif [ $bottle == 0 ] ; then
  str="No more bottles"
else
  str="$bottle bottles"
fi
echo "$str of beer on the wall,"
echo "$str of beer," 
if [ $bottle == 0 ]; then
  echo "Go to the shop and buy some more."
  exit
else
  echo "take one down, pass it around."
fi
# Copy beginning of the file at the end
f=$(mktemp scriptXXXX.sh)
cp -f $0 $f
echo "bottle=$((bottle - 1 ))" >> $f
head -n 30 $0 | tail -n +9 >> $f
cp -f $f $0
rm $f
# New code will go bellow this line```