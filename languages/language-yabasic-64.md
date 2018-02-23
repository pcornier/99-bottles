
## Language Yabasic ##
---
- Author: Philipp Winterberg
- Date: 04/20/05
- Info: n/a
- Score:  (2.30 in 27 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-yabasic-64.html
---

```rem Yabasic version of 99 Bottles of beer (Bottles.yab)
rem See http://www.yabasic.de/
rem Philipp Winterberg, http://www.winterbergs.de 

b = 99 
while (b > 0)
  print b, " bottle(s) of beer on the wall,"
  print b, " bottle(s) of beer."
  print "Take one down, pass it around,"
  b = b - 1
  print b, " bottle(s) of beer on the wall." + chr$(13) + chr$(10)
wend```