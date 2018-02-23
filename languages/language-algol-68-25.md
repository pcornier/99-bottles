
## Language ALGOL 68 ##
---
- Author: Otto Stolz
- Date: 04/20/05
- Info: n/a
- Score:  (2.76 in 33 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-algol-68-25.html
---

```# 99 Bottles of Beer                         #
# by Otto Stolz <Otto.Stolz@Uni-Konstanz.de> #
( PROC width = (INT x) INT: (x>9 | 2 | 1)
; FOR i FROM 99 BY -1 TO 1
  DO  printf ( ( $ 2l n(width(i))d
                 , x "bottle" b("","s") x "of beer on the wall,"
                 , x n(width(i))d
                 , x "bottle" b("","s") x "of beer."
                 , l "Take one down, pass it around,"
                 , x n(width(i-1))d
                 , x "bottle" b("","s") x "of beer."
                 $
               , i  , i=1
               , i  , i=1
               , i-1, i=2
             ) )
  OD
)```