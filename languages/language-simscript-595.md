
## Language SIMSCRIPT ##
---
- Author: Jeremy Konopka
- Date: 04/20/05
- Info: n/a
- Score:  (2.67 in 3 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-simscript-595.html
---

```SIMSCRIPT is a simulation language from CACI and runs on PCs and VAXen.

'' 99 Bottles of Beer using SIMSCRIPT
'' Author: Jeremy Konopka  <konopka@cs.uregina.ca>

PREAMBLE
        PROCESSES
                INCLUDE brewer, drinker
        RESOURCES
                INCLUDE bottle
        DEFINE countem AS A INTEGER VARIABLE

END

MAIN
        CREATE EVERY bottle(1)
        LET U.bottle(1) = 1
        LET countem=100
        ACTIVATE A brewer NOW
        START SIMULATION
        PRINT 1 LINE THUS
           No more bottles of beer on the wall.

END

PROCESS brewer
        FOR I=1 TO 99
        DO
                ACTIVATE A drinker NOW
        LOOP
END

PROCESS drinker

        REQUEST 1 bottle(1)
        RELINQUISH 1 bottle(1)
        LET countem = countem - 1

        IF countem > 1 
        PRINT 3 LINES WITH countem, countem THUS
          ** bottles of beer on the wall.
          ** bottles of beeeeer ...,
          Take one down, pass it around,
        ELSE
        PRINT 3 LINES WITH countem, countem THUS
          ** bottle of beer on the wall.
          ** bottle of beeeeer ...,
          Take it down, pass it around,
        ALWAYS
        IF countem > 2 
        PRINT 2 LINES WITH countem-1 THUS
          ** bottles of beer on the wall.

        ALWAYS
        IF countem = 2 
        PRINT 2 LINES THUS
          One more bottle of beer on the wall.

        ALWAYS
END```