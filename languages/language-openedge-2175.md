
## Language OpenEdge ##
---
- Author: AxelF
- Date: 09/11/09
- Info: http
- Score:  (3.00 in 3 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-openedge-2175.html
---

```/* Here is a version that spells out the lyrics without digits

   ninetynine bottles of beer on the wall, ninetynine bottles of beer
   take one down and pass it around, ninetyeight bottles of beer on the wall
   ...
   two bottles of beer on the wall, two bottles of beer
   take one down and pass it around, one bottle of beer on the wall

   one bottle of beer on the wall, one bottle of beer
   take one down and pass it around, no more bottles of beer on the wall

   no more bottles of beer on the wall, no more bottles of beer
   go to the store and buy some more, ninetynine bottles of beer on the wall
*/

define variable Acquired  as integer   no-undo initial 99.
define variable Remaining as integer   no-undo.
define variable s90       as character no-undo.
define variable s19       as character no-undo.
define variable s09       as character no-undo.

&GLOBAL-DEFINE ManyBottles  bottles of beer
&GLOBAL-DEFINE OneBottle    bottle of beer
&GLOBAL-DEFINE Wall         on the wall
&GLOBAL-DEFINE DrinkOne     take one down and pass it around,
&GLOBAL-DEFINE AcquireMore  go to the store and buy some more,

function Drink returns integer   private (input-output Remaining as integer) forward.
function Spell returns character private (input        Remaining as integer) forward.
output to Lyrics__99BottlesOfBeer.txt.
assign
  s90 = "ninety,eighty,seventy,sixty,fifty,fourty,thirty,twenty"
  s19 = "nineteen ,eighteen ,seventeen ,sixteen ,fifteen ,fourteen ,tirteen ,twelwe ,eleven ,ten "
  s09 = "nine ,eight ,seven ,six ,five ,four ,three ,two ,one , "
  Remaining = Acquired.

do while Remaining >= 0:
  Drink(Remaining).
end.

function Drink returns integer.
  case Remaining:
  when 2 then put unformatted Spell(Remaining) "{&ManyBottles} {&Wall}, "
                              Spell(Remaining) "{&ManyBottles}" skip  
                              "{&DrinkOne} " Spell(Remaining - 1) "{&OneBottle} {&Wall}"   skip(1).
  when 1 then put unformatted Spell(Remaining) "{&OneBottle} {&Wall}, "
                              Spell(Remaining) "{&OneBottle}"   skip  
                              "{&DrinkOne} " Spell(Remaining - 1) "{&ManyBottles} {&Wall}" skip(1).
  when 0 then put unformatted Spell(Remaining) "{&ManyBottles} {&Wall}, "
                              Spell(Remaining) "{&ManyBottles}" skip 
                              "{&AcquireMore} " Spell(Acquired) "{&ManyBottles} {&Wall}"   skip.
  otherwise   put unformatted Spell(Remaining) "{&ManyBottles} {&Wall}, "
                              Spell(Remaining) "{&ManyBottles}" skip  
                              "{&DrinkOne} " Spell(Remaining - 1) "{&ManyBottles} {&Wall}" skip(1).
  end case.    
  Remaining = Remaining - 1.
  return Remaining.
end function.

function Spell returns character.
  if Remaining = 0 then return "no more ".
  else
  if Remaining < 10 then return entry(10 - Remaining, strOnes).
  else
  if Remaining < 20 then return entry(20 - Remaining, strTeens).
  else
  return entry(10 - integer(truncate(Remaining / 10, 0)), strTens) +
         entry(10 - (Remaining - (integer(truncate(Remaining / 10, 0) * 10))), strOnes).
end function.```