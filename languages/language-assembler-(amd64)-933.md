
## Language Assembler (AMD64) ##
---
- Author: Berthold St�ger
- Date: 11/07/05
- Info: http
- Score:  (3.45 in 42 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-assembler-(amd64)-933.html
---

```; 99 bottles of beer in AMD64-assembler for Linux.
;
; AMD64 (a.k.a x86_64) is a 64-bit extension to the x86 architecture.
;
; This program does rudimentary memory management via the brk()
; syscall (as can be seen by running it under strace). It features
; (gratuitous) use of the new 64-bit registers and the new program
; counter relative addressing mode.
;
; Compile with "yasm -f elf -m amd64 bottles.asm; ld -s bottles.o"

	BITS	64
	GLOBAL	_start
_start:
	XOR	edi, edi		; end_data_segment = NULL
	PUSH	BYTE 12			; PUSH / POP is the shortest way of loading
	POP	rax			; small immediates. Here: SYS_brk
	SYSCALL
	PUSH	BYTE 99
	POP	rdx			; 99 bottles of beer

	MOV	r10, rax		; base
	MOV	rbx, rax		; act
	MOV	r15, rax		; max
	LEA	r12, [.putchar WRT rip]
.reload:
	LEA	rsi, [BYTE (.txt - .putchar) + r12]
.loop:
	LODSB				; Fetch a byte
	CMP	al, 0
	JG	.char
	CBW
	CWDE
	CDQE				; Byte to Quadword
	ADD	rax, r12
	JMP	rax
.char:
	CALL	r12
	JMP	.loop
.exit:
	MOV	rsi, r10		; buf = Base
	MOV	rdx, rbx
	SUB	rdx, r10		; len = Ptr - Base
	PUSH	BYTE 1
	POP	rdi			; fd = stdout
	MOV	eax, edi		; SYS_write
	SYSCALL

	XOR	edi, edi		; returncode = 0
	PUSH	BYTE 60
	POP	rax			; SYS_exit
	SYSCALL
.nomore:
	PUSH	rsi
	MOV	r13b, 7
	LEA	rsi, [.nomore_txt wrt rip]
.nomore_loop:
	LODSB
	CALL	r12
	DEC	r13b
	JNE	.nomore_loop
	POP	rsi
	JMP	.loop
.plural:
	CMP	dl, 1
	JE	.loop
	MOV	al, 's'
	CALL	r12
	JMP	.loop
.restart:
	CMP	dl, 0
	JE	.loop
	JMP	.reload
.sub:
	DEC	edx
	CMP	dl, 0
	JE	.nomore
.num:
	MOV	eax, edx
	MOV	cl, 10
	DIV	cl
	CMP	al, 0
	JE	.ignore0
	PUSH	rax
	ADD	al, '0'
	CALL	r12
	POP	rax
.ignore0:
	MOV	al, ah
	ADD	al, '0'
	CALL	r12
	JMP	.loop
.putchar:
	MOV	ebp, eax
	CMP	r15, rbx		; Need more mem?
	JG	.putchar_ok
	LEA	rdi, [0x1000 + r15]	; New max (one page at a time...)
	MOV	r15, rdi
	PUSH	BYTE 12
	POP	rax			; SYS_brk
	SYSCALL
.putchar_ok:
	MOV	[rbx], bpl
	INC	rbx
	RET
.txt:
	DB	.num-.putchar, " bottle", .plural-.putchar, " of beer on the wall, "
	DB	.num-.putchar, " bottle", .plural-.putchar, " of beer.", 0x0a
	DB	"Take one down and pass it around, "
	DB	.sub-.putchar, " bottle", .plural-.putchar, " of beer on the wall.", 0x0a, 0x0a
	DB	.restart-.putchar
	DB	"No more bottles of beer on the wall, "
.nomore_txt:
	DB	"no more bottles of beer.", 0x0a
	DB	"Go to the store and buy some more, 99 bottles of beer on the wall.", 0x0a
	DB	.exit-.putchar```