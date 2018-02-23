
## Language Eloquence ##
---
- Author: Gunnar Klevefors
- Date: 04/20/05
- Info: http
- Score:  (2.95 in 19 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-eloquence-234.html
---

```REM Eloquence-version www.hp-eloquence.com/ By Gunnar Klevefors gk@cyberstore.se
DLG SET ".driver","@localhost"
FOR X=10 TO 1 STEP -1
    POPUP BOX "[Eloqouence version]["&VAL$(X)&" 
    Bottle"&RPT$("s",(X>1))&" of beer on the wall,|"&VAL$(X)&" 
    bottle"&RPT$("s",(X>1))&" of beer.|Take one down and pass it 
    around,|"&VAL$(X-1)&" bottle"&RPT$("s",(X>2))&" of beer on the wall.][OK]"
NEXT X
END```