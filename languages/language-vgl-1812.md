
## Language VGL ##
---
- Author: Joel Limardo
- Date: 07/03/08
- Info: http
- Score:  (2.67 in 3 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-vgl-1812.html
---

```ENABLE WINDOWS
SET NAME "DISPLAY/"
SET FORMAT "99"

DECLARE indx, stockMsg, outMsg

stockMsg = "Take one down, pass it around,"
indx = 99
outMsg = ""

WHILE (indx > 0) DO
   outMsg = drink(indx)
LITERAL
$outMsg___________ on the wall, $outMsg_______________!
Take one down, pass it around,
$ENDLITERAL
  
   outMsg = drink(indx - 1)

LITERAL
$outMsg___________ on the wall!

$ENDLITERAL
   indx = indx - 1

ENDWHILE
{---------------------------------------------}
ROUTINE drink (VALUE n)
  DECLARE drunkMsg
  
  drunkMsg = STRING(n) : " bottles of beer"
  IF (n = 0) THEN
     drunkMsg = "No more bottles of beer"
  ELSEIF (n = 1) THEN
     drunkMsg = drunkMsg # "s"
  ENDIF
  RETURN(drunkMsg)
ENDROUTINE```