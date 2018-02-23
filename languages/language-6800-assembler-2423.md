
## Language 6800 Assembler ##
---
- Author: barrym
- Date: 06/14/10
- Info: http
- Score:  (3.58 in 26 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-6800-assembler-2423.html
---

```;    Beer Song for the Motorola 6800 microprocessor
;                by barrym 2010-06-10
;
;Prints the exact song lyrics to a terminal (console)
;   hooked to a late 1970s vintage SWTPC 6800 system,
;   which is the target device for this assembly.
;
;Thanks to Michael Holley for his great documentation!
;Thanks to sbprojects.com for a very nice assembler!!!
;
;The 6800 microprocessor is the slightly older, less
;   popular, and more expensive step-brother of the
;   6502.  Numerous similarities exist between the
;   assembly languages of the two, but the 6800 has
;   its own distinct flavor, which is (judging by
;   how compact the code ended up) particularly well
;   suited to this type of small program.  I am
;   particularly impressed with the two-byte 'bsr'
;   instruction, and I make extensive use of it here.
;
;Effort was made to keep the code footprint as small
;   as possible by re-using substrings and code in
;   a hacker-like style that makes the logic a bit
;   strange to the human eye (the 6800 gobbles it up 
;   without complaint).  The final tally:  116 bytes
;   of code, 106 bytes of text, and about 10 bytes of
;   stack.  This includes int to ascii conversion,
;   blank line between verses, removal of "s" from
;   "1 bottles", substitution of "no more" for "0",
;   and proper capitalization of "No more".
;
;reg b holds the beer counter
;reg x holds the string pointer
;reg a takes care of everything else (with a little
;	help from the stack)
;
	.cr 6800
	.tf beer6800.obj,AP1
;-----------------------------------------------------
;Constant Equates
;-----------------------------------------------------
outeee	.eq $e1d1	Console putchar routine
maxbeer	.eq 99	 	Must be in the range 1..99
	.or $1000
;
main	ldab #maxbeer	b = maxbeer
	bsr prsong	(sing entire song)
	swi		(return to monitor)
;-----------------------------------------------------
;Print the entire song except the last sentence
;-----------------------------------------------------
beerme	bsr prbob	? "Take one ... around, ";
;			? b;" bottl ... wall."
prsong	ldaa #-1	type = -1
	ldx #crlf	?
	bsr prbob	? b;" bottl ... wall";
	clra		type = 0
	ldx #comsp	? ", ";
	bsr prbob	? b;" bottl ... beer."
	ldaa #1		type = 1
	decb		b = b - 1
	bpl beerme	if b > -1 then beerme
;-----------------------------------------------------
;Set up the last sentence and fall through
;-----------------------------------------------------
	ldab #maxbeer	b = maxbeer
	ldx #store	? "Go to the st ... more, ";
;-----------------------------------------------------
;Print properly punctuated bottle sub-phrase
;-----------------------------------------------------
prbob	psha		(save type for later)
	bsr puts	(print pre-string)
	tstb
	beq prnone	if b = 0 then prnone
	pshb
	ldaa #-1
divten	inca
	subb #10
	bcc divten	a = int(b/10)
	pshb
	tsta
	beq onedig
	oraa #"0"	if a then ? a;
	bsr putch
onedig	pula
	adda #10
	oraa #'0'	? b mod 10;
	pulb
	ldx #bottl
	bra prbott	goto prbott
prnone	ldx #omore
	pula		(retrieve type)
	psha
	tsta		if type >= 0 then ? "no more";
	bmi upper
	ldaa #'n'
	bra prbott
upper	ldaa #'N'	if type < 0 then ? "No more";
prbott	bsr putch	? " bottle";
	cmpb #1
	bne plural	if b <> 1 then ? "s";
	inx
plural	bsr puts	? " of beer";	
	pula		(retrieve type)
	tsta
	bne prwall	if type = 0 then
	ldx #dotcr	? ".": return
	bra puts
prwall  psha
	bsr puts	? " on the wall";
	pula
	tsta
	bmi kput	if type > 0 then ? "."
;			return
;-----------------------------------------------------
;Print string at x and leave x at next string in line
;-----------------------------------------------------
puts	ldaa ,x
	inx
putch	psha
	anda #$7f
	jsr outeee	Emit ascii string to terminal
	pula		   up to and including a char
	tsta		   with high bit set
	bpl puts
kput	rts
;-----------------------------------------------------
;Optimized song lyric string
;-----------------------------------------------------
store	.as "Go to the store and buy some more"
comsp	.at ", "
omore	.as "o more"
bottl	.at " bottle"
	.at "s of beer"
	.at " on the wall"
dotcr	.as "."
crlf	.da #$0d,#$8a
	.at "Take one down and pass it around, "
	.en```