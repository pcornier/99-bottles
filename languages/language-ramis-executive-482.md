
## Language Ramis Executive ##
---
- Author: Anonymous
- Date: 04/20/05
- Info: n/a
- Score:  (3.00 in 1 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-ramis-executive-482.html
---

```*-----------------------------------------------------------------------
* 99 BOTTLES OF BEER ON THE WALL - RAMIS EXECUTIVE VERSION
*-----------------------------------------------------------------------

CATALOGS BEER
&&COUNT/I2 = 99;
&&LOOP
&&BOTTLES/A7 = IF &COUNT GT 1 THEN 'BOTTLES' ELSE 'BOTTLE ';
&&PRINT &COUNT &BOTTLES OF BEER ON THE WALL, &COUNT &BOTTLES OF BEER
&&PRINT TAKE ONE DOWN, PASS IT AROUND
&&COUNT/I2 = &COUNT - 1;
&&IF &COUNT GT 0 GOTO LOOP;
&&PRINT NO MORE BOTTLES OF BEER ON THE WALL, NO MORE BOTTLES OF BEER
&&PRINT GO TO THE STORE AND BUY SOME MORE
END CATALOGS
EXEC BEER```