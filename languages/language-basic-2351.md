
## Language BASIC ##
---
- Author: barrym
- Date: 04/01/10
- Info: n/a
- Score:  (3.00 in 29 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-basic-2351.html
---

```1 REM BEER SONG FOR TRS-80 LEVEL 1 BASIC BY BARRYM 2010-03-31
2 REM THANKS TO JEFF VAVASOUR FOR HIS EXCELLENT SIMULATOR!
9 B=99
10 P.:W=1:GOS.40:P.",";:W=0:GOS.40:B=B-1:W=2
20 IFB>-1T.P." TAKE ONE DOWN AND PASS IT AROUND,":GOS.40:G.10
30 B=99:P." GO TO THE STORE AND BUY SOME MORE,":W=3
40 IFB>0T.P.B;:G.60
50 P." NO MORE ";
60 P."BOTTLE";:IFB<>1T.P."S";
70 P." OF BEER";:IFW>0T.P." ON THE WALL";
80 IFW<>1T.P."."
90 IFW<3T.RET.```