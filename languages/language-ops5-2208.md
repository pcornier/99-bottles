
## Language OPS5 ##
---
- Author: Scott Hamilton
- Date: 10/28/09
- Info: http
- Score:  (3.00 in 2 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-ops5-2208.html
---

```;  The Beer Song in OPS5
;
;  Author: S.Hamilton
;  Version: V1.0
;
;  Abstract:
;    I don't have access to a OPS5 compiler any more, so this is coding 
;    from my memory. so if someone can compile it and update any logic/syntax
;    errors.
; 


(literalise Count bottles)
(literalise SecondLine)

(startup
    (make Count ^bottles 99)
)



(p moreBeer
   (Count ^bottles {<beerLeft> > 0})
  -(SecondLine)
-->
   (writeln <beerLeft>| bottle of beer on the wall, | <beerLeft> | bottle of beer.|)
   (modify 1 ^bottles (compute <beerLeft>-1))
   (make SecondLine)
)

(p moreBeerSecondLine
   (Count ^bottles > 1 )
   (SecondLine)
-->
   (writeln |Take one down and pass it around, | <beerLeft> | bottles of beer on the wall.|)
   (remove 2)
)

(p oneMoreBeerSecondLine
   (Count ^bottles 1)
   (SecondLine)
-->
   (writeln |Take one down and pass it around, | <beerLeft> | bottle of beer on the wall.|)
   (remove 2)
)

(p lastBeerSecondLine
   (Count ^bottles 0)
   (SecondLine) 
-->
   (writeln |Take one down and pass it around, no more bottles of beer on the wall.|)
   (remove 2)
)

(p noMoreBeer
   (Count ^bottles 0)
  -(SecondLine)
-->
   (writeln |No more bottles of beer on the wall, no more bottles of beer.|))
   (writeln |Go to the store and buy some more, 99 bottles of beer on the wall.|)
   (remove 1)
)```