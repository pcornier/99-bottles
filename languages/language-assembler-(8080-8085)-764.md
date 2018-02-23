
## Language Assembler (8080/8085) ##
---
- Author: Alexis Kotlowy
- Date: 06/24/05
- Info: n/a
- Score:  (2.93 in 121 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-assembler-(8080-8085)-764.html
---

```; 99 bottles of beer song for Intel 8080/8085.
; Requires no operating system, only the 8251
; USART needs to be initialized. 
;
; Compiles under AS8085.
;
; 2005-06-25

	.AREA	PROG	(ABS, OVR)
	.ORG	0X6000

	URTDAT	= 0X80		; 8251 USART PORTS
	URTCNT	= 0X81

	LXI	SP, 0XFFFF	; INITIALIZE STACK POINTER
	MVI	B, 99		; COUNT FROM 99

LOOP:	MVI	H, 0		; NUMBER
	MOV	L, B
	PUSH	B
	CALL	PDEC
	POP	B

	LXI	H, MSG1		; "BOTTLES OF BEER ON THE WALL"
	CALL	PRINT

	MVI	H, 0		; NUMBER
	MOV	L, B
	PUSH	B
	CALL	PDEC
	POP	B

	LXI	H, MSG2		; "BOTTLES OF BEER"
	CALL	PRINT

	LXI	H, MSG3		; "TAKE ONE DOWN AND PASS IT AROUND"
	CALL	PRINT

	DCR	B		; NEXT BOTTLE

	MVI	H, 0		; NUMBER
	MOV	L, B
	PUSH	B
	CALL	PDEC
	POP	B

	LXI	H, MSG4		; "BOTTLES OF BEER ON THE WALL."
	CALL	PRINT

	XRA	A		; LOOP UNTIL B = 0
	CMP	B
	JNZ	LOOP
	HLT
	
MSG1:	.ASCIZ	" bottles of beer on the wall, "
MSG2:	.ASCII	" bottles of beer."
	.DB	0X0D, 0X0A, 0X00
MSG3:	.ASCIZ	"Take one down and pass it around, "
MSG4:	.ASCII	" bottles of beer on the wall."
	.DB	0X0D, 0X0A, 0X0D, 0X0A, 0X00

; PRINT HL AS A DECIMAL NUMBER (0-65535)
PDEC:	XRA	A		; LEADING ZERO FLAG
	STA	PDEC5
	LXI	B, -10000
	CALL	PDEC1
	LXI	B, -1000
	CALL	PDEC1
	LXI	B, -100
	CALL	PDEC1
	MVI	C, -10
	CALL	PDEC1
	MVI	C, -1
	MVI	A, 0XFF		; IF NUMBER IS ZERO, THIS MAKES SURE
	STA	PDEC5		; IT'S PRINTED
PDEC1:	MVI	A, "/"		; "0" - 1
PDEC2:	INR	A
	DAD	B
	JC	PDEC2
	STA	PDEC4		; SUBTRACT BC FROM HL
	MOV	A, L
	SBB	C
	MOV	L, A
	MOV	A, H
	SBB	B
	MOV	H, A
	LDA	PDEC4
	CPI	"0"		; ZERO?
	JNZ	PDEC3
	LDA	PDEC5		; ZERO FLAG SET?
	CPI	0X00
	RZ			; COMMENT OUT TO PRINT LEADING ZEROS
PDEC3:	LDA	PDEC4
	CALL	PCHAR
	MVI	A, 0XFF		; SET LEADING ZERO FLAG
	STA	PDEC5
	RET
PDEC4:	.DB	0		; TEMP FOR 16 BIT SUBTRACTION
PDEC5:	.DB	0		; FLAG FOR LEADING ZEROS


; PRINTS STRING STARTING AT ADDRESS HL, TERMINATING WITH A NULL CHARACTER
PRINT:	MOV	A, M
	CPI	0X00		; WAS THE CHARACTER A ZERO?
	RZ
	CALL	PCHAR		; PRINT NORMAL CHARACTERS
	INX	H
	JMP	PRINT


; PRINT CHARACTER TO THE 8251 
PCHAR:	PUSH	PSW
PCHAR1:	IN	URTCNT
	ANI	0X01		; MASK OFF TXRDY STATUS
	CPI	0X01		; ARE WE READY?
	JNZ	PCHAR1
	POP	PSW
	OUT	URTDAT
	RET```