
## Language Visual DialogScript ##
---
- Author: Brandon Cunningham
- Date: 04/20/05
- Info: http
- Score:  (1.00 in 4 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-visual-dialogscript-175.html
---

```rem Visual DialogScript 3.x version of 99 Bottles of beer (Bottles.dsc)
rem See http://www.dialogscript.com/en/
rem by Brandon Cunningham cnodnarb@aol.com
rem Original by Philipp Winterberg, http://www.winterbergs.de

DIALOG CREATE,99 Bottles of Beer,-1,0,600,400
DIALOG ADD,TEXT,B,23,23,400,200
DIALOG SHOW
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