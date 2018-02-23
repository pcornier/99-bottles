
## Language zkl ##
---
- Author: Craig Durland
- Date: 06/01/11
- Info: http
- Score:  (3.50 in 2 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-zkl-2664.html
---

```// Matches capitalization of lyrics
// 2 char diff: I end with a blank line, original last line is " Go ..."
[99..0,-1].apply(fcn(n){
   println(beers(n), " the wall, ", beers(n).toLower(), ".\n",
      n==0 and ("Go to the store and buy some more, 99 bottles of beer") or
      ("Take one down and pass it around, " + beers(n-1).toLower()),
      " on the wall.\n")
});
fcn beers(n){
   (n==0 and "No more bottles" or n==1 and "1 bottle" or "" + n + " bottles")
   + " of beer"
}```