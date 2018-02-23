
## Language BASIC - TRS-80 ##
---
- Author: Chaith
- Date: 08/31/08
- Info: n/a
- Score:  (2.67 in 40 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-basic---trs-80-1860.html
---

```10 REM 99 Bottles of Beer
20 CLEAR 1000: X=99:LY$="Bottle":LX$=Bottles":LZ$=" of beer on the Wall.":LV$="Take one Down and
pass it around."
30 PRINTX;LX$+LZ$;X;LX$+LEFT$(LZ$,8)
40 PRINTLV$:X=X-1
50 IFX=1THENLX$=LY$
60 PRINTX;LX$+LZ$
70 IFX=0THEN END ELSE 30```