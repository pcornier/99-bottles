
## Language Focus ##
---
- Author: Randy Gleason
- Date: 04/20/05
- Info: n/a
- Score:  (2.17 in 6 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-focus-261.html
---

```Focus is a fourth generation data reporting/management language/toolset. 
It runs on a numerous platforms, from Windows up to MVS.  
<a href=http://www.ibi.com/>http://www.ibi.com/</a>

-* Randy Gleason
-* 99 beer challenge

 -REPEAT ENDBEER FOR &COUNTER FROM 99 TO 1 STEP -1
 -SET &PL = IF &COUNTER EQ 1 THEN '' ELSE 's' ;
 -TYPE &COUNTER bottle&PL of beer on the wall, &COUNTER bottle&PL of beer
 -TYPE Take one down, pass it around
 -TYPE
 -ENDBEER
 -TYPE No more bottles of beer on the wall, No more bottles of beer
 -TYPE And we all shout out..WHO'S BUYING THE NEXT ROUND!```