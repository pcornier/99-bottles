
## Language GBasic ##
---
- Author: Philipp Winterberg
- Date: 04/20/05
- Info: http
- Score:  (1.95 in 21 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-gbasic-277.html
---

```REM GBasic version of 99 Bottles of beer (Bottles.b)
REM See http://mitglied.lycos.de/movaxworldhq/basic.htm
REM Philipp Winterberg, http://www.winterbergs.de

color(255, 0) : screen 13
for b = 99 to 1 step -1 : print
  print str$(b) + " bottle(s) of beer on the wall,"
  print str$(b) + " bottle(s) of beer."
  print "Take one down, pass it around,"
  print str$(b-1) + " bottle(s) of beer  on the wall."
next : wait_key```