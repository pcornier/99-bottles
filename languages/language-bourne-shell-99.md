
## Language Bourne Shell ##
---
- Author: Craig J. Copi
- Date: 04/20/05
- Info: n/a
- Score:  (2.91 in 11 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-bourne-shell-99.html
---

```#!/bin/sh
# Bourne shell version of 99 Bottles
# Craig J Copi - copi@oddjob.uchicago.edu
#
if [ $# -eq 1 ]; then
	beers=$1
else
	beers=99
fi

s="s"

while [ $beers -gt 0 ]; do
	echo "$beers bottle$s of beer on the wall,"
	echo "$beers bottle$s of beer,"
	echo "take one down, pass it around,"
	beers=`expr $beers - 1`
	if [ $beers -ne 0 ]; then
		test $beers -eq 1 && s=""
		echo "$beers bottle$s of beer on the wall."
	else
		echo "no bottles of beer on the wall."
	fi
	echo
done

echo
echo "Time to buy some more beer . . . ."```