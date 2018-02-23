
## Language Concurrent Clean ##
---
- Author: Jan Krynicky
- Date: 04/20/05
- Info: n/a
- Score:  (2.85 in 103 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-concurrent-clean-143.html
---

```//language Concurrent Clean - lazy pure functional
// Author: Jan Krynicky (jkry3025@comenius.mff.cuni.cz)
module beer
import StdEnv

//run with console and no constructors (don't want to make windows, menu ...)
Start = genbeer 99
 where
  genbeer 0 = ["No more bottles of beer on the wall.\n", //We are all drunk enough.
               "No more bottles of beer.\n",             //so sad!
               "Go to the store and buy some more.\n"    //If you can fin it.
              : genbeer 99]                              
              //Go on, let's drink forever.
  genbeer n = [sn+++" Bottle(s) of beer on the wall, "
               +++ sn +++ " bottle(s) of beer.\n",
               "Take one down and pass it around.\n",
               toString(n-1)+++ " bottle(s) of beer on the wall."
              :genbeer (n-1)]
   where
    ns = toString(n)

//end```