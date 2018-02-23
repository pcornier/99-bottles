
## Language Z-Shell ##
---
- Author: KOBAYASI, Hiroaki
- Date: 12/26/10
- Info: http
- Score:  (2.00 in 3 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-z-shell-2570.html
---

```#!/usr/bin/env zsh

function print_strophe {
	echo "$beer bottle$s of beer on the wall,"
	echo "$beer bottle$s of beer,"
	echo "take one down, pass it around,"
	if ((--beer == 1)) then
		s=''
	elif ((beer == 0)) then
		beer=No
		s=s
	fi
	echo "$beer bottle$s of beer on the wall."
	echo
}

beer=99
s=s
while [[ $beer != No ]] do
        print_strophe
done```