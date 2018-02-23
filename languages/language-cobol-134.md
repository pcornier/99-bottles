
## Language Cobol ##
---
- Author: Donald Fraser
- Date: 04/20/05
- Info: n/a
- Score:  (2.97 in 34 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-cobol-134.html
---

``` IDENTIFICATION DIVISION.
 PROGRAM-ID.BOTTLES_OF_BEER.
 AUTHOR.DONALD FRASER.
*
 ENVIRONMENT DIVISION.
 CONFIGURATION SECTION.
 SOURCE-COMPUTER. VAX.
 OBJECT-COMPUTER. VAX.
*
 INPUT-OUTPUT SECTION.
 FILE-CONTROL.
        SELECT OUTPUT-FILE
                ASSIGN TO BEERS_ON_THE_WALL.
*
 DATA DIVISION.
 FILE SECTION.
 FD OUTPUT-FILE
        LABEL RECORDS ARE OMITTED.
 01 BEERS-OUT                                   PIC X(133).
*
 WORKING-STORAGE SECTION.
 01 FLAGS-COUNTERS-ACCUMULATORS.
        05 FLAGS.
                10 E-O-F                                PIC 9.
                        88 END-OF-FILE                VALUE 1.
        05 COUNTERS.
                10 BOTTLES                      PIC 999
                                                VALUE 0.
 01 RECORD-OUT.
        05 LINE1.
                10 NUMBER-OF-BEERS-1                    PIC ZZ9.
                10                                      PIC X(28)
                                VALUE "BOTTLES OF BEER IN THE WALL ".
                10                                                        PIC
X
                                VALUE ",".
                        10 NUMBER-OF-BEERS-2            PIC ZZ9.
                10                                                        PIC
X.
                10                                      PIC X(17)
                                VALUE "BOTTLES OF BEER.".
        05 LINE2.
                10                                              PIC X(34)
                                VALUE "TAKE ONE DOWN AND PASS IT ARROUND ".
                10 NUMBER-OF-BEERS-3            PIC ZZ9.
                10                                      PIC X.
                10                                      PIC X(28)
                                VALUE "BOTTLES OF BEER IN THE WALL".
*
 PROCEDURE DIVISION.
 DRIVER-MODULE.
      PERFORM INITIALIZATION.
      PERFORM PROCESS UNTIL END-OF-FILE.
      PERFORM TERMINATION.
      STOP RUN.
*
 INITIALIZATION.
        OPEN OUTPUT OUTPUT-FILE.
        ADD 100 TO BOTTLES.
*
 PROCESS.
         IF BOTTLES = 0 THEN
                COMPUTE E-O-F = 1
        ELSE PERFORM WRITE-ROUTINE
        END-IF.
*
 TERMINATION.
        CLOSE OUTPUT-FILE.
*
 WRITE-ROUTINE.
          MOVE BOTTLES TO NUMBER-OF-BEERS-1, NUMBER-OF-BEERS-2.
         COMPUTE BOTTLES = BOTTLES - 1.
         WRITE BEERS-OUT FROM LINE1.
         MOVE BOTTLES TO NUMBER-OF-BEERS-3.
        WRITE BEERS-OUT FROM LINE2.```