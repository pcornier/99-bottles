
## Language DBase III ##
---
- Author: Brian Hobbs
- Date: 04/20/05
- Info: n/a
- Score:  (2.73 in 11 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-dbase-iii-202.html
---

```&& BEER.PRG  - 99 Bottles of Beer  - Brian Hobbs  Jan 1996
&& (BHOBBS@cayman.vf.mmc.com)
SET TALK OFF
I=99
DO WHILE I>=1
   b = STR(i,2)
   ? b +" Bottle"
   IF i > 1
      ?? "s"
   ENDIF
   ?? " of beer on the wall "+b+" bottle"
   IF i> 1 
     ?? "s"
     ENDIF
   ?? " of beer"
   ? "   Take one down and pass it around"
   i=i-1
   b = STR(i,2)
   if i = 0
     b = "No more"
     ENDIF
   ? b + " Bottle"
   IF I > 1 .OR. I=0
      ?? "s"
   ENDIF
   ?? " of beer on the wall"
   ?
ENDDO
   ? "No more bottles of beer on the wall, No more bottles of beer"
   ? "Go to the store and buy some more - 99 bottles of beer on the wall"
SET TALK ON```