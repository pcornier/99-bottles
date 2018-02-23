
## Language Visual DialogScript ##
---
- Author: Brandon Cunningham
- Date: 04/20/05
- Info: n/a
- Score:  (3.00 in 17 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-visual-dialogscript-174.html
---

```rem Visual DialogScript version of 99 Bottles of beer (Bottles.dsc)
rem See http://www.dialogscript.com/en/
rem Made VDS 2.x Compatible by Brandon Cunningham cnodnarb@aol.com

DIALOG CREATE,Bottles of Beer,-1,0,240,160,-
  TEXT(B;10;10;;;Text)
%A = "  bottle(s) of beer"
%B = 99   
%C = " on the wall"
%D = "Take one down, pass it around,"
repeat
  DIALOG SET,B,%B%A%C","@CR()%B%A.@CR()%D@CR()@PRED(%B)%A%C.@CR()@CR()
  %B = @PRED(%B)
  WAIT 2
until @not(@GREATER(%B, 0))
DIALOG CLOSE
EXIT```