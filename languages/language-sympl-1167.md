
## Language SYMPL ##
---
- Author: Walter Spector
- Date: 05/29/06
- Info: n/a
- Score:  (2.00 in 5 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-sympl-1167.html
---

```PRGM BOT99;
  BEGIN

  #
  ***  BOT99 - 99 BOTTLES OF BEER
  *
  *    PRINTS THE '99 BOTTLES OF BEER' SONG.
  *
  *    W. W. SPECTOR         04/02/14  (FOR THE CONTROLFREAKS)

  **   TO COMPILE AND RUN ON YOUR FAVORITE CDC CYBER (OR
  *    6000/7000) SERIES SYSTEM, USE THE FOLLOWING
  *    COMMANDS:
  *
  *    SYMPL,I=BOT99,L=0,S=SRVLIB.
  *    LGO.

  #

  XREF PROC ENDRUN;          # STOP PROGRAM #
  XREF PROC WRITEH;          # WRITE HOLLERITH STRING #
  XREF PROC WRITEO;          # WRITE ONE WORD #
  XREF PROC WRITER;          # WRITE LOGICAL RECORD #

  DEF OBUFL #64#;            # OUTPUT BUFFER LENGTH #

  ARRAY OBUF[0:OBUFL] S(1);  # OUTPUT BUFFER #
     ITEM ODATA;

  ARRAY OFET S(5);           # OUTPUT FILE ENV TABLE (FET) #
    BEGIN
    ITEM O$LFN   C(0,0,7);   # LOCAL FILE NAME #
    ITEM O$CBITS U(0,42,18); # VARIOUS BITS #
    ITEM O$FIRST I(1,0,60);  # FIRST WORD ADDRESS OF BUFFER #
    ITEM O$IN    I(2,0,60);  # 'IN' POINTER #
    ITEM O$OUT   I(3,0,60);  # 'OUT' POINTER #
    ITEM O$LIMIT I(4,0,60);  # LAST WORD OF BUFFER + 1 #
    END

  DEF NBOTS #99#;            # NO. OF BOTTLES TO START WITH #
  ITEM BOTTLES C(10);        # CURRENT BOTTLE (IN DECIMAL FORM) #
  ITEM IBOT I;               # CURRENT BOTTLE (IN INTEGER FORM) #

  #
  ***  START EXECUTION
  #

  C<0,6>O$LFN   = "OUTPUT";  # SET UP FET
  O$CBITS = 1;
  O$FIRST = LOC (OBUF);
  O$IN    = LOC (OBUF);
  O$OUT   = LOC (OBUF);
  O$LIMIT = LOC (OBUF) + OBUFL;

  CDD (NBOTS, BOTTLES);      # CONVERT FIRST BOTTLE TO DECIMAL #
  FOR IBOT=NBOTS STEP -1 UNTIL 1 DO
    BEGIN
    WRITEO (OFET, BOTTLES);
    WRITEH (OFET, " BOTTLES OF BEER ON THE WALL", 3);
    WRITEO (OFET, BOTTLES);
    WRITEH (OFET, " BOTTLES OF BEER ", 2);

    WRITEH (OFET, "           TAKE ONE DOWN, PASS IT AROUND,", 4);
    CDD (IBOT-1, BOTTLES);
    WRITEO (OFET, BOTTLES);  # CONVERT NEXT BOTTLE TO DECIMAL #
    WRITEH (OFET, " BOTTLES OF BEER ON THE WALL ", 3);
    WRITEH (OFET, " ", 1);
    END

  WRITER (OFET, TRUE);       # FLUSH BUFFER #
  ENDRUN;                    # TIME TO GO TO THE LIQUOR STORE #


  #
  ***  CDD - CONVERT AN INTEGER TO DECIMAL

  RESTRICTIONS:

    INPUT VALUE MUST BE POSITIVE AND AT MOST 10 DIGITS.
  #

  PROC CDD (INT, DEC);
    BEGIN

    DEF CDDL #10#;
    ITEM INT I;              # INTEGER TO BE CONVERTED (IN) #
    ITEM DEC C(CDDL);        # RESULTANT DECIMAL VALUE (OUT) #

    ITEM PINT I;
    ITEM TINT I;
    ITEM CPOS I;
    ITEM DIGIT I;
    ITEM ZERO C(1) = "0";
    ITEM I I;

    TINT = ABS (INT);
    CPOS = CDDL-1;
    FOR I=CDDL STEP -1 UNTIL 1 DO
      BEGIN
      PINT = TINT / 10;
      DIGIT = TINT - PINT*10;
      C<CPOS>DEC = ZERO + DIGIT;
      CPOS = CPOS - 1;
      IF PINT EQ 0 THEN GOTO CHKSGN;
      TINT = PINT;
      END

CHKSGN:
    IF INT LS 0 THEN
      BEGIN
      C<CPOS>DEC = "-";
      CPOS = CPOS - 1;
      END

    FOR I=CPOS STEP -1 UNTIL 0 DO
      C<I>DEC = " ";

    END # CDD #
    
END TERM```