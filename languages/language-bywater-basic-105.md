
## Language Bywater Basic ##
---
- Author: Philipp Winterberg
- Date: 04/20/05
- Info: http
- Score:  (1.43 in 14 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-bywater-basic-105.html
---

```10 rem Bywater Basic version of 99 Bottles of beer (Bottles.bas)
15 rem See http://www.programmersheaven.com/zone6/cat700/15918.htm
20 rem Philipp Winterberg, http://www.winterbergs.de
30      
40 for b=99 to 1 step -1
50   print str$(b) + " bottle(s) of beer on the wall,"
60   print str$(b) + " bottle(s) of beer."
70   print  "Take one down, pass it around,"
80   print str$(b-1) + " bottle(s) of beer on the wall." + chr$(13) + chr$(10)
90 next b
99 end```