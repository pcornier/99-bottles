
## Language CESIL ##
---
- Author: Marinus Oosters
- Date: 05/19/05
- Info: n/a
- Score:  (3.00 in 22 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-cesil-676.html
---

```* 99.CES
* 99 bottles of beer in CESIL
* Author: Marinus Oosters
* CESIL can be found at:
* http://www.obelisk.demon.co.uk/cesil/

      LOAD     99
      STORE    BEERS
DRINK OUT
      PRINT    " bottle"
      SUBTRACT 1
      JIZERO   SNG
      JUMP     PLR
SNG   JUMP     CNT
PLR   PRINT    "s"
CNT   PRINT    " of beer on the wall"
      LINE
      LOAD     BEERS
      OUT
      PRINT    " bottle"
      SUBTRACT 1
      JIZERO   SNG2
      JUMP     PLR2
SNG2  JUMP     CNT2
PLR2  PRINT    "s"
CNT2  PRINT    " of beer"
      LINE
      PRINT    "Take one down, pass it around"
      LINE
      JIZERO   UP
      STORE    BEERS
      OUT
      PRINT    " bottle"
      SUBTRACT 1
      JIZERO   SNG3
      JUMP     PLR3
SNG3  JUMP     CNT3
PLR3  PRINT    "s"
CNT3  PRINT    " of beer on the wall."
      LINE
      LINE
      LOAD     BEERS
      JUMP      DRINK
UP    PRINT    "No more bottles of beer on the wall."
      HALT```