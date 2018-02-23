
## Language XPLO ##
---
- Author: Philipp Winterberg
- Date: 04/20/05
- Info: n/a
- Score:  (2.48 in 27 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-xplo-73.html
---

```\ XPLO version of 99 Bottles of beer (Bottles.xpl)
\ See http://www.idcomm.com/personal/lorenblaney/
\
\ Philipp Winterberg, http://www.winterbergs.de

code CRLF=9, INTOUT=11, TEXT=12;
integer B;

begin
  B:= 99;
  repeat	
    INTOUT(0, B); TEXT(0, " bottle(s) of beer on the wall,"); CRLF(0);
    INTOUT(0, B); TEXT(0, " bottle(s) of beer."); CRLF(0);
    TEXT(0, "Take one down, pass it around,"); CRLF(0);
    B:= B - 1;
    INTOUT(0, B); TEXT(0, " bottle(s) of beer on the wall."); CRLF(0);
    CRLF(0)
  until B = 0
end```