
## Language O'Basic ##
---
- Author: Philipp Winterberg
- Date: 04/20/05
- Info: http
- Score:  (2.32 in 148 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-o%27basic-502.html
---

```' O'Basic version of 99 Bottles of beer (Bottles.cod)
' See http://www.obasic.com/
' Philipp Winterberg, http://www.winterbergs.de

a$ = " bottle(s) of beer"
c$ = a$ + " on the wall"
for b# = 1 to 99
  print str(100 - b#, 2) + c$ + ","^J"^M"
  print str(100 - b#, 2) + a$ + "."^J"^M"
  print "Take one down, pass it around,"^J"^M"
  print str(99 - b#, 2) + c$ + "."^J"^M"^J"^M"
endfor```