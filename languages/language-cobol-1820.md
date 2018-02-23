
## Language COBOL ##
---
- Author: Joseph James Frantz
- Date: 07/14/08
- Info: http
- Score:  (3.02 in 201 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-cobol-1820.html
---

```       IDENTIFICATION DIVISION.
       PROGRAM-ID. 99-Bottles-of-Beer-On-The-Wall.
       AUTHOR. Joseph James Frantz.
      *COMMENTS.
      ******************************************************************
      * PURPOSE:
      *   This is a sample COBOL program to display the lyrics of the
      *   song "99 Bottles of Beer on the Wall."
      *   This version of the COBOL 99 beers program demonstrates a few
      *   features of COBOL:
      *
      *   1. PERFORM VARYING, Cobol's version of a Loop.
      *   2. ADD/SUBTRACT with GIVING for math calculations.
      *   3. EVALUATE/WHEN, Cobol's version of Case.
      *   4. INSPECT/TALLYING, which finds the number of specified
      *      characters in a variable.
      *   5. Reference Modification:
      *      Var-name(Start character:Number of characters)
      *      which is essentially Cobol's version of text subscripting.
      *   6. Long descriptive variable names.
      *   7. Use of SPACES and ZEROES for field/display values.
      *   8. Highlight the self documenting nature of COBOL.
      ******************************************************************
       DATA DIVISION.
       WORKING-STORAGE SECTION.
       01 Keeping-Track-Variables.
          05 Bottles                      PIC S99   VALUE 0.
          05 Remaining-Bottles            PIC S99   VALUE 0.
          05 Counting                     PIC 99    VALUE 0.
          05 Start-Position               PIC 99    VALUE 0.
          05 Positions                    PIC 99    VALUE 0.
       PROCEDURE DIVISION.
       PASS-AROUND-THOSE-BEERS.
        PERFORM VARYING Bottles FROM 99 BY -1 UNTIL Bottles = -1
          DISPLAY SPACES
          SUBTRACT 1 FROM Bottles GIVING Remaining-Bottles
          EVALUATE Bottles
            WHEN 0
              DISPLAY "No more bottles of beer on the wall, "
                      "no more bottles of beer."
              DISPLAY "Go to the store and buy some more, "
                      "99 bottles of beer on the wall."
            WHEN 1
              DISPLAY "1 bottle of beer on the wall, "
                      "1 bottle of beer."
              DISPLAY "Take one down and pass it around, "
                      "no more bottles of beer on the wall."
            WHEN 2 Thru 99
              MOVE ZEROES TO Counting
              INSPECT Bottles,
                TALLYING Counting FOR LEADING ZEROES
              ADD 1 TO Counting GIVING Start-Position
              SUBTRACT Counting FROM 2 GIVING Positions
              DISPLAY Bottles(Start-Position:Positions)
                      " bottles of beer on the wall, "
                      Bottles(Start-Position:Positions)
                      " bottles of beer."
              MOVE ZEROES TO Counting
              INSPECT Remaining-Bottles TALLYING
                Counting FOR LEADING ZEROES
              ADD 1 TO Counting GIVING Start-Position
              SUBTRACT Counting FROM 2 GIVING Positions
              DISPLAY "Take one down and pass it around, "
                      Remaining-Bottles(Start-Position:Positions)
                      " bottles of beer on the wall."
          END-EVALUATE
        END-PERFORM
       STOP RUN.```