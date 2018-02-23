
## Language IBM 4680 BASIC ##
---
- Author: Stuart William McConnachie
- Date: 04/03/06
- Info: http
- Score:  (3.00 in 26 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-ibm-4680-basic-1106.html
---

```!IBM 4680 BASIC Version of "99 Bottles of Beer"
!Stuart William McConnachie 3rd April 2006

INTEGER*2 START.BOTTLES%
INTEGER*2 BOTTLES%


FUNCTION PLURAL$ (NUMBER%, WORD$, ORDINAL$)

    INTEGER*2 NUMBER%
    STRING WORD$
    STRING PLURAL$
    STRING ORDINAL$
    
    STRING SUFFIX$
    STRING NUMBER$
    INTEGER*2 POS%
    INTEGER*2 END%
    INTEGER*2 SPLIT%
    
    POS% = MATCH("[", WORD$, 1)
    IF POS% = 0 THEN POS% = LEN(WORD$) + 1
    END% = MATCH("]", WORD$, POS%)
    IF END% = 0 THEN END% = LEN(WORD$) + 2
    
    SUFFIX$ = MID$(WORD$, POS%+1, END%-POS%-1)
    SPLIT% = MATCH("/", SUFFIX$, 1)
    
    IF NUMBER% = 1 THEN BEGIN
        IF SPLIT% THEN BEGIN
            SUFFIX$ = LEFT$(SUFFIX$,SPLIT%-1)
        ENDIF ELSE BEGIN
            SUFFIX$ = ""
        ENDIF
    ENDIF ELSE BEGIN
        SUFFIX$ = MID$(SUFFIX$, SPLIT%+1, 32767)
    ENDIF
    
    WORD$ = LEFT$(WORD$, POS%-1) + SUFFIX$ + MID$(WORD$, END%+1, 32767)
    
    NUMBER$ = STR$(NUMBER%)
    WHILE LEN(ORDINAL$) <> 0 AND NUMBER% > 0
        POS% = MATCH(",", ORDINAL$, 1)
        IF POS% = 0 THEN POS% = LEN(ORDINAL$) + 1
        ORDINAL$ = MID$(ORDINAL$, POS%+1, 32767)
        NUMBER% = NUMBER% - 1
    WEND
    
    IF LEN(ORDINAL$) THEN BEGIN
        POS% = MATCH(",", ORDINAL$, 1)
        IF POS% = 0 THEN POS% = LEN(ORDINAL$) + 1
        NUMBER$ = LEFT$(ORDINAL$, POS%-1)
    ENDIF    
    
    PLURAL$ = NUMBER$ + " " + WORD$
    
    WORD$ = ""
    SUFFIX$ = ""
    NUMBER$ = ""
    
END FUNCTION
    

FUNCTION BOTTLES$ (NUMBER%)

    INTEGER*2 NUMBER%
    STRING BOTTLES$
    
    BOTTLES$ = PLURAL$ (NUMBER%, "bottle[s] of beer", "no more")
        
END FUNCTION


FUNCTION CAPITAL$ (WORD$)

    STRING WORD$
    STRING CAPITAL$
    
    CAPITAL$ = UCASE$(LEFT$(WORD$,1)) + MID$(WORD$,2,32767)
    WORD$ = ""
    
END FUNCTION


START.BOTTLES% = 99
BOTTLES% = START.BOTTLES%

WHILE BOTTLES% >= 0

    PRINT CAPITAL$(BOTTLES$(BOTTLES%)) + " on the wall, " + BOTTLES$(BOTTLES%) + "."
          
    IF BOTTLES% THEN BEGIN
        PRINT "Take one down and pass it around, " + BOTTLES$(BOTTLES%-1) + " on the wall."
        PRINT
    ENDIF ELSE BEGIN
        PRINT "Go to the store and buy some more, " + BOTTLES$(START.BOTTLES%) + " on the wall."
    ENDIF
    
    BOTTLES% = BOTTLES% - 1
    
WEND

STOP

END```