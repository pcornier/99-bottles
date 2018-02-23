
## Language IGOR ##
---
- Author: Kenneth A. Goldberg
- Date: 04/20/05
- Info: n/a
- Score:  (2.30 in 10 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-igor-323.html
---

```// IGOR version of: 99 Bottles of Beer
// IGOR PRO is a graphing and numerical analysis environment by WaveMetrics, Inc.
//  http://www.wavemetrics.com/
//
//  Kenneth A. Goldberg, http://goldberg.lbl.gov
//
Proc beer(count)
   variable count
   variable i=count
   do
     if (i > 1)
       print, i, "Bottles of beer on the wall, ",i, " Bottles of beer"
     else
       print, i, "Bottle of beer on the wall, ",i, " Bottle of beer"
     endif

     print,
     i -= 1	// increment our loop variable
     if (i > 1)
       print, "Take one down pass it around, ", i, "Bottles of beer on the wall"
     else
       if (i == 1)
         print,  "Take one down pass it around, 1 Bottle of beer on the wall"
       else
         print,  "Take one down pass it around, NO MORE botles of beer on the wall"
       endif
     endif

   while(i > 0)
   print, "Go to the store and buy some more."
End```