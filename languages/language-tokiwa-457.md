
## Language Tokiwa ##
---
- Author: Philipp Winterberg
- Date: 04/20/05
- Info: http
- Score:  (1.67 in 9 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-tokiwa-457.html
---

```* Tokiwa version of 99 Bottles of beer (Bottles.bas)
* See http://www.terra.es/personal/oxigeno2/BASIC.es/compiladores_basic.htm
* Philipp Winterberg, http://www.winterbergs.de

call bottles(1," bottle(s) of beer"," on the wall")

subroutine bottles(b,a$,c$)
  integer b
  if b<100 then
    call bottles(b+1,a$,c$)
    print b; a$; c$; ","
    print b; a$; "."
    print "Take one down, pass it around,"
    print b-1; a$; c$; "."; chr$(13); chr$(10)
  endif
  return
subend
end```