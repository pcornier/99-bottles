
## Language PowerOn ##
---
- Author: Fred Young
- Date: 11/22/05
- Info: n/a
- Score:  (3.00 in 47 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-poweron-954.html
---

```[*
 * Written in PowerOn, a language used to access the Episys database,
 * Symitar's core processing soution for credit unions
 *]

TARGET = ACCOUNT

DEFINE
 x = NUMBER
END

SELECT
 NONE
END

PRINT TITLE = "99 Bottles of Beer"

 FOR X = 99 TO 1 BY -1
  DO
   PRINT X
   PRINT " bottle"

   IF X > 1 THEN PRINT "s"

   PRINT " of beer on the wall, "
   PRINT X
   PRINT " bottle"

   IF X > 1 THEN PRINT "s"

   PRINT " of beer."
   NEWLINE
   PRINT "Take one down and pass it around, "

   IF (X - 1) > 0 THEN PRINT (X - 1)
   ELSE IF (X - 1) = 0 THEN PRINT "no more"

   PRINT " bottle"

   IF (X - 1) <> 1 THEN PRINT "s"

   PRINT " of beer on the wall."
   NEWLINE
   NEWLINE
  END

 PRINT "No more bottles of beer on the wall, no more bottles of beer."
 NEWLINE 
 PRINT "Go to the store and buy some more, 99 bottles of beer on the wall."
 NEWLINE

END```