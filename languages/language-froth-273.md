
## Language Froth ##
---
- Author: Leo Wong
- Date: 04/20/05
- Info: n/a
- Score:  (3.00 in 27 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-froth-273.html
---

```\ 99 bottles of beer in Froth, by Leo Wong, a teetotaler   6FEB96  +
\ Pass it around.

: LYRICS   [CHAR] ! PARSE  TUCK  HERE CHAR+  SWAP CHARS MOVE   DUP C,  CHARS ALLOT ;
: VOCALIZE  ( a)  COUNT TYPE ;
: SING   CREATE LYRICS  DOES> VOCALIZE ;

SING NO_MORE No more !
SING BOTTLE bottle! 
SING BOTTLES bottles! 
SING OF_BEER  of beer!  
SING ON_THE_WALL  on the wall!
SING TAKE Take !
SING IT it! 
SING ONE one!
SING DOWN_AND_PASS_IT_AROUND  down and pass it around!
SING GO_TO_THE_STORE_&_BUY_SOME_MORE Go to the store and buy some more! 
SING COMMA ,!
SING PERIOD .!

: ?: CREATE  ( n)  ,   ' ,  ' ,
   DOES>  ( n)  TUCK @ <>  1-  CELLS -  @ EXECUTE ;

: NONE  ( n)  DROP NO_MORE ;
: SOME  ( n)  . ;

0 ?: HOW_MANY  NONE  SOME 

1 ?: BOTTLE(S)  BOTTLE  BOTTLES

1 ?: IT|ONE  IT  ONE

: COMMERCIAL  ( 0 - 99)  GO_TO_THE_STORE_&_BUY_SOME_MORE  99 + ;  
: SHAREWARE  ( n - n-1)  DUP  TAKE IT|ONE DOWN_AND_PASS_IT_AROUND  1- 
;

0 ?: main(){0?99:--}  COMMERCIAL  SHAREWARE

: BURP  ( n - n n)  DUP ;
: HOW_MANY_BOTTLES_OF_BEER  ( n n n)  HOW_MANY BOTTLE(S) OF_BEER ;

: Froth  ( n - n')
   CR  BURP BURP BURP  HOW_MANY_BOTTLES_OF_BEER ON_THE_WALL  COMMA
   CR  BURP BURP BURP  HOW_MANY_BOTTLES_OF_BEER              COMMA 
   CR  BURP            main(){0?99:--}                       COMMA
   CR  BURP BURP BURP  HOW_MANY_BOTTLES_OF_BEER ON_THE_WALL  PERIOD 
CR ;

: LeoWong  ( n)  DROP ;

: SONG   99```