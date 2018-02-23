
## Language ALGOL 60 ##
---
- Author: Tom Herbertson
- Date: 04/20/05
- Info: n/a
- Score:  (3.00 in 33 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-algol-60-24.html
---

```% Algol (60), Unisys MCP (descendant of Burroughs B6700) variant.
%
% January 21, 2003 by Tom Herbertson
% http://members.cox.net/herbertsont/
%
% Run with ;VALUE = <number> to specify initial quantity NEQ 99
% Run with ;SW1 for American ("happen to fall") version
% Run with ;SW2 to spell out numbers
% Send results to printer by running with ;FILE TERM(PRINTER)
% or to disk with ;FILE TERM(DISK,PROTECTION=SAVE,TITLE=<file name>)
% Enter ?HI to quit early
BEGIN
FILE TERM(KIND=REMOTE,MYUSE=OUT);
EBCDIC ARRAY OUTLINE[0:71];
TRANSLATETABLE LOWERTOUPPER
  ("abcdefghijklmnopqrstuvwxyz" TO "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
EBCDIC VALUE ARRAY
   TENS
   ("           ","           ",
    "twenty     ","thirty     ","forty      ","fifty      ",
    "sixty      ","seventy    ","eighty     ","ninety     "),
   UNDER_TWENTY
   ("zero       ","one        ","two        ","three      ",
    "four       ","five       ","six        ","seven      ",
    "eight      ","nine       ","ten        ","eleven     ",
    "twelve     ","thirteen   ","fourteen   ","fifteen    ",
    "sixteen    ","seventeen  ","eighteen   ","nineteen   ");
PROCEDURE BOTTLECOUNT(I,P,SPELLING);
   VALUE I, SPELLING;
   INTEGER I; POINTER P; BOOLEAN SPELLING;
   BEGIN
   POINTER FIRST_LETTER;
   INTEGER T, U;
   IF I EQL 0 THEN
     REPLACE P:P BY "No more"
   ELSE
     BEGIN
     IF SPELLING AND I LEQ 99 THEN
       BEGIN
       T := I DIV 10;
       U := I MOD 10;
       FIRST_LETTER := P;
       IF T GEQ 2 THEN
         BEGIN
         REPLACE P:P BY TENS [T*12] UNTIL = " "; % each entry is 12 chars
         IF U NEQ 0 THEN
           REPLACE P:P BY "-";
         END
       ELSE
         IF T = 1 THEN
           U:=*+10; % bring back the teens
       IF U NEQ 0 THEN
         REPLACE P:P BY UNDER_TWENTY [U*12] UNTIL = " "; % like TENS
       REPLACE FIRST_LETTER BY FIRST_LETTER FOR 1 WITH LOWERTOUPPER;
       END TURNING NUMBER INTO WORDS
     ELSE
       REPLACE P:P BY I FOR * DIGITS
     END;
   REPLACE P:P BY " bottles" FOR 7 + REAL(I NEQ 1), " ";
   END;
DEFINE FORM = REPLACE OP:OP BY # ;
POINTER OP;
BOOLEAN REMOTE_OUTPUT, EARLYEXIT;
INTERRUPT HI;
   BEGIN
   EARLYEXIT := TRUE;
   END;
PROCEDURE SPOUT;
   BEGIN
   WRITE(TERM,72,OUTLINE);
   REPLACE (OP:=OUTLINE) BY " " FOR 72;
   END;
BOOLEAN FALL, SPELL;
REAL TV;
INTEGER BOTTLES;
DEFINE MANTISSAF = [38:39] #, % Determines max single-precision integer
        ALL1 = REAL (NOT FALSE) #,
        MAXINT = ALL1.MANTISSAF #;
REPLACE (OP:=OUTLINE) BY " " FOR 72;
OPEN(TERM);
REMOTE_OUTPUT := (TERM.KIND EQL VALUE(REMOTE));
FALL := MYSELF.SW1;
SPELL := MYSELF.SW2;
IF (TV := MYSELF.TASKVALUE) GTR MAXINT THEN
   BEGIN
   FORM "Too many bottles, using ";
   IF SPELL THEN
     FORM "ninety-nine."
   ELSE
     FORM "99.";
   SPOUT;
   SPOUT; % blank line
   BOTTLES := 99;
   END
ELSE
   IF (BOTTLES := TV) EQL 0 THEN
     BOTTLES := 99;
IF BOTTLES > 99 AND SPELL THEN
   BEGIN
   FORM "I know the words only up to ninety-nine.";
   SPOUT;
   SPOUT; % blank line
   END;
ATTACH HI TO MYSELF.EXCEPTIONEVENT;
FOR BOTTLES := BOTTLES STEP -1 UNTIL 1 DO
   BEGIN
   BOTTLECOUNT(BOTTLES,OP,SPELL);
   FORM "of beer on the wall,";
   SPOUT;
   BOTTLECOUNT(BOTTLES,OP,SPELL);
   FORM "of beer,";
   SPOUT;
   IF FALL THEN
     BEGIN
     FORM "If ";
     IF BOTTLES = 1 THEN
        FORM "that bottle "
     ELSE
        FORM "one of those bottles ";
     FORM "should happen to fall,";
     END
   ELSE
     BEGIN
     FORM "Take ";
     IF BOTTLES = 1 THEN
        FORM "it "
     ELSE
        FORM "one ";
     FORM "down and pass it around,";
     END;
   SPOUT;
   BOTTLECOUNT(BOTTLES-1,OP,SPELL);
   FORM "of beer on the wall.";
   SPOUT;
   IF BOTTLES GTR 1 THEN
     BEGIN
     SPOUT; % interstanza blank separator line
     IF EARLYEXIT THEN
       BEGIN
       FORM "Closing time!";
       SPOUT;
       BOTTLES := 1; % stop loop
       END
     ELSE
       IF REMOTE_OUTPUT THEN
         WHEN (1); % one-second interval to allow terminal to catch up
                   % (and be responsive to EXCEPTIONEVENT (?HI))
     END;
   END OF BOTTLES LOOP;
END.```