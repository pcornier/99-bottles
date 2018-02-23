
## Language AsmL/NET ##
---
- Author: Chris R. Timmons
- Date: 04/20/05
- Info: n/a
- Score:  (2.97 in 100 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-asml-net-38.html
---

```/*
 * NinetyNine.asml
 *
 * The "99 Bottles of Beer" song rendered in AsmL.NET 
 * (Abstract State Machine Language for MS.NET).
 *
 * To get AsmL.NET, go to Microsoft Research at:
 *
 *   http://research.microsoft.com/foundations/AsmL/
 *
 * Written by Chris R. Timmons (chris "at" crtimmonsinc "dot" com)
 * September 8, 2003
 * http://www.crtimmonsinc.com/
 */

const MaxBottles = 99
var Bottles = MaxBottles

function GetCorrectBottlesTense(bottles as Integer) as String
  if bottles > 1 then
    return bottles + " bottles"
  elseif bottles = 1 then
    return bottles + " bottle"
  else
    return "No more bottles"

Main()
  step while Bottles > 0
    WriteLine(
      GetCorrectBottlesTense(Bottles) + " of beer on the wall,\n" +
      GetCorrectBottlesTense(Bottles) + " of beer.\n" +
      "Take one down, pass it around.\n" +
      GetCorrectBottlesTense(Bottles - 1) + " of beer on the wall.\n")
    Bottles := Bottles - 1
  step
    WriteLine(
      "No more bottles of beer on the wall,\n" +
      "No more bottles of beer.\n" +
      "Go to the store, get some more!\n" +
      MaxBottles + " bottles of beer on the wall.\n")```