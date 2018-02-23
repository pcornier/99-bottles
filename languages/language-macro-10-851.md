
## Language Macro-10 ##
---
- Author: Mark H. Zellers`
- Date: 08/28/05
- Info: http
- Score:  (3.00 in 9 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-macro-10-851.html
---

```        TITLE BEER - 99 Bottles of beer on the wall
;
;	By Mark H. Zellers
;
;       This program emits the song 99-bottles of beer on the wall
;       It is a demonstration of PDP-10  assembly language
;
;       This program can be run on the SIMH emulator using the TOPS-10
;       Operating system.
;
;       For more information, see http://www.aracnet.com/~healyzh/pdp10emu.html
;       Or consult Wikipedia for more information about the PDP-10
;

        SEARCH  UUOSYM

        ; Define some registers
        ; note that registers 0 and 1 are used for scratch
        N==2                    ; Register containing number of bottles
        D==3                    ; Digits to output
        E==4                    ; Ending (either take one down or go to the stor
e)
        B==5                    ; "Bottles" or "Bottle"
        LC==6                   ; Either D or "no "
START:: MOVEI   N,^D99  ; Initialize number of bottles
        MOVEI   E, [ASCIZ /You take one down, pass it around, /]
LOOP:

; Convert the current count to a string
;
        MOVE    0,N
        IDIVI   0,^D10
        JUMPE   0,ONEDIG
        ROT     0,-7            ; Move high digit to first character
        ROT     1,^D-14         ; Move low digit to second character
        IOR     0,1             ; Merge the two characters together
        ADD     0,[BYTE (7)60,60,40,0,0]  ; Convert to ASCII and append a blank
        JRST    OUTPUT
ONEDIG: MOVE    0,1
        ROT     0, -7
        ADD     0,[BYTE (7)60,40,0,0,0]
OUTPUT: MOVE    D,0     ; Move result into digit buffer

; Use the appropriate ending for bottles
        MOVEI   B,[ASCIZ/bottles/]
        CAIN    N,1
        MOVEI   B,[ASCIZ/bottle/]

;
; Now check for whether we want the digits or the word no
        MOVEI   LC,D            ; Assume we want the digits
;
        JUMPN   N,PASSIT
        MOVE    D,[ASCIZ/No /]
        MOVEI   LC,[ASCIZ /no /]
        MOVEI   E,[ASCIZ /You go to the store and buy some more,/]

; Now output the strings
;
PASSIT:
        CAIN    N,^D99  ; Skip repeat on first verse
        JRST    SKIPRP
        OUTSTR  0(LC)
        OUTSTR  0(B)            ; "Bottles" or "bottle"
        OUTSTR  [ASCIZ / of beer on the wall.

/]
SKIPRP: OUTSTR  D               ; Number of bottles
        OUTSTR  0(B)            ; "Bottles" or "Bottle"
        OUTSTR  [ASCIZ/ of beer on the wall, /]
        OUTSTR  0(LC)           ; Number of bottles or "no"
        OUTSTR  0(B)
        OUTSTR  [ASCIZ/ of beer.
/]
        OUTSTR  0(E)    ; Take one down or go to store


        SOJGE   N,LOOP          ; Decrement N and loop if N>=0
        OUTSTR  [ASCIZ/ 99 bottles of beer on the wall./]
        EXIT
        END START```