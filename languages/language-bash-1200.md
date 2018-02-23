
## Language bash ##
---
- Author: Vittorio Cagnetta
- Date: 06/30/06
- Info: http
- Score:  (2.82 in 11 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-bash-1200.html
---

```#!/bin/bash
# Bourne Again shell version (yet another) of 99 Bottles
# Vittorio Cagnetta - vaisarger@yahoo.it

strophe()
	{
	echo "\
${n} ${bottles[0]} of beer on the wall,
${n} ${bottles[0]} of beer,
take one down, pass it around,
${N} ${bottles[1]} of beer on the wall.
"
}

bottles=( [0]=bottles [1]=bottles )

for (( n=99,N=98 ; n>0 ; n--,N-- )); do
	if [ ${N} -eq 1 ]; then
		bottles[1]=bottle
	elif [ ${N} -eq 0 ]; then
		bottles=( [0]=bottle [1]=bottles ) && N=no
	fi
	strophe
done```