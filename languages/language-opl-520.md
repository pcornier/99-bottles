
## Language OPL ##
---
- Author: Dave Wilson
- Date: 04/20/05
- Info: n/a
- Score:  (3.00 in 21 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-opl-520.html
---

```OPL (Organiser Programming Language) is the language used by Psion palmtops.

REM ********************************************************************
REM *                        99 Bottles of Beer                        *
REM *                                                                  *
REM * A portable version for those who need this vital application     *
REM * with them at all times. The following is written in Psion OPL,   *
REM * the language used in the popular Series 3 and Series 3a palmtops *
REM * (and other previous Psion products).                             *
REM *                                                                  *
REM * by Dave Wilson, dawilson@brooktree.com                           *
REM *                                                                  *
REM ********************************************************************

PROC Main:
   LOCAL bottles%
   LOCAL bottle$(10)
   CLS
   bottles%=99
   bottle$=" bottles"
   PRINT "99 Bottles of Beer"
   PRINT
   WHILE(bottles% > 0)
      PRINT bottles%;bottle$;" of beer on the wall,"
      PRINT bottles%;bottle$;" of beer on the wall."
      PRINT "Take one down and pass it around,"
      bottles%=bottles%-1
      IF(bottles% = 1)
         bottle$=" bottle"
      ENDIF
      IF(bottles% <> 0)
         PRINT "There'll be ";bottles%;bottles$;" of beer on the wall."
      ELSE
         PRINT "There'll be no bottles of beer on the wall."
      ENDIF
      PRINT
   ENDWH
   PAUSE 0
ENDP```