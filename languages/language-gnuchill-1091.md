
## Language GNUCHILL ##
---
- Author: Wilfried Moser
- Date: 03/16/06
- Info: n/a
- Score:  (2.00 in 5 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-gnuchill-1091.html
---

```--
-- GNUCHILL implemtation of `99 beers on the wall' including correct
-- handling of the lyrics.
--

ninetyninebeersonthewall: MODULE

SYN maxbeersonthewall = 99;

SYNMODE beersrange = INT (0:maxbeersonthewall);
DCL beers BUFFER (1) beersrange;

countbeers: PROCESS ()
   DCL nextbottle beersrange;
   RECEIVE CASE
   (beers in howmuch):
      nextbottle := howmuch - 1
      ON
         (rangefail):
            WRITETEXT (stdout, "No more bottles of beer on the wall, no more bottles of beer.%/");
            WRITETEXT (stdout, "Go to the store and buy some more, 99 bottles of beer on the
wall.%/");
            STOP;
      END;
      WRITETEXT (stdout, "%C bottles of beer on the wall, %C bottles of beer.%/", howmuch,
howmuch);
      WRITETEXT (stdout, "Take one down and pass it around, no more bottles of beer on the
wall.%/");
      SEND beers (nextbottle);
   ESAC;
END countbeers;

DO FOR i IN beersrange;
  START countbeers (-1);
OD;

SEND beers (maxbeersonthewall);
--
-- runtime takes care for remaining processes
-- before exiting.
--
END ninetyninebeersonthewall;```