
## Language Assembler (8080) ##
---
- Author: Elroy Sullivan & Barry Goode
- Date: 08/13/09
- Info: http
- Score:  (3.33 in 6 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-assembler-(8080)-2157.html
---

```	;
	; Okay boys and girls.  Let's not forget our history.
	; Here it is in 8080 assembler for the CP/M 2.2 operating system.
	; Honorably submitted by Elroy Sullivan & Barry Goode.
	;
	; Developed with Simeon's myz80 CP/M emulator v1.11 under W2k.
	; The original CP/M ASM and DDT utilities were used for testing.
	;
	org	100h
	jmp	loop
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
	lxi 	d,cnts	; Load ASCII number address.
	lda	cntn	; Load number of bottles to A.	
	sbi	10	; Set carry flag if less than 10.
	jnc	jp1	; Greater than 9 so print both digits.
	inx	d	; Increment DE to skip high digit (space).
jp1:	mvi 	c,9	; Specify the BDOS print string instruction.
	call	5	; Call the CP/M BDOS.
			; >>>>>> bottles of beer on the wall,
	lxi 	d,str1	; Load string address.
	mvi 	c,9	; Specify the BDOS print string instruction.
	call	5	; Call the CP/M BDOS.
			; >>>>>> xx
	lxi 	d,cnts	; Load ASCII number address.
	lda	cntn	; Load number of bottles to A.	
	sbi	10	; Set carry flag if less than 10.
	jnc	jp2	; Greater than 9 so print both digits.
	inx	d	; Increment DE to skip high digit (space).
jp2:	mvi 	c,9	; Specify the BDOS print string instruction.
	call	5	; Call the CP/M BDOS.
			; >>>>>> bottles of beer.
	lxi 	d,str2	; Load string address.
	mvi 	c,9	; Specify the BDOS print string instruction.
	call	5	; Call the CP/M BDOS.
			; >>>>>> CR/LF.
	lxi 	d,crlf	; Load string address.
	mvi 	c,9	; Specify the BDOS print string instruction.
	call	5	; Call the CP/M BDOS.
			; >>>>>> Take one down, pass it around,
	lxi 	d,str3	; Load string address.
	mvi 	c,9	; Specify the BDOS print string instruction.
	call	5	; Call the CP/M BDOS.
	;
	; Decrement our bottle counter.
	;
	lda	cntn	; Load number of bottles to A.
	dcr	a	; Decrease bottles.
	sta	cntn	; Save number of bottles from A.
	;
	; See if we're done (A register is still set).
	;
	cpi	1	; Make sure the zero flag is correct.
	jz	done	; See if there's only one more bottle.
	;
	; Patch up the counter string (A register is still set).
	;
	lxi	h,cnts	; Put address of ASCII bottles (counter ptr) in HL.
	xchg		; Swap DE and HL.
	lxi	h,ascn	; Put address of table in HL.
	mvi	b,0	; Zero the B (high) register.
	mov	c,a	; Put bottles into C (low).
	dad	b	; Add BC to HL (creates table ptr).
	dad	b	; Must do it twice because 2 chrs per table entry.
	mov	b,m	; Put first chr from table into B.
	xchg		; Swap DE and HL.	
	mov	m,b	; Put first chr into counter string.
	inx	h	; Increment HL (counter ptr).
	xchg		; Swap DE and HL.
	inx	h	; Increment HL (table ptr).
	mov	b,m	; Put second ASCII chr pointed to by HL in B.
	xchg		; Swap DE and HL.	
	mov	m,b	; Put second ASCII chr into ctr string.
	;
	; Print out remainder of second line.
	;
			; >>>>>> xx
	lxi 	d,cnts	; Load ASCII number address.
	lda	cntn	; Load number of bottles to A.	
	sbi	10	; Set carry flag if less than 10.
	jnc	jp3	; Greater than 9 so print both digits.
	inx	d	; Increment DE to skip high digit (space).
jp3:	mvi 	c,9	; Specify the BDOS print string instruction.
	call	5	; Call the CP/M BDOS.
			; >>>>>> bottles of beer on the wall.
	lxi 	d,str4	; Load string address.
	mvi 	c,9	; Specify the BDOS print string instruction.
	call	5	; Call the CP/M BDOS.
			; >>>>>> CR/LF.
	lxi 	d,crlf	; Load string address.
	mvi 	c,9	; Specify the BDOS print string instruction.
	call	5	; Call the CP/M BDOS.
	;
	; Loop until done.
	;
	jmp	loop	; Keep it up, we're doing great.
	;
done:
	;
	; First, finish up second line from above.
	;
			; >>>>>> 1 bottle of beer on the wall.
	lxi 	d,end0	; Load string address.
	mvi 	c,9	; Specify the BDOS print string instruction.
	call	5	; Call the CP/M BDOS.
			; >>>>>> CR/LF.
	lxi 	d,crlf	; Load string address.
	mvi 	c,9	; Specify the BDOS print string instruction.
	call	5	; Call the CP/M BDOS.
	;
	; Now, print first and second lines for the last time.
	;
			; >>>>>> 1 bottle of beer on the wall,
	lxi 	d,end1	; Load string address.
	mvi 	c,9	; Specify the BDOS print string instruction.
	call	5	; Call the CP/M BDOS.
			; >>>>>> 1 bottle of beer.	
	lxi 	d,end2	; Load string address.
	mvi 	c,9	; Specify the BDOS print string instruction.
	call	5	; Call the CP/M BDOS.
			; >>>>>> CR/LF.
	lxi 	d,crlf	; Load string address.
	mvi 	c,9	; Specify the BDOS print string instruction.
	call	5	; Call the CP/M BDOS.
			; >>>>>> Take one down, pass it around,
	lxi 	d,str3	; Load string address.
	mvi 	c,9	; Specify the BDOS print string instruction.
	call	5	; Call the CP/M BDOS.
			; >>>>>> No more bottles of beer on the wall.
	lxi 	d,end4	; Load string address.
	mvi 	c,9	; Specify the BDOS print string instruction.
	call	5	; Call the CP/M BDOS.
			; >>>>>> CR/LF.
	lxi 	d,crlf	; Load string address.
	mvi 	c,9	; Specify the BDOS print string instruction.
	call	5	; Call the CP/M BDOS.
	;
	; That's all folks.
	;
	jmp	0	; Return to CP/M.
	end```