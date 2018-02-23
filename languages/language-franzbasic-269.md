
## Language FranzBasic ##
---
- Author: Philipp Winterberg
- Date: 04/20/05
- Info: http
- Score:  (1.93 in 14 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-franzbasic-269.html
---

```' FranzBasic version of 99 Bottles of beer (Bottles.bas)
' See http://mitglied.lycos.de/movaxworldhq/basic.htm
' Philipp Winterberg, http://www.winterbergs.de

colour 0, 7 : mouse off : cls
for b = 1 to 99
  print
  print str$(100-b) + " bottle(s) of beer on the wall,"
  print str$(100-b) + " bottle(s) of beer."
  print "Take one down, pass it around,"
  print str$(99-b) + " bottle(s) of beer  on the wall."
endfor```