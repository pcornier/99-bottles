
## Language HotTEA ##
---
- Author: Philipp Winterberg
- Date: 04/20/05
- Info: http
- Score:  (2.48 in 21 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-hottea-307.html
---

```' HotTEA version of 99 Bottles of beer (Bottles.hot)
' See http://www.mbay.net/~cereus7/tryit.html
' Philipp Winterberg, http://www.winterbergs.de
a = " bottle(s) of beer"; c = "on the wall"; l = 200; t = 100
PenColor 255,255,255; TextColor 0,0,255
FOR x = 1 TO 99
  DrawRect 100,0,300,600,FILLED
  DrawText 100-x, l, t; DrawText a, l+15, t
  DrawText c, l+80, t+15; DrawText ",", l+156, t+15
  DrawText 100-x, l, t+30; DrawText a, l+15, t+30;  DrawText ".", l+141, t+30
  DrawText "Take one down,", l, t+45; DrawText "pass it around,", l+80, t+60
  DrawText 99-x, l, t+75; DrawText a, l+15, t+75
  DrawText c, l+80, t+90; DrawText ".", l+156, t+90
NEXT x```