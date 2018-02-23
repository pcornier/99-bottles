
## Language WinBatch ##
---
- Author: Philipp Winterberg
- Date: 04/20/05
- Info: http
- Score:  (2.97 in 34 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-winbatch-157.html
---

```; WinBatch version of 99 Bottles of beer (Bottles.wbt)
; See http://www.winbatch.com/winware/winbatch.html
; Philipp Winterberg, http://www.winterbergs.de

a=" bottle(s) of beer"
b=99   
c=" on the wall"  
d="Take one down, pass it around," 
BoxOpen("99 Bottles of Beer", "")
while b>0
  BoxText (StrCat(b,a,c,",",@CRLF,b,a,".",@CRLF,d,@CRLF,b-1,a,c,"."))
  TimeDelay(2)
  b=b-1     
endwhile
BoxShut()
Exit```