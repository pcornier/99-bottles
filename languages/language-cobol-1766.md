
## Language COBOL ##
---
- Author: Bill Bass
- Date: 04/24/08
- Info: n/a
- Score:  (3.00 in 23 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-cobol-1766.html
---

```       IDENTIFICATION DIVISION.
       PROGRAM-ID.    BOTTLE99.
       AUTHOR.        BILL BASS.
       DATE-WRITTEN.  APR 2008.
       DATE-COMPILED.
      *REMARKS.
      ******************************************************************
      * PURPOSE:
      *   THIS IS A DEMONSTRATION SAMPLE OF A COBOL II PROGRAM.
      *   IT WRITES AN 80 COLUMN OUTPUT FILE CONTAINING THE LYRICS OF
      *   THE SONG "99 BOTTLES OF BEER ON THE WALL".  IT DOES NOT NEED
      *   TO BE AS COMPLEX AS IT IS.  THIS WAS NOT AN ATTEMPT TO WRITE
      *   A "SHORT" PROGRAM OR A "MOST EFFICIENT" PROGRAM.  IT WAS
      *   INTENDED TO SERVE AS AN EXAMPLE OF WHAT ONE MIGHT COMMONLY
      *   SEE IN A "TYPICAL" MAINFRAME COBOL PROGRAM.
      ******************************************************************
       ENVIRONMENT DIVISION.
      ******************************************************************
       INPUT-OUTPUT SECTION.
       FILE-CONTROL.
           SELECT LYRICS-FILE              ASSIGN TO LYRICS.
      ******************************************************************
       DATA DIVISION.
      ******************************************************************
       FILE SECTION.
       FD  LYRICS-FILE
           LABEL RECORDS ARE STANDARD
           RECORDING MODE IS F
           BLOCK CONTAINS    0 RECORDS
           DATA RECORD IS LYRICS-REC.

       01  LYRICS-REC                      PIC X(80).
      *
       WORKING-STORAGE SECTION.
       01  WORK-AREAS.
           05 WS-LYRICS-WRITTEN            PIC S9(8) COMP VALUE ZERO.
           05 WS-BOTTLE-NUM                PIC S9(4) COMP VALUE ZERO.
           05 WS-WHEN-COMPILED.
              10 WS-COMP-DATE.
                 15 WS-COMP-YEAR           PIC 9(4) VALUE ZERO.
                 15 WS-COMP-MON            PIC 9(2) VALUE ZERO.
                 15 WS-COMP-DAY            PIC 9(2) VALUE ZERO.
              10 WS-COMP-TIME.
                 15 WS-COMP-HOUR           PIC 9(2) VALUE ZERO.
                 15 WS-COMP-MIN            PIC 9(2) VALUE ZERO.
                 15 WS-COMP-SEC            PIC 9(2) VALUE ZERO.
                 15 WS-COMP-HSEC           PIC 9(2) VALUE ZERO.
                 15 WS-COMP-TZ-DIR         PIC X(1) VALUE SPACES.
                 15 WS-COMP-TZ-HOUR        PIC 9(2) VALUE ZERO.
                 15 WS-COMP-TZ-MIN         PIC 9(2) VALUE ZERO.
           05 WS-CURR-DATE                 PIC 9(8) VALUE ZERO.
           05 FILLER                       REDEFINES WS-CURR-DATE.
              10 WS-CURR-YEAR              PIC 9(4).
              10 WS-CURR-MON               PIC 9(2).
              10 WS-CURR-DAY               PIC 9(2).
           05 WS-CURR-TIME                 PIC 9(8) VALUE ZERO.
           05 FILLER                       REDEFINES WS-CURR-TIME.
              10 WS-CURR-HOUR              PIC 9(2).
              10 WS-CURR-MIN               PIC 9(2).
              10 WS-CURR-SEC               PIC 9(2).
              10 WS-CURR-HSEC              PIC 9(2).
           05 WS-DISPLAY-NUM               PIC --,---,--9 VALUE ZERO.
      *
       01  BEER-2-DIGIT.
           05 B2D-BOTTLES-1                PIC 99         VALUE ZERO.
           05 FILLER                       PIC X(30)      VALUE
              ' bottles of beer on the wall, '.
           05 B2D-BOTTLES-2                PIC 99         VALUE ZERO.
           05 FILLER                       PIC X(46)      VALUE
              ' bottles of beer.'.
      *
       01  BEER-1-DIGIT.
           05 B1D-BOTTLES-1                PIC 9          VALUE ZERO.
           05 FILLER                       PIC X(30)      VALUE
              ' bottles of beer on the wall, '.
           05 B1D-BOTTLES-2                PIC 9          VALUE ZERO.
           05 FILLER                       PIC X(48)      VALUE
              ' bottles of beer.'.
      *
       01  BEER-1-MORE.
           05 FILLER                       PIC X(30)      VALUE
              '1 bottle of beer on the wall, '.
           05 FILLER                       PIC X(50)      VALUE
              '1 bottle of beer.'.
      *
       01  BEER-NO-MORE.
           05 FILLER                       PIC X(37)      VALUE
              'No more bottles of beer on the wall, '.
           05 FILLER                       PIC X(43)      VALUE
              'no more bottles of beer.'.
      *
       01  TAKE-2-DIGIT.
           05 FILLER                       PIC X(34)      VALUE
              'Take one down and pass it around, '.
           05 T2D-BOTTLES-1                PIC 99         VALUE ZERO.
           05 FILLER                       PIC X(44)      VALUE
              ' bottles of beer on the wall.'.
      *
       01  TAKE-1-DIGIT.
           05 FILLER                       PIC X(34)      VALUE
              'Take one down and pass it around, '.
           05 T1D-BOTTLES-1                PIC 9          VALUE ZERO.
           05 FILLER                       PIC X(45)      VALUE
              ' bottles of beer on the wall.'.
      *
       01  TAKE-1-MORE.
           05 FILLER                       PIC X(34)      VALUE
              'Take one down and pass it around, '.
           05 FILLER                       PIC X(46)      VALUE
              '1 bottle of beer on the wall.'.
      *
       01  TAKE-NO-MORE.
           05 FILLER                       PIC X(34)      VALUE
              'Take one down and pass it around, '.
           05 FILLER                       PIC X(46)      VALUE
              'no more bottles of beer on the wall.'.
      *
       01  BUY-SOME-MORE.
           05 FILLER                       PIC X(35)      VALUE
              'Go to the store and buy some more, '.
           05 FILLER                       PIC X(45)      VALUE
              '99 bottles of beer on the wall.'.
      *
       01  BLANK-LINE                      PIC X(80)      VALUE SPACES.
      ******************************************************************
       PROCEDURE DIVISION.
      ******************************************************************
           ACCEPT WS-CURR-DATE           FROM DATE YYYYMMDD
           ACCEPT WS-CURR-TIME           FROM TIME
           MOVE FUNCTION WHEN-COMPILED     TO WS-WHEN-COMPILED
      *
           DISPLAY '****************************************'
                   '****************************************'
           DISPLAY '**** BEGIN PROGRAM BOTTLE99'
           DISPLAY '**** COMPILED: '
                   WS-COMP-YEAR '/' WS-COMP-MON '/' WS-COMP-DAY ' '
                   WS-COMP-HOUR ':' WS-COMP-MIN ':'
                   WS-COMP-SEC  '.' WS-COMP-HSEC
           DISPLAY '**** START AT: '
                   WS-CURR-YEAR '/' WS-CURR-MON '/' WS-CURR-DAY ' '
                   WS-CURR-HOUR ':' WS-CURR-MIN ':'
                   WS-CURR-SEC  '.' WS-CURR-HSEC
           DISPLAY '****************************************'
                   '****************************************'
           DISPLAY '*'
      *
           OPEN OUTPUT LYRICS-FILE
      *
           MOVE 99                         TO B2D-BOTTLES-1
           MOVE 99                         TO B2D-BOTTLES-2
           WRITE LYRICS-REC              FROM BEER-2-DIGIT
           ADD +1                          TO WS-LYRICS-WRITTEN
      *
           PERFORM 1000-MATCHING-VERSES    THRU 1000-EXIT
               VARYING WS-BOTTLE-NUM FROM 98 BY -1
               UNTIL WS-BOTTLE-NUM < 2
      *
           WRITE LYRICS-REC              FROM TAKE-1-MORE
           WRITE LYRICS-REC              FROM BLANK-LINE
           ADD +2                          TO WS-LYRICS-WRITTEN
      *
           WRITE LYRICS-REC              FROM BEER-1-MORE
           WRITE LYRICS-REC              FROM TAKE-NO-MORE
           WRITE LYRICS-REC              FROM BLANK-LINE
           ADD +3                          TO WS-LYRICS-WRITTEN
      *
           WRITE LYRICS-REC              FROM BEER-NO-MORE
           WRITE LYRICS-REC              FROM BUY-SOME-MORE
           ADD +2                          TO WS-LYRICS-WRITTEN
      *
           CLOSE LYRICS-FILE
      *
           DISPLAY '****************************************'
                   '****************************************'
           DISPLAY '**** RUN STATISTICS FOR PROGRAM BOTTLE99'
           DISPLAY '****************************************'
                   '****************************************'
           DISPLAY '*'
           MOVE WS-LYRICS-WRITTEN          TO WS-DISPLAY-NUM
           DISPLAY '* LYRICS RECORDS WRITTEN = ' WS-DISPLAY-NUM
           DISPLAY '*'
      *
           DISPLAY '****************************************'
                   '****************************************'
           DISPLAY '**** END PROGRAM BOTTLE99'
           ACCEPT WS-CURR-DATE           FROM DATE YYYYMMDD
           ACCEPT WS-CURR-TIME           FROM TIME
           DISPLAY '**** ENDED AT: '
                   WS-CURR-YEAR '/' WS-CURR-MON '/' WS-CURR-DAY ' '
                   WS-CURR-HOUR ':' WS-CURR-MIN ':'
                   WS-CURR-SEC  '.' WS-CURR-HSEC
           DISPLAY '****************************************'
                   '****************************************'
      *
           GOBACK.
      *****************************************************************
      *    THIS PARAGRAPH WRITES THE FIRST 98 MATCHING VERSES
      *****************************************************************
       1000-MATCHING-VERSES.
      *****************************************************************
           IF WS-BOTTLE-NUM > 9
               MOVE WS-BOTTLE-NUM          TO T2D-BOTTLES-1
               MOVE WS-BOTTLE-NUM          TO B2D-BOTTLES-1
               MOVE WS-BOTTLE-NUM          TO B2D-BOTTLES-2

               WRITE LYRICS-REC          FROM TAKE-2-DIGIT
               WRITE LYRICS-REC          FROM BLANK-LINE
               WRITE LYRICS-REC          FROM BEER-2-DIGIT
               ADD +3                      TO WS-LYRICS-WRITTEN
           ELSE
               MOVE WS-BOTTLE-NUM          TO T1D-BOTTLES-1
               MOVE WS-BOTTLE-NUM          TO B1D-BOTTLES-1
               MOVE WS-BOTTLE-NUM          TO B1D-BOTTLES-2

               WRITE LYRICS-REC          FROM TAKE-1-DIGIT
               WRITE LYRICS-REC          FROM BLANK-LINE
               WRITE LYRICS-REC          FROM BEER-1-DIGIT
               ADD +3                      TO WS-LYRICS-WRITTEN
           END-IF
           .
       1000-EXIT. EXIT.```