
## Language SuperBase ##
---
- Author: Mark Pilgrim
- Date: 04/20/05
- Info: n/a
- Score:  (2.86 in 7 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-superbase-615.html
---

```SUB main()
 REM "99 bottles of beer", Superbase SBL version
 REM written by Mark Pilgrim, f8dy@netaxs.com
 REM [ If my boss is reading this, I'd just like to reassure
 REM   him that I wrote this on my own time. -MP ]
 DIM i%%,beer$,bottle$
 OPEN WINDOW "99 bottles of beer"
 bottle$ = " bottles "
 beer$ = "99"
 FOR i%% = 99 TO 1 STEP - 1
   ? beer$ + bottle$ + "of beer on the wall,"
   ? beer$ + bottle$ + "of beer,"
   ? "Take " + IF (i%% > 1,"one","it") + " down, pass it around,"
   IF i%% > 1 THEN 
     beer$ = LTRIM$ ( TRIM$ ( STR$ (i%% - 1)))
     IF i%% = 2 THEN bottle$ = " bottle "
     ? beer$ + bottle$ + "of beer on the wall."
     ? 
   ELSE 
     ? "No more bottles of beer on the wall."
   END IF 
 NEXT 
 END SUB```