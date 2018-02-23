
## Language DarkBasic ##
---
- Author: Philipp Winterberg
- Date: 04/20/05
- Info: http
- Score:  (2.40 in 48 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-darkbasic-196.html
---

```rem DarkBasic version of 99 Bottles of beer (Bottles.dba)
rem http://www.darkbasic.com/download.php
rem Philipp Winterberg, http://www.winterbergs.de

a$=" bottle(s) of beer" : c$=" on the wall" 
for b=99 to 1 step -1
  print b, a$, c$, ","
  print b, a$, "."
  print "Take one down, pass it around,"
  print b-1, a$, c$, "."
  wait (1000) : cls rgb(0,0,0)
next b : end```