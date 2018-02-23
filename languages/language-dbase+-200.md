
## Language DBase+ ##
---
- Author: Anonymous
- Date: 04/20/05
- Info: n/a
- Score:  (3.00 in 10 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-dbase+-200.html
---

```private s
for i = 1 to 99
 s = 100 - i
   ? ltrim(str(s)) + " Bottle" + iif(s > 1,"s","") + " of beer on the wall " + ;
    ltrim(str(s)) + " bottle" + iif(s> 1,"s","") + " of beer"
   ? "   Take one down and pass it around"
   ? iif(s - 1 = 0,"No more",ltrim(str(s - 1))) + " Bottle" + iif(s = 2,"","s") + ;
    " of beer on the wall"
endfor
? "No more bottles of beer on the wall, No more bottles of beer"
? "Go to the store and buy some more - 99 bottles of beer on the wall"```