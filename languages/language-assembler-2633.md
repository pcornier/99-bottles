
## Language Assembler ##
---
- Author: barrym
- Date: 04/11/11
- Info: http
- Score:  (3.57 in 28 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-assembler-2633.html
---

```/------------------------------------------------------
/          BEER SONG IN PDP-8 ASSEMBLY LANGUAGE
/                 BY BARRYM 2011-04-06
/------------------------------------------------------
/ THE CORRECT, COMPLETE LYRICS ARE OUTPUT TO CONSOLE
/   DEVICE #4 (IN UPPER CASE TO ACCOMODATE SOME OF THE
/   OLDER TERMINALS THAT WERE CERTAINLY USED BEFORE
/   THE VT-52 BECAME POPULAR).
/ EFFORT WAS MADE TO USE ONLY ORIGINAL, NON-EXTENDED
/   INSTRUCTIONS, ENSURING COMPATIBILITY OVER THE
/   WIDEST POSSIBLE RANGE OF HARDWARE.
/ THE PROGRAM IS CODED TO BE SELF-CONTAINED, MEANING
/   THAT IT STAYS COMPLETELY WITHIN ITS OWN BOUNDS
/   AND PERFORMS ITS OWN INTEGER-TO-ASCII CONVERSION
/   AND OUTPUT, THE GOAL BEING TO AVOID ZERO-PAGE
/   CONFLICTS AND OS-SPECIFIC SERVICE REQUESTS.
/ IT ASSEMBLES AND EXECUTES FLAWLESSLY IN BRIAN J.
/   SHELBURNE'S EMULATOR, BUT I COULD NOT TEST IT ON
/   ANY REAL HARDWARE-- I LOST ACCESS TO A REAL PDP-8
/   (AN 8/A AT MY HIGH SCHOOL) BACK IN 1982!
/------------------------------------------------------
/ INITIALIZE.
/------------------------------------------------------
        *0200           / PROGRAM STARTS AT 0200
MAIN,   CLA CLL
        TLS             / WAKE UP THE TERMINAL
        TAD   CMAX      / INITIAL BEER COUNT
/------------------------------------------------------
/ OUTER LOOP: PRINT ALL EXCEPT THE LAST SENTENCE.
/------------------------------------------------------
BEERME, DCA   BEER      / UPDATE THE BEER COUNTER
        STA             / TYPE = -1
        SZL             / SKIP JMS FIRST TIME THROUGH
        JMS   PRBOB     / EMIT "TAKE ONE ... WALL.\"
        CLA
        TAD   CNLINE    / EMPTY LINE BETWEEN VERSES
        DCA   SPTR      / START A NEW VERSE
        JMS   PRBOB     / EMIT " ... WALL, ... BEER.\"
        STA CLL
        TAD   BEER      / DECREMENT THE BEER COUNTER
        SZL             / BEER < 0?
        JMP   BEERME    /   NO: BEERME
/------------------------------------------------------
/ PRINT THE LAST SENTENCE AND HALT.
/------------------------------------------------------
        AND   CMAX
        DCA   BEER      / SET FINAL BEER COUNT TO CMAX
        TAD   CSTORE
        DCA   SPTR
        STA             / TYPE = -1
        JMS   PRBOB     / EMIT "GO TO THE ... WALL.\"
        HLT             / DONE!
        JMP   MAIN      / (HANDLE RESTART REQUEST)
/------------------------------------------------------
/ PRBOB: EMIT A PROPERLY PUNCTUATED BEER SENTENCE,
/   BASED ON THE SENTENCE TYPE (FIRST= 0, SECOND= -1)
/ (USES): PUTS, ITOA, SPTR, BEER, TYPE, CNOMOR, CBOTTL
/ (ENTRY): SENTENCE TYPE IN AC, PRE-STRING ADDR IN SPTR
/ (EXIT): SPTR POINTS TO "TAKE ... " AND AC IS CLEARED
/------------------------------------------------------
PRBOB,  0               / (RETURN ADDRESS SLOT)
        DCA   TYPE      / SAVE PHRASE TYPE FOR LATER
PRBOB2, JMS   PUTS      / EMIT THE PRE-STRING
        TAD   CNOMOR
        DCA   SPTR      / PREPARE TO DISPLAY BEER COUNT
        TAD   BEER
        SNA             / BEER COUNT = 0?
        JMP   PRBOTT    /   YES: SKIP ITOA
        JMS   ITOA      /   NO: EMIT BEER COUNT AND
        CLA             /     SKIP OVER "NO MORE"
        TAD   CBOTTL
        DCA   SPTR
PRBOTT, JMS   PUTS      / EMIT " ... BOTTLE"
        STA
        TAD   BEER
        SNA             / 1 BEER?
        ISZ   SPTR      /   YES: SKIP OVER THE "S"
        JMS   PUTS      / EMIT " ... BEER"
        STA
        TAD   TYPE
        SNA             / TYPE = 1?
        JMP   PUTDOT    /   YES: EMIT ".\" AND RETURN
        JMS   PUTS      / EMIT " ON THE WALL"
        ISZ   TYPE      / TYPE = 0?
        JMP   PRBOB2    /   YES: FINISH FIRST SENTENCE
PUTDOT, TAD   CDOTNL
        DCA   SPTR
        JMS   PUTS      / EMIT ".\"
        JMP I PRBOB     / RETURN TO THE MAIN LOOP
/------------------------------------------------------
/ PUTS: EMIT A NULL-TERMINATED UNPACKED ASCII STRING TO
/   THE CONSOLE.
/ (USES): SPTR, PUTCH.
/ (ENTRY): SPTR POINTS TO THE FIRST CHAR OF THE STRING.
/ (EXIT): SPTR IS POINTED TO THE NEXT STRING IN MEMORY
/   AND AC IS CLEARED.
/------------------------------------------------------
PUTS,   0               / (RETURN ADDRESS SLOT)
        CLA
NXTCHR, TAD I SPTR      / FETCH A STRING CHAR
        ISZ   SPTR      / ADVANCE THE POINTER
        SNA             / IS IT A NULL DELIMITER?
        JMP I PUTS      /   YES: RETURN
        JMS   PUTCH     /   NO: PRINT IT AND LOOP
        JMP   NXTCHR    /     BACK FOR MORE
/------------------------------------------------------
/ ITOA: CONVERT AN UNSIGNED INTEGER TO ASCII CODED
/   DECIMAL AND EMIT TO THE CONSOLE WITH LEADING ZERO
/   SUPPRESSION (0 <= # <= 99)!
/ (USES): PUTCH, TENS, ONES, CBASE, CZERO
/ (ENTRY): AC HOLDS THE UNSIGNED INT
/ (EXIT): AC IS CLEARED
/------------------------------------------------------
ITOA,   0               / (RETURN ADDRESS SLOT)
        CMA CLL
        DCA   ONES      / ONES = -NUM - 1
        DCA   TENS      / TENS = 0
        TAD   ONES      / AC = ONES
DIV10,  TAD   CBASE     / DO (
        ISZ   TENS      /   AC = AC + CBASE
        SNL             /   TENS = TENS + 1
        JMP   DIV10     / ) WHILE AC < 0
        CMA
        TAD   CBASE     / TRANSLATE ONES DIGIT TO ASCII
        TAD   CZERO
        DCA   ONES
        STA
        TAD   TENS
        SNA             / NUM < 10?
        JMP   ONEDIG    /   YES: SUPPRESS LEADING ZERO
        TAD   CZERO     / TRANSLATE TENS DIGIT TO ASCII
        JMS   PUTCH     / EMIT TENS DIGIT
ONEDIG, TAD   ONES
        JMS   PUTCH     / EMIT ONES DIGIT
        JMP I ITOA      / RETURN
/------------------------------------------------------
/ PUTCH: EMIT AN ASCII CHAR TO THE CONSOLE (DEVICE #4).
/   EXECUTION HANGS HERE IF THE CONSOLE ISN'T READY!
/ (ENTRY): AC HOLDS THE CHAR
/ (EXIT): AC IS CLEARED
/------------------------------------------------------
PUTCH,  0               / (RETURN ADDRESS SLOT)
WAIT,   TSF             / IS THE TERMINAL READY?
        JMP   WAIT      /   NO: DO A BUSY-WAIT
        TLS             /   YES: PRINT THE CHAR
        CLA
        JMP I PUTCH     / RETURN
/------------------------------------------------------
/ VARIABLE SECTION
/------------------------------------------------------
SPTR,   0               / STRING POINTER
BEER,   0               / BEER COUNTER
TYPE,   0               / SUB-PHRASE TYPE
TENS,   0               / TENS DIGIT (ITOA)
ONES,   0               / ONES DIGIT (ITOA)
/------------------------------------------------------
/ CONSTANT SECTION
/------------------------------------------------------
CMAX,   0143            / STARTING BEER COUNT IN OCTAL
CBASE,  012             / DECIMAL BASE FOR ITOA
CZERO,  '0'             / ASCII CONVERSION OFFSET
CDOTNL, DOTNL           / SUB-STRING ADDRESSES ...
CNLINE, NLINE
CNOMOR, NOMOR
CBOTTL, BOTTL
CSTORE, STORE
/------------------------------------------------------
/ STRING SECTION
/ (NOTE): THIS SECTION COULD BE CODED IN A PACKED
/    FORMAT TO USE ABOUT 50 FEWER WORDS OF STORAGE,
/    BUT DOING SO WOULD MAKE THE PUTS SUBROUTINE MORE
/    COMPLEX, AN UNNECESSARY TRADE-OFF FOR SUCH A
/    SMALL PROGRAM :-)
/------------------------------------------------------
DOTNL,  '.'
NLINE,  015;012;0
        'TAKE ONE DOWN AND PASS IT AROUND, ';0
NOMOR,  'NO MORE'
BOTTL,  ' BOTTLE';0
        'S OF BEER';0
        ' ON THE WALL';0
        ', ';0
STORE,  'GO TO THE STORE AND BUY SOME MORE, ';0
/------------------------------------------------------
        $MAIN```