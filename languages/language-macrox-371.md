
## Language MacroX ##
---
- Author: Philipp Winterberg
- Date: 04/20/05
- Info: http
- Score:  (1.11 in 9 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-macrox-371.html
---

```\ MacroX version of 99 Bottles of beer (Bottles.mcx)
\ See http://www.millsoft.de/?f=macrox
\ Philipp Winterberg, http://www.winterbergs.de

run=notepad,1
%b%=99
loop=Bottles=99
stop
Bottles:
text=%b% bottle(s) of beer on the wall,{enter}
text=%b% bottle(s) of beer.{enter}
text=Take one down, pass it around,{enter}
Calc={%b%-1},b
text=%b% bottle(s) of beer on the wall.{enter}{enter}
loopend```