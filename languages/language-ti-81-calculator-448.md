
## Language TI 81 Calculator ##
---
- Author: Jon Neal
- Date: 04/20/05
- Info: n/a
- Score:  (3.00 in 9 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-ti-81-calculator-448.html
---

```TI-81 Logic
By Jon Neal 1997

:99>X
:0>Y
:LBL 1
:IF X=1
:GOTO 2
:DISP X
:DISP "BOTTLES OF BEER ON THE WALL"
:DISP X
:DISP "BOTTLES OF BEER"
:DISP "TAKE ONE DOWN"
:DISP "PASS IT AROUND"
:X-1>X
:LBL 4
:Y+1>Y
:IF Y=500
:GOTO 3
:GOTO 4
:LBL 3
:GOTO 1
:LBL 2
:DISP X
:DISP "BOTTLE OF BEER ON THE WALL"
:DISP X
:DISP "BOTTLES OF BEER"
:DISP "NO BOTTLES OF BEER ON THE WALL"
:DISP "NO BOTTLES OF BEER"
:DISP "GO TO THE STORE"
:DISP "AND BUY SOME MORE"
:END```