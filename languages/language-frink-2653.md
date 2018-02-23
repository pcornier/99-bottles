
## Language Frink ##
---
- Author: Alan Eliasen
- Date: 05/17/11
- Info: http
- Score:  (3.00 in 26 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-frink-2653.html
---

```/* Frink tracks units of measure through all calculations.  It has a large library of built-in units
of measure, including volume.  The following program prints out the remaining volume of beer
(assuming we start with 99 bottles of beer, each containing 12 fluid ounces) in different random
units of volume, never repeating a unit. */

units = array[units[volume]]
showApproximations[false]

for n = 99 to 0 step -1
{
   unit = units.removeRandom[]
   str = getBottleString[n, unit]
   
   println[str + " of beer on the wall, " + lc[str] + "."]

   if (n == 0)
      println["Go to the store and buy some more, 99 bottles of beer on the wall."]
   else
      println["Take one down and pass it around, " + lc[getBottleString[n-1, unit]] + " on the
wall.\n"]
}

getBottleString[n, unit] := format[n*12 floz, "${unit}", 6] + "s"```