
## Language bash ##
---
- Author: Koen Noens
- Date: 12/30/07
- Info: http
- Score:  (2.67 in 6 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-bash-1655.html
---

```#!/bin/bash
## Koen Noens, december 2007
##  Lyrics for "99 bottles of beer"
#
#   GNU bash shell
# 	functions (can be recursive)
# 	built-in string manipulation
#	built-in arithmetic operations
#


function drinkBeer() {

	howmany=$1
	txt1=" of beer on the wall"
	txt2="take one down, pass it around"
	txt3="go to the shop and buy some more"
	
	# sing
	bottles $howmany ; echo "$txt1"
	bottles $howmany ; echo "${txt1:0:9}" 

	# continue drinking or go to the shop ? 
	if [[ howmany -gt 0 ]]; then
		howmany=$(($1 - 1))	
		nowwhat=$txt2
	else
		howmany=99
		nowwhat=$txt3
		STOP="x" 		#comment this to continue endlessly
	fi 

	# keep drinking
	echo "$nowwhat"
	bottles $howmany ; echo "$txt1" ; echo -e 
	
	[[ "$STOP" == "x" ]] || drinkBeer $howmany
	# last line has test ([[ ]]) to avoid endless loop
	# whitout it, song just restarts with 99 bottles, forever.
}

# manage syntax and spelling correction
function bottles() {
	case $1 in
		1) echo -n "one bottle" ;;
		0) echo -n "no more bottles" ;;
		*) echo -n "$1 bottles" ;;
	esac
}


# start song
drinkBeer 99```