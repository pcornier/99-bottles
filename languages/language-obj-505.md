
## Language OBJ ##
---
- Author: Grigore Rosu
- Date: 04/20/05
- Info: n/a
- Score:  (2.96 in 106 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-obj-505.html
---

```OBJ is an algebraic specification language.

*** OBJ version of 99 bottles of beer
*** programmer: Grigore Rosu  grosu@cs.ucsd.edu
*** creator of OBJ language: Joseph Goguen

obj STRING is sort String .
  ops We like some beer on the wall.  : -> String .
  ops Take one bottle of wall down ,  : -> String .
  ops And pass it arround the beer.   : -> String .
  ops Does anybody want bottles more? : -> String .
endo

obj LIST[X :: TRIV] is
  sort List .
  subsort Elt < List .
  op __ : List List -> List [assoc] .
endo

make CHUG is LIST [ STRING + NAT ] endm

obj BEER is protecting CHUG .
  subsort Nat < String .
  ops beers puke : Nat -> List .
  op bottle? : Nat -> String .
  var N : Nat .
  eq beers(0) = Does anybody want some more? .
  cq beers(N) = puke(N) beers(p N) if N > 0 .
  eq puke(N) = N bottle?(N) of beer on the wall , N bottle?(N) of beer.
   Take one down , pass it arround , (p N) bottle?(p N) of beer on the wall. .
  cq bottle?(N) = bottle  if N == 1 .
  cq bottle?(N) = bottles if N =/= 1 .
endo

red beers(99) .```