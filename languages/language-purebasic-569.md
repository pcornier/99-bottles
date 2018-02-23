
## Language PureBasic ##
---
- Author: Philipp Winterberg
- Date: 04/20/05
- Info: http
- Score:  (2.32 in 31 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-purebasic-569.html
---

```; PureBasic version of 99 Bottles of beer (Bottles.pb)
; See http://www.purebasic.com/
; Philipp Winterberg, http://www.winterbergs.de

OpenConsole():ConsoleColor(0,15):a$=" bottle(s) of beer"
ConsoleTitle("99"+a$):c$ = " on the wall":ClearConsole()
For b = 99 To 1 Step -1
  PrintN(" "+Str(b)+a$+c$+","):PrintN(" "+Str(b)+a$+".")
  PrintN(" Take one down, pass it around,")
  PrintN(Chr(32)+Str(b-1)+a$+c$+Chr(46)):PrintN(Chr(32))
Next b
Input():End```