
## Language ILE ##
---
- Author: Anonymous
- Date: 04/20/05
- Info: n/a
- Score:  (2.91 in 11 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-ile-325.html
---

```This is IBM's next generation of RPG.

H*
H*  ILE RPG/400 - 99 Bottles of Beer on the Wall.
H*  (IBM AS/400 Midrange Platform)
H*  (Program Source BOTTLESR1)
H*
FBottlesS1 O    E             WorkStn
C
C                   Z-Add     *HIVAL        Bottles1
C
C                   DoW       Bottles1 > *Zero
C                   Eval      Bottles2 = Bottles1
C                   Write     #Display
C                   Sub       1             Bottles1
C                   EndDo
C
C                   Eval      *InLR = *On
C

-----------------------

A*
A*  ILE RPG/400 - 99 Bottles of Beer on the Wall.
A*  (IBM AS/400 Midrange Platform)
A*  (Display File Source BOTTLESS1)
A*
A                                      DSPSIZ(24 80 *DS3)
A          R #DISPLAY                  FRCDTA
A
A            BOTTLES1       2Y 0O  4  2EDTCDE(4)
A                                  4  5'Bottles of Beer On the Wall,'
A            BOTTLES2       2Y 0O  4 34EDTCDE(4)
A                                  4 37'Bottles of Beer,'
A                                  5  2'Take one down, pass it around.'
A```