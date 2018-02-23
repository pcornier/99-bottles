
## Language BBC BASIC ##
---
- Author: Stelio Passaris
- Date: 09/16/05
- Info: n/a
- Score:  (2.97 in 31 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-bbc-basic-876.html
---

```   10 REM BBC BASIC version
   20 REM by Stelio Passaris
   30 REM http://www.stelio.net
   40 REM Spacing around commands is not necessary.
   50 :
   60 a$=" bottle"
   70 s$="s"
   80 b$=" of beer"
   90 c$=" on the wall"
  100 t$="Take one down and pass it around:"
  110 :
  120 VDU14:REM enables paging mode; press shift to page down.
  130 REM Substitute above line with "VDU2" to send text to printer.
  140 FOR i%=99 TO 1 STEP -1
  150 IF i%=1 THEN s$=""
  160 IF i%<99 THEN PRINT;i%;a$;s$;b$;c$;"."'
  170 PRINT;i%;a$;s$;b$;c$;","'i%;a$;s$;b$;"."'t$
  180 NEXT i%
  190 PRINT"No more";a$;"s";b$;c$;"."
  200 VDU15:REM disables paging mode
  210 REM Substitute above line with "VDU3" to send text to printer.```