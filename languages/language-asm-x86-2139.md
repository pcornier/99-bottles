
## Language ASM-x86 ##
---
- Author: Joel Stein
- Date: 07/11/09
- Info: http
- Score:  (3.27 in 15 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-asm-x86-2139.html
---

```/**************************************************************************
 * AT&T-x86-Assembly version of the song "99 bottles of beer on the wall"
 * No macros, no external functions
 * Tested with GNU assembler (GNU Binutils for Debian) 2.19.1
 * Compile with: as -o bottles.o bottles.s; ld -o bottles.x bottles.o
 * Author: Joel Stein
 **************************************************************************/

	.text
		
int_to_ascii:			# convert int to ascii and print
	.global int_to_ascii
	pushl   %ebp		# save ebp
	movl    %esp,%ebp       # esp --> ebp
	subl    $12,%esp	# space for string
	pushal			# save regs
	movl    8(%ebp),%eax    # get value from stack
	movl    $10,%esi	# divisor
	movl    %ebp,%ecx       # reg for indirect addressing
NON_ZERO:
	decl    %ecx		# ecx -1 --> ecx
	movl    $0,%edx		# for division
	divl    %esi		# eax / 10
	addb    $'0,%dl		# rest --> ascii
	movb    %dl,(%ecx)      # save digit
	cmpl    $0,%eax		# quotient = 0?
	jne     NON_ZERO
	movl    %ebp,%edx       # calculate lenght
	subl    %ecx,%edx
	pushl	%ecx		# push string address to stack
	pushl	%edx		# push char count to stack
	call 	print		# print string
	addl	$8,%esp		# clear stack
	popal			# restore regs
	movl    %ebp,%esp       # free local memory
	popl    %ebp		# restore ebp
ret

print:				# print to stdout
	.global print
	pushl   %ebp		# save ebp
	movl    %esp,%ebp       # esp --> ebp
	pushal			# save regs
	movl	8(%ebp),%edx	# get value from stack
	movl	12(%ebp),%ecx	# get value from stack
	movl    $4,%eax		# prepare syscall
	movl    $1,%ebx		# stdout
	int     $0x80		# syscall
	popal			# restore regs
	movl    %ebp,%esp       # free local memory
	popl    %ebp		# restore ebp
ret

DEFAULT:			# default case (99-2)
	pushl	%ecx
	call	int_to_ascii
	pushl	$_line_1_1
	pushl	_line_1_1_l
	call 	print
	addl 	$8, %esp
	call 	int_to_ascii
	pushl 	$_line_1_2
	pushl 	_line_1_2_l
	call 	print
	addl 	$8, %esp
	pushl 	$_line_2_1
	pushl 	_line_2_1_l
	call 	print
	addl 	$8, %esp
	popl 	%eax
	decl 	%eax
	pushl 	%eax
	call 	int_to_ascii
	cmpl 	$1, %eax	# if next = 1 goto ONE
	je 	ONE
	pushl 	$_line_2_2
	pushl 	_line_2_2_l
	jmp 	DEFAULT2
ONE:				# prepare for printing one-lines
	pushl 	$_line_2_2_one
	pushl 	_line_2_2_one_l

DEFAULT2:			# print given lines
	call 	print
	addl	$12, %esp       # clean stack
	loop 	LOOP

_start:
		.global _start


	movl 	$99, %ecx
LOOP:				# Main Loop
	cmpl 	$1, %ecx	# if !=1 goto default case
	jne 	DEFAULT		# else print ending
	pushl 	$_ending
	pushl 	_ending_l
	call 	print
	addl 	$8,%esp
	jmp 	DONE
DONE:				# exit programm
	movl 	$1, %eax
	movl 	$0, %ebx
	int 	$0x80
 
		.data
_line_1_1:	.ascii " bottles of beer on the wall, "
_line_1_1_l:	.long .-_line_1_1
_line_1_2:	.ascii " bottles of beer.\n"
_line_1_2_l:	.long .-_line_1_2
_line_2_1:	.ascii "Take one down and pass it around, "
_line_2_1_l:	.long .-_line_2_1
_line_2_2:	.ascii " bottles of beer on the wall.\n\n"
_line_2_2_l:	.long .-_line_2_2
_line_2_2_one:	.ascii " bottle of beer on the wall.\n\n"
_line_2_2_one_l:.long .-_line_2_2_one
_ending:	.ascii "1 bottle of beer on the wall, 1 bottle of beer.\n"
		.ascii "Take one down and pass it around, no more bottles of beer on the wall.\n\n"
		.ascii "No more bottles of beer on the wall, no more bottles of beer.\n"
		.ascii "Go to the store and buy some more, 99 bottles of beer on the wall.\n"
_ending_l:	.long .-_ending```