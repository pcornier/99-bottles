
## Language Shoop ##
---
- Author: Wouter Verhelst
- Date: 11/12/05
- Info: n/a
- Score:  (2.94 in 16 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-shoop-936.html
---

```#!/bin/sh
#
# SHOOP, or the SHell Object-Oriented Programming library, is a play language
# written by Joey Hess and Adam Heath, to prove that POSIX shell can be
# buzzword-compliant, if required. It consisted of a bit of shell code which 
# can be loaded in any POSIX shell.
# 
# The effort has been discontinued, and the project website brought down; the
# only place it can still be downloaded these days is from
# http://snapshot.debian.net/shoop -- for as long as that takes...
#
# This program Copyright(c) Wouter Verhelst, 2004. You may do with this 
# whatever you want, as long as this notice is retained.

. /usr/share/shoop/shoop.sh

OBJECT . new BOTTLES

BOTTLES . number =q 99

BOTTLES . text : '
	echo "$(BOTTLES . number) bottles of beer on the wall"
	echo "$(BOTTLES . number) bottles of beer"
	echo "take one down, pass it around"
	BOTTLES . number =q $(( $(BOTTLES . number) - 1 ))
	echo "$(BOTTLES . number) bottles of beer on the wall"'

while [ $(BOTTLES . number) -gt 0 ]
do
	BOTTLES . text
	echo ""
done```