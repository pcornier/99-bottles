
## Language bourne shell ##
---
- Author: anonymous
- Date: 03/14/06
- Info: n/a
- Score:  (2.89 in 9 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-bourne-shell-1088.html
---

```#!/bin/sh
################################################################################
# Major things to notice:
# A) this infinite loop has no exit.  no need for a Haskell port to your PDP-11
#    to play with (somewhat) lazy infinite streams
# B) redirection can ocurr not only for simple commands, but also the control
#    structures.  By connecting several control structures with pipes, we do
#    not have the usual algol-style hierarchical control flow, but rather a
#    script which is composed of communicating concurrent processes
# C) a process in the *middle* of a pipeline (in this case, "bottle") can
#    determine termination just as easily as the head or tail processes
################################################################################
# of possible interest:
# 0) HERE documents may expand variables
# 1) the case structure may match with file globbing wildcards
# 2) variable expansion may take defaults
# 3) expressions may involve regex matching as well as arithmetic
################################################################################

singverses()	{
	read N0bottles; read n0bottles
	echo "$N0bottles of beer on the wall, $n0bottles of beer."
	while { read Nbottles; read nbottles; } do
		cat <<-EOV					# 0
		Take one down and pass it around, $nbottles of beer on the wall.
		
		$Nbottles of beer on the wall, $nbottles of beer.
		EOV
	done 
	echo "Go to the store to buy some more, $n0bottles of beer on the wall."
}

countdown()	{
	n=$1
	while true; do						# [A]
		echo $n
		n=`expr $n - 1`
	done
}

bottle()	{
	while read n; do
		case $n in 					# 1
		-*)	   exit ;;
		0)	   echo "No more bottles" ;;
		1)    	   echo "1 bottle" ;;
		24)   	   echo "A two-four" ;;
		*)	   echo "$n bottles" ;;
		esac
	done | while read n; do					# [B]
		echo $n
		echo $n | tr "[A-Z]" "[a-z]"
	done
}

beers=${1:-99}							# 2
if [ `expr "$beers" : "[0-9]*$"` -eq 0 ]; then			# 3
	echo "Usage: $0 [number of beers]"
	exit 1
else
	countdown $beers | bottle | singverses			# [C]
fi```