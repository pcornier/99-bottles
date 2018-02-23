
## Language PL/I ##
---
- Author: Anonymous
- Date: 04/20/05
- Info: n/a
- Score:  (2.47 in 19 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-pl-i-548.html
---

```/* And here is the PL/I version: */

 BOTTLES: PROC OPTIONS(MAIN);

   DCL NUM_BOT FIXED DEC(3);
   DCL PHRASE1 CHAR(100) VAR;
   DCL PHRASE2 CHAR(100) VAR;
   DCL PHRASE3 CHAR(100) VAR;

   DO NUM_BOT = 100 TO 1 BY -1;

      PHRASE1 = NUM_BOT||' Bottles of Beer on the wall,';
      PHRASE2 = NUM_BOT||' Bottles of Beer';
      PHRASE3 = 'Take one down and pass it around';
      DISPLAY(PHRASE1||PHRASE2);
      DISPLAY(PHRASE3);
   END;
   PHRASE1 = 'No more Bottles of Beer on the wall, ';
   PHRASE2 = 'No more Bottles of Beer';
   PHRASE3 = 'Go to the store and buy some more';
   DISPLAY(PHRASE1||PHRASE2);
   DISPLAY(PHRASE3);
 END BOTTLES;```