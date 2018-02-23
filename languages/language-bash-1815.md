
## Language BASH ##
---
- Author: Fr�d�ric Lang
- Date: 07/08/08
- Info: http
- Score:  (3.01 in 157 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-bash-1815.html
---

```#!/bin/bash
# 
# Bourne Again shell version of 99 Bottles - No loop - No recursion
# By Fr�d�ric Lang (http://fr.lang.free.fr)

# Memorize count initial
max=${max:-99}

# Store count actual
typeset -i count=${next:-$max}

# Calculate next count
typeset -i next=count-1

# Evaluate count
if test $count -gt 0
then
	middle="take one down, pass it around"
	case $count in
		1)
			first="one bottle"
			last="no more bottles"
			;;
		2)
			first="2 bottles"
			last="one bottle"
			;;
		*)
			first="$count bottles"
			last="$next bottles"
	esac
	order="source $0"
else
	# Last occur
	first="no more bottles"
	middle="go to the shop and buy some more"
	last="$max bottles"
	order="exit 0"
fi

# Print sing
echo "$first of beer on the wall,"
echo "$first of beer,"
echo "$middle,"
echo "$last of beer on the wall."
echo

# Next occur
$order```