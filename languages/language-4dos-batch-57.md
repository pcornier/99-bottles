
## Language 4DOS Batch ##
---
- Author: Rodney M. Savard
- Date: 04/20/05
- Info: n/a
- Score:  (2.79 in 28 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-4dos-batch-57.html
---

```@ECHO OFF

:: BEER.BTM - 4DOS version 5.5 batch (btm) file
:: by Rodney M. Savard <rodney.savard%phun@phunnet.org>

SETLOCAL

SET plural=`s`

DO bottle = 99 TO 1 BY -1
   ECHOS %bottle% bottle%plural% of beer on the wall,
   ECHO  %bottle% bottle%plural% of beer.

   ECHOS Take one down, pass it around,

   IFF (%@EVAL[%bottle% - 1]) == (0) THEN
      ECHO  no more bottles of beer on the wall.
   ELSE
      IF (%@EVAL[%bottle% - 1]) == (1) UNSET plural
      ECHO  %@EVAL[%bottle% - 1] bottle%plural% of beer on the wall.
      ECHO.
   ENDIFF
ENDDO

ENDLOCAL```