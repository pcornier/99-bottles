
## Language WIL ##
---
- Author: Philipp Winterberg
- Date: 04/20/05
- Info: http
- Score:  (2.38 in 21 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-wil-155.html
---

```; WIL version of 99 Bottles of beer (Bottles.wbt)
; See http://www.winbatch.com/winware/wb-functions.html
; Philipp Winterberg, http://www.winterbergs.de

c = " on the wall"  
a = " bottle(s) of beer"
d = "Take one down, pass it around," 
for b = 1 to 99
  display(2, "", StrCat(100-b,a,c,",",@CRLF,100-b,a,".",@CRLF,d,@CRLF,99-b,a,c,".")) 
next
exit```