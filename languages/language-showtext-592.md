
## Language ShowText ##
---
- Author: Philipp Winterberg
- Date: 04/20/05
- Info: http
- Score:  (1.15 in 13 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-showtext-592.html
---

```' ShowText version of 99 Bottles of beer (Bottles.st)
' http://www.programmersheaven.com/zone22/cat254/2672.htm
' Philipp Winterberg, http://www.winterbergs.de
'
INTKEYS CLEAR OFF\RST KEYCLK\NOCHK\CSR OFF\MOUSE OFF
COLOR 15,0\CLS\P+\P@ 25,1
%B=99
WHILE %B>0
PRINT %B,2Z;\PRINT " bottle(s) of beer on the wall,"
PRINT %B,2Z;\PRINT " bottle(s) of beer."
PRINT "Take one down, pass it around,"
%B--\PRINT %B,2Z;\PRINT " bottle(s) of beer on the wall."
SCROLL UP (1,1,25,80)\WAIT 1
WEND
EXITC```