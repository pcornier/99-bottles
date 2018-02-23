
## Language Assembler (PIC/14bit) ##
---
- Author: Thilo Manske
- Date: 04/20/05
- Info: n/a
- Score:  (3.49 in 41 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-assembler-(pic-14bit)-46.html
---

```;	$Id: 99bottlesofbeer.asm,v 1.3 2003/10/23 10:17:21 thilo Exp thilo $
;
;	99 bottles of beer on the wall for any recent midrange Microchip MCU with 14bit
;	programm word (PIC16CXXX/PIC16FXXX family) and USART module, e.g. all PIC16F87x
;
;	written by Thilo Manske 
;
;	needs 3 GP registers and 158 words (~277 bytes) of program memory
;	use gpasm to assemble (see http://gputils.sourceforge.net/)

;	adjust the following lines for your CPU
	list	p=16f873
	include "p16f873.inc"
	__config _WDT_OFF & _XT_OSC

; GP registers, since they are in [0x70..0x7f] they are available in all banks
; and we don't have to care about bank switching when we access them
	cblock 0x70
	pointer
	bottles10
	bottles1
	endc

;; macro to select the correct bank for <address>
;; The default BANKSEL macro always sets/clears both bank bits, but we only
;; use bank 0 and 1 and don't have to take care of RP1
SELBANK 	macro	address
	if address < 0x80
		bcf	STATUS,RP0
	else
		bsf	STATUS,RP0
	endif
	endm

; start
	org 0
	SELBANK SPBRG
	movlw	d'38'		; adjust this for your clock freq/baud rate
	movwf	SPBRG

	movlw	(1<<TXEN)	; enable the transmitter
	movwf	TXSTA		; TXSTA is in the same bank as SPBRG

	SELBANK	RCSTA
	movlw	(1<<SPEN)	; enable the serial port
	movwf	RCSTA

restart:
	movlw	9
	movwf	bottles10
	movwf	bottles1

bigloop:
	call	nbottlesofbeer
	call	onthewall
	call 	commacrlf
	call	nbottlesofbeer
	call	stopcrlf

	movlw	takeonedowntxt
	call	stringout
	call	commacrlf

	decf	bottles1,f
	bnz	goon		; second digit==0?

	tstf	bottles10,f	; and first digit==0 as well?
	bz	outofbeer	; no more bottles of beer :(

goon:
	btfss	bottles1,7	; underflow in second digit?
		goto	ok		

	decf	bottles10,f	; yes

	movlw	9
	movwf	bottles1
ok:
	call	nbottlesofbeer
	call	onthewall
	call	stopcrlf
	call	crlf
	goto	bigloop
	
outofbeer:
	movlw	nomoretxt
	call	stringout
	call	bottlesofbeer
	call	stopcrlf

	SELBANK	TXSTA
	btfss	TXSTA,TRMT	; wait for the transmit buffer to drain
		goto	$-1

	sleep			; Good night!

	goto	restart	; since we haven't enabled any interrupts, there isn't
			; any chance the PIC will ever wake up and get here
; subroutines

;;	writes ".\r\n"
stopcrlf
	movlw	'.'
	goto	$+2		; skip next instruction	
;;	writes ",\r\n"
commacrlf:
	movlw	','
	call	charout
;; writes carriage return + linefeed
crlf:
	movlw	'\r'
	call	charout
	movlw	'\n'
;; puts char in w out on the serial bus
charout:
	SELBANK	TXSTA
	btfss	TXSTA,TRMT	; send buffer empty?
		goto $-1

	SELBANK	TXREG
	movwf	TXREG
	return

;; writes "n bottles of beer"
nbottlesofbeer:
	movf	bottles10,w
	bnz	firstdigit	; first digit zero?

	decf	bottles1,w	; second digit one?
	bz	onebottleofbeer	; one last bottle :-/
	goto	seconddigit
firstdigit
	addlw	'0'
	call	charout
seconddigit
	movf	bottles1,w
	addlw	'0'
	call	charout
;; writes "bottles of beer"
bottlesofbeer
	movlw	bottletxt
	call	stringout
	movlw 	's'
	call	charout
;; writes "of beer"
ofbeer
	movlw	ofbeertxt
;; writes string w is pointing to
stringout
	movwf	pointer
	call	getchar
	addlw	0		; test for zero (flag is not set by retlw)
	skpnz
		return		; yes -> end of string
	call	charout
	incf	pointer,w
	goto	stringout
getchar				; this will look weird to people who don't know how
	movwf	PCL		; you read data out of a PICs program memory ;)

;; writes "1 bottle of beer"
onebottleofbeer
	movlw	'1'
	call	charout
	movlw	bottletxt
	call	stringout
	goto	ofbeer
;; writes "on the wall"
onthewall
	movlw	onthewalltxt
	goto	stringout

; "data subroutines"
bottletxt
	dt " bottle{CODE}"
ofbeertxt
	dt " of beer{CODE}"
onthewalltxt
	dt " on the wall{CODE}"
takeonedowntxt
	dt "Take one down, pass it around{CODE}"
nomoretxt
	dt "No more{CODE}"

	end```