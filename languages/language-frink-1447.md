
## Language Frink ##
---
- Author: Alan Eliasen
- Date: 04/12/07
- Info: http
- Score:  (3.00 in 18 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-frink-1447.html
---

```for n = 99 to 0 step -1
{
   str = getBottleString[n]
   println[str + " of beer on the wall, " + lc[str] + " of beer."]

   if (n == 0)
     println["Go to the store and buy some more, 99 bottles of beer on the wall."]
   else
     println["Take one down and pass it around, " + lc[getBottleString[n-1]] +
             " of beer on the wall.\n"]
}

getBottleString[n] := (n==0 ? "No more" : n) + " bottle" + (n==1 ? "" : "s")```