
## Language Liberty Basic ##
---
- Author: Philipp Winterberg
- Date: 04/20/05
- Info: http
- Score:  (2.32 in 38 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-liberty-basic-357.html
---

```' Liberty Basic version of 99 Bottles of beer (Bottles.bas)
' See http://world.std.com/~carlg/
' Philipp Winterberg, http://www.winterbergs.de

for b = 99 to 1 step -1
  print b; " bottle(s) of beer on the wall,"
  print b; " bottle(s) of beer."
  print "Take one down, pass it around, "
  print (b-1); " bottle(s) of beer on the wall." + chr$(13) + chr$(10)
next b```