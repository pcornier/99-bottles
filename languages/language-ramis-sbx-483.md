
## Language Ramis SBX ##
---
- Author: Anonymous
- Date: 04/20/05
- Info: n/a
- Score:  (2.00 in 2 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-ramis-sbx-483.html
---

```*----------------------------------------------------------------------
* 99 BOTTLES OF BEER ON THE WALL - RAMIS SBX VERSION
*----------------------------------------------------------------------

PROCESS;
DECLARE COUNT AS I2;
DO FROM COUNT = 99 TO 2 BY -1;
    PRINT &COUNT BOTTLES OF BEER ON THE WALL, &COUNT BOTTLES OF BEER;
    PRINT TAKE ONE DOWN, PASS IT AROUND;
ENDDO;

PRINT  1 BOTTLE  OF BEER ON THE WALL,  1 BOTTLE  OF BEER;
PRINT TAKE ONE DOWN, PASS IT AROUND;
PRINT NO MORE BOTTLES OF BEER ON THE WALL, NO MORE BOTTLES OF BEER;```