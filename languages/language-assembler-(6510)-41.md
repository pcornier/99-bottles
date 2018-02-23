
## Language Assembler (6510) ##
---
- Author: Johannes Tevessen
- Date: 04/20/05
- Info: n/a
- Score:  (3.33 in 48 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-assembler-(6510)-41.html
---

```; 
99 bottles of beer - C64 6510 assembler version
; 
written 2001 by Johannes Tevessen <j.tevessen@gmx.net>
;
; 
Self-modifying code.
; 
Compiled size: 192 byte plus 2 byte loading offset.
; 
If you can make a shorter version doing the same,
; 
please contact me.
;
; 
Compile, for example, to $C000 and start
; 
using:
; 
	LOAD "64BEER",8,1
; 
	NEW
; 
	SYS 49152
;
; 
for example: as64 -sC000 64beer.S -o 64beer
;
; 
This code is downloadable:
;
; 
Source: 
	http://www.dummy.de/c64/64beer.S
; 
Compiled: 
	http://www.dummy.de/c64/64beer.bin
;
; 
The code looks like this:
;
; $ ./thex <64beer
; 000000:  00C0A263 2054C0A9 5EA01C20 44C0A9BC    ...c T..^.. D...
; 000010:  A0022044 C02054C0 A95EA010 2044C0A9    .. D. T..^.. D..
; 000020:  7AA02120 44C0CA20 54C0A95E A01C2044    z.! D.. T..^.. D
; 000030:  C0A97AA0 022044C0 8AD0C9A9 9BA02520    ..z.. D.......%
; 000040:  44C0A95E A01E8D48 C0AD00C0 20D2FFEE    D..^...H.... ...
; 000050:  48C088D0 F4608A48 A90020CD BD68AA60    H.....H.. ..h...
; 000060:  20424F54 544C4553 204F4620 42454552     BOTTLES OF BEER
; 000070:  204F4E20 54484520 57414C4C 2E0D5441     ON THE WALL..TA
; 000080:  4B45204F 4E452044 4F574E2C 20504153    KE ONE DOWN, PAS
; 000090:  53204954 2041524F 554E442C 0D474F20    S IT AROUND,.GO
; 0000A0:  544F2054 48452053 544F5245 20414E44    TO THE STORE AND
; 0000B0:  20425559 20534F4D 45204D4F 52452C0D     BUY SOME MORE,.
; 0000C0:  3939                                   99

; 
.org 
$C000

org: 
ldx 
#99
bloop: 
jsr 
xout
	lda	#<bobot
	ldy	#28
	jsr	strout
	lda	#<comcr
	ldy	#2
	jsr	strout
	jsr	xout
	lda	#<bobot
	ldy	#16
	jsr	strout
	lda	#<bobpa
	ldy	#33
	jsr	strout
	dex
	jsr	xout
	lda	#<bobot
	ldy	#28
	jsr	strout
	lda	#<bobpa
	ldy	#2
	jsr	strout
	txa
	bne	bloop
	lda	#<endtx
	ldy	#37
	jsr	strout
	lda	#<bobot
	ldy	#30
strout: 
sta 
ldins+1
ldins: 
lda 
org
	jsr	$ffd2
	inc	ldins+1
	dey
	bne	ldins
outdon: 
rts

xout: 
txa
	pha
	lda	#0
	jsr	$bdcd
	pla
	tax
	rts

bobot: 
.text 
" BOTTLES OF BEER ON THE WALL"
bobpa: 
.text 
"."
	.byte	13
	.text	"TAKE ONE DOWN, PASS IT AROUND,"
	.byte	13
endtx: 
.text 
"GO TO THE STORE AND BUY SOME MORE"
comcr: 
.text 
","
	.byte	13
	.text	"99"
;23456789012345678901234567890123456789012345678901234;
; BEER SONG IN 6510 ASSEMBLER BY BARRYM 2010-06-30    ;
; THANKS TO SBPROJECTS.COM FOR LOTS OF VALUABLE INFO  ;
; AND A NICE ASSEMBLER!  THIS SOURCE TARGETS A C-64,  ;
; BUT CAN BE EASILY ADJUSTED FOR OTHER 65XX DEVICES   ;
; BY CHANGING THE ROM EQUATES FOR ECHO AND ITOA.      ;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
        .CR 6502
        .TF C64BEER.O,BIN
        .OR $0C00
;
ECHO    .EQ $FFD2         ; ROM : EMIT AN ASCII CHAR
ITOA	.EQ $BDCD         ; ROM : EMIT A 16-BIT INT
STBEER  .EQ 99            ; STARTING BEER COUNT
;
; X REG. IS THE BOTTLE COUNTER.
; Y REG. IS THE STRING INDEX POINTER.
; A REG. TAKES CARE OF EVERYTHING ELSE (WITH A LITTLE
;    HELP FROM THE STACK).
; ZERO PAGE ISN'T USED EXCEPT BY THE ROM ROUTINES.
; THE OBJECT CODE OCCUPIES A TOTAL OF 189 BYTES!
;
; PRINT THE COMPLETE, CORRECT SONG (ADJUSTED FOR UPPER-
;    CASE, 40-COLUMN DISPLAY). '1 BOTTLE' AND 'NO MORE
;    BOTTLES' ARE PRINTED TO SPEC.
;
MAIN    LDX #STBEER       ; X=STBEER
        BNE PRSONG        ; (SING THE SONG AND EXIT)
;
; PRINT THE WHOLE SONG EXCEPT FOR THE LAST SENTENCE.
;
BEERME  LDY #TAKE-STR     ; ? "TAKE ONE ... AROUND,"
        JSR PRBOB         ; ? X;" BOTTL ... WALL."
PRSONG  LDY #CR-STR       ; ?
        JSR PRBOB         ; ? X;" BOTTL ... WALL";
        LDY #COMCR-STR    ; ? ","
        JSR PRBOB         ; ? X;" BOTTL ... BEER."
        DEX               ; X=X-1
        BPL BEERME        ; IF X>-1 THEN BEERME
;
; SET UP THE LAST SENTENCE AND FALL THROUGH TO PRBOB
;    (Y REG IS ALREADY SET TO "GO ...").
;
        LDX #STBEER       ; X=STBEER: ? "GO ... MORE,"
;
; PRINT A PROPERLY PUNCTUATED "BOTTLE OF BEER" SUB-
;    PHRASE.
;
PRBOB   TYA               ; (SAVE PRE-STRING POINTER
        PHA               ;    FOR LATER USE)
        JSR PUTS          ; (PRINT THE PRE-STRING)
        TXA               ; IF X=0 THEN ? "NO MORE";
        BEQ PRBOTT        ;    (Y IS ALREADY SET TO GO)
        PHA
        LDA #0
        JSR ITOA          ; IF X<>0 THEN ? X;
        PLA
        TAX
        LDY #BOTTL-STR
PRBOTT  JSR PUTS          ; ? " BOTTLE";
        CPX #1
        BNE PLURAL        ; IF X<>1 THEN ? "S";
        INY
PLURAL  JSR PUTS          ; ? " OF BEER";
        PLA               ; (RETRIEVE PRE-STRING PTR)
        CMP #COMCR-STR
        BEQ NOWALL
        PHA               ; IF (APPROPRIATE) THEN
        JSR PUTS          ;    ? " ON THE WALL";
        PLA
        CMP #CR-STR       ; IF (APPROPRIATE) THEN
        BEQ KPUT          ;    ? "."
NOWALL  LDY #DOTCR-STR
;
; PRINT A HI-BIT-SET TERMINATED STRING @ Y, LEAVING Y @
;    START OF NEXT STRING.
;
PUTS    LDA STR,Y         ; GRAB A STRING CHAR
        INY               ; ADVANCE POINTER
        PHA
        AND #$7F          ; (USE ORA #$80 HERE IF ECHO
        JSR ECHO          ;    EXPECTS NEGATIVE ASCII)
        PLA
        BPL PUTS
KPUT    RTS               ; THE ONLY ONE IN MY PROGRAM!
;
; THIS LYRIC STRING IS OPTIMIZED FOR AN UPPER-CASE 40-
;    COLUMN DISPLAY.  LAYING IT OUT IN THIS PARTICULAR
;    WAY ALLOWED THE ELIMINATION OF SEVERAL 'LDY #'
;    INSTRUCTIONS, MAKING THE PROGRAM LOGIC SHORTER,
;    BUT SLIGHTLY OPAQUE.
;
STR:
TAKE    .AS "TAKE ONE DOWN AND PASS IT AROUND"
COMCR   .AS ","
CR      .AT #13
        .AS "NO MORE"
BOTTL   .AT " BOTTLE"
        .AT "S OF BEER"
        .AT " ON THE WALL"
DOTCR   .AT ".",#13
        .AT "GO TO THE STORE AND BUY SOME MORE,",#13
        .EN

... same beginning as previous sample ...
;
MAIN    LDY #CR-STR       ; ?
STOCK   LDX #STBEER       ; X=STBEER
        BNE PRBOB         ; ? X;" BOTTL ... WALL";
PUTCOM  LDY #COMCR-STR    ; ? ","
        JSR PRBOB         ; ? X;" BOTTL ... BEER."
        DEX               ; X=X-1
        BMI STOCK         ; IF X<0 THEN FINISH THE SONG
;                           WITH A FANCY HACKER TRICK!
        LDY #TAKE-STR     ; ? "TAKE ONE ... AROUND,"
        JSR PRBOB         ; ? X;" BOTTL ... WALL.";
        LDY #CR-STR       ; ?
PRBOB   TYA               ; (SAVE PRE-STRING POINTER
        PHA               ;    FOR LATER USE)
        JSR PUTS          ; (PRINT THE PRE-STRING)
        TXA               ; IF X=0 THEN ? "NO MORE";
        BEQ PRBOTT        ;    (Y IS ALREADY SET TO GO)
        PHA
        LDA #0
        JSR ITOA          ; IF X<>0 THEN ? X;
        PLA
        TAX
        LDY #BOTTL-STR
PRBOTT  JSR PUTS          ; ? " BOTTLE";
        CPX #1
        BNE PLURAL        ; IF X<>1 THEN ? "S";
        INY
PLURAL  JSR PUTS          ; ? " OF BEER";
        PLA               ; (RETRIEVE PRE-STRING PTR)
        CMP #COMCR-STR
        BEQ PUTDOT
        PHA               ; IF (APPROPRIATE) THEN
        JSR PUTS          ;    ? " ON THE WALL";
        PLA
        CMP #CR-STR       ; IF (APPROPRIATE) GOTO
        BEQ PUTCOM        ;    PUTCOM
PUTDOT  LDY #DOTCR-STR    ; ? "."
PUTS    LDA STR,Y         ; GRAB A STRING CHAR
        INY               ; ADVANCE POINTER
        PHA               ; SAVE RAW CHAR
        AND #$7F          ; (USE ORA #$80 HERE IF ECHO
        JSR ECHO          ;    EXPECTS NEGATIVE ASCII)
        PLA               ; RESTORE RAW CHAR
        BPL PUTS          ; LOOP IF HIGH BIT IS CLEAR
        RTS               ; RTS FOR PUTS, PRBOB & MAIN
;
... same ending as previous sample ...
```