
## Language Forth ##
---
- Author: Ian Osgood
- Date: 07/12/05
- Info: http
- Score:  (3.67 in 213 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-forth-793.html
---

```\ ANS Forth, well-factored

:noname   dup . ." bottles" ;
:noname       ." 1 bottle"  ;
:noname ." no more bottles" ;
create bottles , , ,

: .bottles  dup 2 min cells bottles + @ execute ;
: .beer     .bottles ."  of beer" ;
: .wall     .beer ."  on the wall" ;
: .take     ." Take one down and pass it around" ;
: .verse    .wall ." , " .beer ." ." cr
         1- .take ." , " .wall ." ." cr ;
: verses   begin cr .verse ?dup 0= until ;

99 verses```