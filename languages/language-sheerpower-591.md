
## Language SheerPower ##
---
- Author: Philipp Winterberg
- Date: 04/20/05
- Info: http
- Score:  (1.00 in 10 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-sheerpower-591.html
---

```// SheerPower version of 99 Bottles of beer (Bottles.spsrc)
// See http://nkserver.ttinet.com/sheerpower/
// Philipp Winterberg, http://www.winterbergs.de

clear
declare string a, c
declare integer b 
a=" bottle(s) of beer" 
c=" on the wall"

for b=99 to 1 step -1
  print b; a; c; ","
  print b; a; "."
  print bold:"Take one down, pass it around,"
  print b-1; a; c; "."
  print
next b```