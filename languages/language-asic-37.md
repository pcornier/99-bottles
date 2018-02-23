
## Language ASIC ##
---
- Author: Philipp Winterberg
- Date: 04/20/05
- Info: n/a
- Score:  (1.87 in 15 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-asic-37.html
---

```rem ASIC version of 99 Bottles of beer (Bottles.asi)
rem See http://www.programmersheaven.com/search/Download.asp?FileID=15872
rem Philipp Winterberg, http://www.winterbergs.de

cls
b = 99
bottles:
  print b;
  print " bottle(s) of beer on the wall,"
  print b;
  print " bottle(s) of beer."
  print "Take one down, pass it around,"
  b = b - 1
  print b;
  print " bottle(s) of beer on the wall."
  print
if B>0 then bottles:
end```