
## Language GABasic ##
---
- Author: Philipp Winterberg
- Date: 04/20/05
- Info: http
- Score:  (2.18 in 22 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-gabasic-274.html
---

```' GABasic version of 99 Bottles of beer (Bottles.bas)
' See http://mitglied.lycos.de/movaxworldhq/basic.htm
' Philipp Winterberg, http://www.winterbergs.de

cls
for b = 99 to 1 step -1
  temp = b - 1
  print " "
  print str$(b) + " bottle(s) of beer on the wall,"
  print str$(b) + " bottle(s) of beer."
  print "Take one down, pass it around,"
  print str$(temp) + " bottle(s) of beer  on the wall."
next
sleep```