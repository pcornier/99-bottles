
## Language User-RPL ##
---
- Author: Anonymous
- Date: 04/20/05
- Info: n/a
- Score:  (2.96 in 27 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-user-rpl-191.html
---

```Here is a program in User-RPL (reverse polish language), a language 
used on HP calculators:

<< 99 2 FOR i
   i " bottles of beer on the wall," +
   1 DISP
   i " bottles of beer." +
   2 DISP
   "Take one down, pass it around," 3 DISP
   i 1 - " bottle" +
   IF i 2 > THEN "s" + END
   " of beer on the wall." +
   4 DISP
   -1 STEP
   "1 bottle of beer on the wall," 1 DISP
   "1 bottle of beer." 2 DISP
   "Take one down, pass it around." 3 DISP
   "No more bottles of beer on the wall." >>```