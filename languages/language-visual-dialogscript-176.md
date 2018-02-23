
## Language Visual DialogScript ##
---
- Author: Philipp Winterberg
- Date: 04/20/05
- Info: http
- Score:  (1.00 in 4 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-visual-dialogscript-176.html
---

```rem Visual DialogScript version of 99 Bottles of beer (Bottles.dsc)
rem See http://www.dialogscript.com/en/
rem Philipp Winterberg, http://www.winterbergs.de

DIALOG CREATE,99 Bottles of Beer,-1,0,600,400
DIALOG ADD,TEXT,B,23,23,400,200
DIALOG SHOW
%A = "  bottle(s) of beer"
%B = 99	  
%C = " on the wall"
%D = "Take one down, pass it around,"
WHILE @GREATER(%B, 0)
  DIALOG SET,B,%B%A%C","@CR()%B%A.@CR()%D@CR()@PRED(%B)%A%C.@CR()@CR()
  %B = @PRED(%B)
  WAIT 2
WEND 
DIALOG CLOSE
EXIT```