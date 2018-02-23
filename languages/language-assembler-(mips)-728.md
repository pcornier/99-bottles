
## Language Assembler (MIPS) ##
---
- Author: Steve Checkoway
- Date: 06/01/05
- Info: n/a
- Score:  (3.10 in 103 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-assembler-(mips)-728.html
---

```# Written by Steve Checkoway

.data
bottle:	.asciiz	" bottle"
ending:	.asciiz "s"
beer:	.asciiz " of beer"
wall:	.asciiz " on the wall.\n"
take:	.asciiz ".\nTake one down, pass it around,\n"
zero:	.asciiz "No more bottles of beer on the wall.\n"
nl:		.asciiz "\n"

.text
.globl main
main:	li		$t0, 99
		li		$t1, 1
top:	li		$t2, 1
again:	li		$t3, 1
repeat:	li		$v0, 1
		move	$a0, $t0
		syscall
		li		$v0, 4
		la		$a0, bottle
		syscall
		beq		$t0, $t1, single
		nop
		li		$v0, 4
		la		$a0, ending
		syscall
single:	li $v0, 4
		la $a0, beer
		syscall
		beqz	$t3, skip
		nop
		li		$v0, 4
		la		$a0, wall
		syscall
		li		$t3, 0
		beqz	$t2, bottom
		nop
		b		repeat
		nop
skip:	li		$v0, 4
		la		$a0, take
		syscall
		li		$t2, 0
		addiu	$t0, $t0, -1
		bnez	$t0, again
		nop
		b		end
		nop
bottom:	li		$v0, 4
		la		$a0, nl
		syscall
		b		top
		nop
end:	li		$v0, 4
		la		$a0, zero
		syscall
		jr		$ra
		nop```