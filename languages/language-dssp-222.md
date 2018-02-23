
## Language DSSP ##
---
- Author: Laszlo Aszalos
- Date: 04/20/05
- Info: http
- Score:  (4.00 in 2 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-dssp-222.html
---

```For Info see <a href=http://www.dssp.msk.ru>http://www.dssp.msk.ru</a>

[  99 bottles in DSSP
   Programmer: Laszlo Aszalos <aszalos@math.klte.hu>

   Run it with 99 BOTTLE
]

B10
: BOTTLE [N] LOT_OF ONE_LEFT ZERO [] ;
: LOT_OF [N] CR C 1- DO ONE_BOTTLE D ;
: ONE_BOTTLE [N]
     ON_THE_WALL .", " CR NUMBER_OFF BOTTLES ."," CR
     TAKE 1- [N-1] C 1 = IF0 MANY ;
: MANY ON_THE_WALL ."." CR ;
: TAKE ."take one down, pass it around," CR ;
: ON_THE_WALL NUMBER_OFF BOTTLES ." on the wall" ;
: BOTTLES ." bottles of beer" ;

: ONE_LEFT ONE_ON_THE_WALL ."." CR ONE_ON_THE_WALL ."," CR BOTTLE1 
."," CR ; 
: ONE_ON_THE_WALL BOTTLE1 ." on the wall" ;
: BOTTLE1 ." 1 bottle of beer" ;

: ZERO TAKE ZERO_ON ."." CR ZERO_ON ."," CR  NO_MORE ."," CR
       ."go to the store, and buy some more!" CR ;
: ZERO_ON  NO_MORE ." on the wall" ;
: NO_MORE ."no more bottles of beer" ;
: NUMBER_OFF C 2 TON ;
: NUMBER_OFF C 2 TON ;```