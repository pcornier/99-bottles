
## Language Assembler (Z80) ##
---
- Author: Elroy Sullivan & Barry Goode
- Date: 08/13/09
- Info: http
- Score:  (2.14 in 7 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-assembler-(z80)-2158.html
---

```	;
	; Here it is in Z80 assembler for the CP/M 2.2 operating system.
	; Honorably submitted by Elroy Sullivan & Barry Goode.
	;
	; Developed with Simeon's myz80 CP/M emulator v1.11 under W2k.
	; Macro-80 & Link-80 from Microsoft were used for assembly.
	;
	org	100h
	jp	loop
	;
cntn:	db	99	;Bottles counter.
cnts:	db	'99 $' 	;Must be modified each time around for printing.
str1:	db	'bottles of beer on the wall, $'
str2:	db	'bottles of beer.$'
str3:	db	'Take one down, pass it around, $'
str4:	db	'bottles of beer on the wall.$'
	;
crlf:	db	0dh, 0ah, 24h	;$ terminated.
	;
end0:	db	'1 bottle of beer on the wall.$'
end1:	db	'1 bottle of beer on the wall, $'
end2:	db	'1 bottle of beer.$'
end4:	db	'no more bottles of beer on the wall.$'
	;
ascn:	db	' 0 1 2 3 4 5 6 7 8 910111213141516171819'
	db	'2021222324252627282930313233343536373839'
	db	'4041424344454647484950515253545556575859'
	db	'6061626364656667686970717273747576777879'
	db	'8081828384858687888990919293949596979899'
	;
loop:
	;
	; Print out strings up to losing a bottle.
	;
				; >>>>>> xx	
	ld 	de,cnts		; Load ASCII number address.
	ld	a,(cntn)	; Load number of bottles to A.	
	sbc	a,10		; Set carry flag if less than 10.
	jp	nc,jp1		; Greater than 9 so print both digits.
	inc	de		; Increment DE to skip high digit (space).
jp1:	ld 	c,9		; Specify the BDOS print string instruction.
	call	5		; Call the CP/M BDOS.
				; >>>>>> bottles of beer on the wall,
	ld 	de,str1		; Load string address.
	ld 	c,9		; Specify the BDOS print string instruction.
	call	5		; Call the CP/M BDOS.
				; >>>>>> xx
	ld 	de,cnts		; Load ASCII number address.
	ld	a,(cntn)	; Load number of bottles to A.	
	sbc	a,10		; Set carry flag if less than 10.
	jp	nc,jp2		; Greater than 9 so print both digits.
	inc	de		; Increment DE to skip high digit (space).
jp2:	ld 	c,9		; Specify the BDOS print string instruction.
	call	5		; Call the CP/M BDOS.
				; >>>>>> bottles of beer.
	ld 	de,str2		; Load string address.
	ld 	c,9		; Specify the BDOS print string instruction.
	call	5		; Call the CP/M BDOS.
				; >>>>>> CR/LF.
	ld 	de,crlf		; Load string address.
	ld 	c,9		; Specify the BDOS print string instruction.
	call	5		; Call the CP/M BDOS.
				; >>>>>> Take one down, pass it around,
	ld 	de,str3		; Load string address.
	ld 	c,9		; Specify the BDOS print string instruction.
	call	5		; Call the CP/M BDOS.
	;
	; Decrement our bottle counter.
	;
	ld	a,(cntn)	; Load number of bottles to A.
	dec	a		; Decrease bottles.
	ld	(cntn),a	; Save number of bottles from A.
	;
	; See if we're done (A register is still set).
	;
	cp	1		; Make sure the zero flag is correct.
	jp	z,done		; See if there's only one more bottle.
	;
	; Patch up the counter string (A register is still set).
	;
	ld	hl,cnts		; Put address of ASCII bottles (counter ptr) in HL.
	ex	de,hl		; Swap DE and HL.
	ld	hl,ascn		; Put address of table in HL.
	ld	b,0		; Zero the B (high) register.
	ld	c,a		; Put bottles into C (low).
	add	hl,bc		; Add BC to HL (creates table ptr).
	add	hl,bc		; Must do it twice because 2 chrs per table entry.
	ld	b,(hl)		; Put first chr from table into B.
	ex	de,hl		; Swap DE and HL.	
	ld	(hl),b		; Put first chr into counter string.
	inc	hl		; Increment HL (counter ptr).
	ex	de,hl		; Swap DE and HL.
	inc	hl		; Increment HL (table ptr).
	ld	b,(hl)		; Put second ASCII chr pointed to by HL in B.
	ex	de,hl		; Swap DE and HL.	
	ld	(hl),b		; Put second ASCII chr into ctr string.
	;
	; Print out remainder of second line.
	;
				; >>>>>> xx
	ld 	de,cnts		; Load ASCII number address.
	ld	a,(cntn)	; Load number of bottles to A.	
	sbc	a,10		; Set carry flag if less than 10.
	jp	nc,jp3		; Greater than 9 so print both digits.
	inc	de		; Increment DE to skip high digit (space).
jp3:	ld 	c,9		; Specify the BDOS print string instruction.
	call	5		; Call the CP/M BDOS.
				; >>>>>> bottles of beer on the wall.
	ld 	de,str4		; Load string address.
	ld 	c,9		; Specify the BDOS print string instruction.
	call	5		; Call the CP/M BDOS.
				; >>>>>> CR/LF.
	ld 	de,crlf		; Load string address.
	ld 	c,9		; Specify the BDOS print string instruction.
	call	5		; Call the CP/M BDOS.
	;
	; Loop until done.
	;
	jp	loop		; Keep it up, we're doing great.
	;
done:
	;
	; First, finish up second line from above.
	;
				; >>>>>> 1 bottle of beer on the wall.
	ld 	de,end0		; Load string address.
	ld 	c,9		; Specify the BDOS print string instruction.
	call	5		; Call the CP/M BDOS.
				; >>>>>> CR/LF.
	ld 	de,crlf		; Load string address.
	ld 	c,9		; Specify the BDOS print string instruction.
	call	5		; Call the CP/M BDOS.
	;
	; Now, print first and second lines for the last time.
	;
				; >>>>>> 1 bottle of beer on the wall,
	ld 	de,end1		; Load string address.
	ld 	c,9		; Specify the BDOS print string instruction.
	call	5		; Call the CP/M BDOS.
				; >>>>>> 1 bottle of beer.	
	ld 	de,end2		; Load string address.
	ld 	c,9		; Specify the BDOS print string instruction.
	call	5		; Call the CP/M BDOS.
				; >>>>>> CR/LF.
	ld 	de,crlf		; Load string address.
	ld 	c,9		; Specify the BDOS print string instruction.
	call	5		; Call the CP/M BDOS.
				; >>>>>> Take one down, pass it around,
	ld 	de,str3		; Load string address.
	ld 	c,9		; Specify the BDOS print string instruction.
	call	5		; Call the CP/M BDOS.
				; >>>>>> No more bottles of beer on the wall.
	ld 	de,end4		; Load string address.
	ld 	c,9		; Specify the BDOS print string instruction.
	call	5		; Call the CP/M BDOS.
				; >>>>>> CR/LF.
	ld 	de,crlf		; Load string address.
	ld 	c,9		; Specify the BDOS print string instruction.
	call	5		; Call the CP/M BDOS.
	;
	; That's all folks.
	;
	jp	0		; Return to CP/M.
	end```