
## Language Openedge (Progress 4GL) ##
---
- Author: Elwin van der Meer
- Date: 01/14/08
- Info: http
- Score:  (3.00 in 16 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-openedge-(progress-4gl)-1666.html
---

```/*------------------------------------------------------------------------
    File        : 99bottles.p
    Purpose     : http://www.99-bottles-of-beer.net/
    Description : 99 bottles of beer
    Author(s)   : Elwin van der Meer
                : elwin@star-lite.nl
                : http://www.star-lite.nl
    Created     : Fri Jan 11 13:31:49 CET 2008
  ----------------------------------------------------------------------*/
DEFINE VARIABLE amountofbottles AS INTEGER NO-UNDO INITIAL 99.
&GLOBAL-DEFINE bbm bottles of beer
&GLOBAL-DEFINE bbs bottle of beer
&GLOBAL-DEFINE otw on the wall
&GLOBAL-DEFINE tow Take one down and pass it around,
&GLOBAL-DEFINE gts Go to the store and buy some more,
FUNCTION drinkBottle RETURNS INTEGER PRIVATE (INPUT bc AS INTEGER) FORWARD.

OUTPUT TO OUTPUT.txt.
drinkBottle(amountofbottles).
OUTPUT CLOSE.

FUNCTION drinkBottle RETURNS INTEGER.
    IF bc >= 0 THEN DO:
        CASE bc:
        WHEN 2 THEN
            PUT UNFORMATTED bc " {&bbm} {&otw}, " bc " {&bbm}" SKIP 
                            "{&tow} " bc - 1 " {&bbs} {&otw}" SKIP.
        WHEN 1 THEN
            PUT UNFORMATTED bc " {&bbs} {&otw}, " bc " {&bbs}" SKIP 
                            "{&tow} no more {&bbm} {&otw}" SKIP.
        WHEN 0 THEN
            PUT UNFORMATTED "no more" " {&bbm} {&otw}, no more {&bbm}" SKIP 
                            "{&gts} " amountofbottles " {&bbm} {&otw}" SKIP.
        OTHERWISE
            PUT UNFORMATTED bc " {&bbm} {&otw}, " bc " {&bbm}" SKIP 
                            "{&tow} " bc - 1 " {&bbm} {&otw}" SKIP.
        END CASE.        
        drinkBottle(bc - 1).
        RETURN bc.
    END.
    RETURN 0. 
END FUNCTION.```