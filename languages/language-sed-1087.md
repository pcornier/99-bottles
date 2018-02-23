
## Language sed ##
---
- Author: anonymous
- Date: 03/12/06
- Info: n/a
- Score:  (2.97 in 30 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-sed-1087.html
---

```#!/usr/bin/sed -f
# fans of Tao Te Chug may wish to try 'echo 10000 | sed -f bofb.sed'
s/^$/99/;h
/^0$/!{
:loop
##################################################################
# N bottle(s) of beer on the wall, N bottles of beer
##################################################################
s/$/ bottles of beer/;s/^1 bottles/1 bottle/;s/^0/no more/
s/.*/& on the wall, &/p
##################################################################
# greg ubben magic lookup table subtraction:  N := N - 1
##################################################################
s/[^0-9]*\([0-9][0-9]*\).*/\1;987654321000009999000999009909/
s/\([^0]\)\(0*\);[^0]*\1\(.\).*\2\(9*\).*/\3\4/
##################################################################
# Take one down and pass it around, N bottles of beer on the wall
##################################################################
s/0*\([0-9][0-9]*\)/\1 bottles of beer/;s/^1 bottles/1 bottle/;s/^0/no more/
s/.*/Take one down and pass it around, & on the wall\
/p
##################################################################
# if we still have "N bottle(s)", reiterate
##################################################################
:clear
tclear
s/[^0-9]*\([0-9][0-9]*\).*/\1/
tloop
};i\
No more bottles of beer on the wall, no more bottles of beer
##################################################################
# Go to the store to buy some more, N0 bottles of beer on the wall
##################################################################
g;s/$/ bottles of beer/;s/^1 bottles/1 bottle/;s/^0/no more/
s/.*/Go to the store to buy some more, & on the wall/```