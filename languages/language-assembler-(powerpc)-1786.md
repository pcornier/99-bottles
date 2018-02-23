
## Language Assembler (PowerPC) ##
---
- Author: Crest da Zoltral
- Date: 05/21/08
- Info: http
- Score:  (3.00 in 32 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-assembler-(powerpc)-1786.html
---

```; Written by: Crest da Zoltral
; Run with  : gcc -nostdlib -o 99b 99b.s && ./99b
; Tested with powerpc-apple-darwin8-gcc-4.0.1 (GCC) 4.0.1 (Apple Computer, Inc. build 5367)
; on Darwin Kernel Version 8.11.0: Wed Oct 10 18:26:00 PDT 2007;
;    root:xnu-792.24.17~1/RELEASE_PPC Power Macintosh powerpc
; #

; Syscall number.
.set SYS_writev, 121

.data

	; All but the final verse have equal size.
	.set verse_size  , 0x0078
	.set type_99_size, verse_size
	.set type_10_size, verse_size
	.set type_09_size, verse_size
	.set type_02_size, verse_size
	.set type_01_size, verse_size
	.set type_00_size, 0x0080
	
	; Occurances of each type in the lyrics.
	.set type_99_cnt, ( 99 - 11 + 1 )
	.set type_10_cnt, ( 10 - 10 + 1 )
	.set type_09_cnt, (  9 -  3 + 1 )
	.set type_02_cnt, (  2 -  2 + 1 )
	.set type_01_cnt, (  1 -  1 + 1 )
	.set type_00_cnt, (  0 -  0 + 1 )
	
	; The output buffer has to be large enough to keep all generated verses.
	.set output_buffer_size, type_99_cnt * type_99_size + type_10_size + type_09_cnt * type_09_size

; Align to MPC745X L1 Data Cache block boundary (32 byte boundary).
.align 5

; Allow fast access to up to 65536 bytes through TOC pointer with 16bit immediate offset. 
toc:
	; Content					  Offset   Comment
	/
	; Mutable strings first so they can be loaded
	; with lswi without further address calculation.
	.ascii "99 b"				; + 0x0000 verse 99..11	r13
	.ascii "ottl"				; + 0x0004				r14
	.ascii "ound"				; + 0x0008				r15
	.ascii ", 98"				; + 0x000C				r16
	
	.ascii "9 bo"				; + 0x0010 verse 9..3	r17
	.ascii "ttle"				; + 0x0014				r18
	.ascii " wal"				; + 0x0018				r19
	.ascii "l, 9"				; + 0x001C				r20
	.ascii "d, 8"				; + 0x0020				r21
	.ascii " bot"				; + 0x0024				r22
	
	.ascii "es of be"			; + 0x0028 verse 99..11	f0
	.ascii "er on th"			; + 0x0030				f1
	.ascii "e wall, "			; + 0x0038				f2
	.ascii "er.\nTake"			; + 0x0040				f3
	.ascii " one dow"			; + 0x0048				f4
	.ascii "n and pa"			; + 0x0050				f5
	.ascii "ss it ar"			; + 0x0058				f6
	.ascii " bottles"			; + 0x0060				f7
	.ascii " of beer"			; + 0x0068				f8
	.ascii " on the "			; + 0x0070				f9
	.ascii "wall. \n\n"			; + 0x0078				f10
	
	.ascii "ound, 9 "			; + 0x0080 verse 10		f11
	.ascii "bottles "			; + 0x0088				f12
	.ascii "of beer "			; + 0x0090				f13
	.ascii "on the w"			; + 0x0098				f14
	.ascii "all.  \n\n"			; + 0x00A0				f15
	
	.ascii "s of bee"			; + 0x00A8 verse 9..3	f16
	.ascii "r on the"			; + 0x00B0				f17
	.ascii " bottles"			; + 0x00B8				f18
	.ascii " of beer"			; + 0x00C0				f19
	.ascii ".\nTake o"			; + 0x00C8				f20
	.ascii "ne down "			; + 0x00D0				f21
	.ascii "and pass"			; + 0x00D8				f22
	.ascii "it aroun"			; + 0x00E0				f23
	.ascii "tles of "			; + 0x00E8				f24
	.ascii "beer on "			; + 0x00F0				f25
	.ascii "the wall"			; + 0x00F8				f26
	.ascii ".     \n\n"			; + 0x0100				f27
	
	; To keep code compact the final 3 verses
	; which would require special handling
	; aren't generated.
	
	.ascii "2 bottle"			; + 0x0108 verse 2
	.ascii "s of bee"			; + 0x0110
	.ascii "r on the"			; + 0x0118
	.ascii " wall, 2"			; + 0x0120
	.ascii " bottles"			; + 0x0128
	.ascii " of beer"			; + 0x0130
	.ascii ".\nTake o"			; + 0x0138
	.ascii "ne down "			; + 0x0140
	.ascii "and pass"			; + 0x0148
	.ascii " it arou"			; + 0x0150
	.ascii "nd, 1 bo"			; + 0x0158
	.ascii "ttle of "			; + 0x0160
	.ascii "beer on "			; + 0x0168
	.ascii "the wall"			; + 0x0170
	.ascii ".     \n\n"			; + 0x0178
	
	.ascii "1 bottle"			; + 0x0180 verse 1
	.ascii " of beer"			; + 0x0188
	.ascii " on the "			; + 0x0190
	.ascii "wall, 1 "			; + 0x0198
	.ascii "bottle o"			; + 0x01A0
	.ascii "f beer.\n"			; + 0x01A8
	.ascii "Take one"			; + 0x01B0
	.ascii " down an"			; + 0x01B8
	.ascii "d pass i"			; + 0x01C0
	.ascii "t around"			; + 0x01C8
	.ascii ", no mor"			; + 0x01D0
	.ascii "e bottle"			; + 0x01D8
	.ascii "s of bee"			; + 0x01E0
	.ascii "r on the"			; + 0x01E8
	.ascii " wall.\n\n"			; + 0x01F0
	
	.ascii "No more "			; + 0x01F8 verse 0
	.ascii "bottles "			; + 0x0200
	.ascii "of beer "			; + 0x0208
	.ascii "on the w"			; + 0x0210
	.ascii "all, no "			; + 0x0218
	.ascii "more bot"			; + 0x0220
	.ascii "tles of "			; + 0x0228
	.ascii "beer.\nGo"			; + 0x0230
	.ascii "to the s"			; + 0x0238
	.ascii "tore and"			; + 0x0240
	.ascii " buy som"			; + 0x0248
	.ascii "e more, "			; + 0x0250
	.ascii "99 bottl"			; + 0x0258
	.ascii "es of be"			; + 0x0260
	.ascii "er on th"			; + 0x0268
	.ascii "e wall.\n"			; + 0x0270
	
	; The I/O vectors as required by writev system call allowing
	; the whole lyrics to be written with one system call.
	
	.long 0x00000000			; + 0x0278
	.long output_buffer_size	; + 0x0280
	.long toc + 0x0108			; + 0x0288
	.long 0x00000170			; + 0x0290
	
.text
.align 2
.globl _main

.set linkage_area	   , 0x0018
.set local_vars		   , output_buffer_size
.set frame_size		   , ( linkage_area + local_vars + 15 ) & -16

_main:
	; Setup stack frame saving neither CR nor LR.
	
	stwu	r1, -frame_size ( r1 )
	
	; Load TOC pointer and output buffer pointer.
	addi	r4, r1, linkage_area - 0x0008
	lis		r2, hi16(toc)
	ori		r2, r2, lo16(toc)
	
	; Load verse counter loop counter and divisor
	li		r5, 98			; Verse counter
	li		r6, 10			; Divisor
	li		r7, type_99_cnt	; Loop counter
	mtctr	r7				; and store it in counter register
	
	; Load mutable strings
	
	lswi	r13, r2 , 0x20 & 0x1F	; Load r13..20 with [r2 + 0x0000..0x0020]
	lwz		r21, 0x0020 ( r2 )
	lwz		r22, 0x0024 ( r2 )
	
	; Load non mutable strings
	
	lfd		f0 , 0x0028 ( r2 )
	lfd		f1 , 0x0030 ( r2 )
	lfd		f2 , 0x0038 ( r2 )
	lfd		f3 , 0x0040 ( r2 )
	lfd		f4 , 0x0048 ( r2 )
	lfd		f5 , 0x0050 ( r2 )
	lfd		f6 , 0x0058 ( r2 )
	lfd		f7 , 0x0060 ( r2 )
	lfd		f8 , 0x0068 ( r2 )
	lfd		f9 , 0x0070 ( r2 )
	lfd		f10, 0x0078 ( r2 )
	lfd		f11, 0x0080 ( r2 )
	lfd		f12, 0x0088 ( r2 )
	lfd		f13, 0x0090 ( r2 )
	lfd		f14, 0x0098 ( r2 )
	lfd		f15, 0x00A0 ( r2 )
	lfd		f16, 0x00A8 ( r2 )
	lfd		f17, 0x00B0 ( r2 )
	lfd		f18, 0x00B8 ( r2 )
	lfd		f19, 0x00C0 ( r2 )
	lfd		f20, 0x00C8 ( r2 )
	lfd		f21, 0x00D0 ( r2 )
	lfd		f22, 0x00D8 ( r2 )
	lfd		f23, 0x00E0 ( r2 )
	lfd		f24, 0x00E8 ( r2 )
	lfd		f25, 0x00F0 ( r2 )
	lfd		f26, 0x00F8 ( r2 )
	lfd		f27, 0x0100 ( r2 )
	
	loop_99:
	; Generate verse 99 down to 11
	
		stw		r13, 0x0008 ( r4 )	; [r4 + 0x0004] := 'NN b'
		stw		r14, 0x000C ( r4 )	; [r4 + 0x0008] := 'ottl'
		stfd	f0 , 0x0010 ( r4 )	; [r4 + 0x0010] := 'es of be'
		stfd	f1 , 0x0018 ( r4 )	; [r4 + 0x0018] := 'er on th'
		stfd	f2 , 0x0020 ( r4 )	; [r4 + 0x0020] := 'e wall, '
		stw		r13, 0x0028 ( r4 )	; [r4 + 0x0028] := 'NN b'
		stw		r14, 0x002C ( r4 )	; [r4 + 0x002C] := 'ottl'
		stfd	f0 , 0x0030 ( r4 )	; [r4 + 0x0030] := 'es of be'
		stfd	f3 , 0x0038 ( r4 )	; [r4 + 0x0038] := 'er.\Take'
		stfd	f4 , 0x0040 ( r4 )	; [r4 + 0x0040] := ' one dow'
		stfd	f5 , 0x0048 ( r4 )	; [r4 + 0x0048] := 'n and pa'
		stfd	f6 , 0x0050 ( r4 )	; [r4 + 0x0050] := 'ss it ar'
		stw		r15, 0x0058 ( r4 )	; [r4 + 0x0058] := 'ound'
		
		divwu	r7 , r5 , r6				; r7  := n / 10
		mullw	r8 , r7 , r6				; r8  := ( n / 10 ) * 10
		sub		r8 , r5 , r8				; r9  := n - ( n / 10 ) * 10
		subi	r5 , r5 , 1					; r5  := n - 1
		rlwimi	r16, r7 ,  8, 0x00000F00	; r16 := ', N_'
		rlwimi	r16, r8 ,  0, 0x0000000F	; r16 := ', NN'
		rlwimi	r13, r16, 16, 0xFFFF0000	; r13 := 'NN b'
		
		stw		r16, 0x005C ( r4 )	; [r4 +  0x005C] := ', NN'
		stfd	f7 , 0x0060 ( r4 )	; [r4 +  0x0058] := ' bottles'
		stfd	f8 , 0x0068 ( r4 )	; [r4 +  0x0060] := ' of beer'
		stfd	f9 , 0x0070 ( r4 )	; [r4 +  0x0068] := ' on the '
		stfdu	f10, 0x0078 ( r4 )	; [r4 += 0x0070] := 'wall. \\'
		
	bdnz	loop_99
	
	; Generate verse 10
	stw		r13, 0x0008 ( r4 )	; [r4 + 0x0004] := '10 b'
	stw		r14, 0x000C ( r4 )	; [r4 + 0x0008] := 'ottl'
	stfd	f0 , 0x0010 ( r4 )	; [r4 + 0x0010] := 'es of be'
	stfd	f1 , 0x0018 ( r4 )	; [r4 + 0x0018] := 'er on th'
	stfd	f2 , 0x0020 ( r4 )	; [r4 + 0x0020] := 'e wall, '
	stw		r13, 0x0028 ( r4 )	; [r4 + 0x0028] := '10 b'
	stw		r14, 0x002C ( r4 )	; [r4 + 0x002C] := 'ottl'
	stfd	f0 , 0x0030 ( r4 )	; [r4 + 0x0030] := 'es of be'
	stfd	f3 , 0x0038 ( r4 )	; [r4 + 0x0038] := 'er.\Take'
	stfd	f4 , 0x0040 ( r4 )	; [r4 + 0x0040] := ' one dow'
	stfd	f5 , 0x0048 ( r4 )	; [r4 + 0x0048] := 'n and pa'
	stfd	f6 , 0x0050 ( r4 )	; [r4 + 0x0050] := 'ss it ar'
	stfd	f11, 0x0058 ( r4 )	; [r4 + 0x0058] := 'ound, 9 '
	stfd	f12, 0x0060 ( r4 )	; [r4 + 0x0060] := 'bottles '
	stfd	f13, 0x0068 ( r4 )	; [r4 + 0x0068] := 'of beer '
	stfd	f14, 0x0070 ( r4 )	; [r4 + 0x0070] := 'on the w'
	stfdu	f15, 0x0078 ( r4 )	; [r4 + 0x0078] := 'all.  \\'
	
	li		r7, type_09_cnt
	mtctr	r7
	
	loop_09:
	; Generate verse 9 down to 3
		
		stw		r17, 0x0008 ( r4 )	; [r4 + 0x0004] := 'N bo'
		subis	r17, r17, 0x0100	; r17			:= 'M bo'
		stw		r18, 0x000C ( r4 )	; [r4 + 0x0008] := 'ottl'
		stfd	f16, 0x0010 ( r4 )	; [r4 + 0x0010] := 's of bee'
		stfd	f17, 0x0018 ( r4 )	; [r4 + 0x0018] := 'r on the'
		stw		r19, 0x0020 ( r4 )	; [r4 + 0x0020]	:= ' wal'
		stw		r20, 0x0024 ( r4 )	; [r4 + 0x0024] := 'l, N'
		subi	r20, r20, 0x0001	; r20			:= 'l, M'
		stfd	f18, 0x0028 ( r4 )	; [r4 + 0x0028] := ' bottles'
		stfd	f19, 0x0030 ( r4 )	; [r4 + 0x0030] := ' of beer'
		stfd	f20, 0x0038 ( r4 )	; [r4 + 0x0038] := '.\Take o'
		stfd	f21, 0x0040 ( r4 )	; [r4 + 0x0040] := 'ne down '
		stfd	f22, 0x0048 ( r4 )	; [r4 + 0x0048] := 'and pass'
		stfd	f23, 0x0050 ( r4 )	; [r4 + 0x0050] := 'it aroun'
		stw		r21, 0x0058 ( r4 )	; [r4 + 0x0058] := 'd, N'
		subi	r21, r21, 0x0001	; r21			:= 'd, M'
		stw		r22, 0x005C ( r4 )	; [r4 + 0x005C] := ' bot'
		stfd	f24, 0x0060 ( r4 )	; [r4 + 0x0060] := 'tles of '
		stfd	f25, 0x0068 ( r4 )	; [r4 + 0x0068] := 'beer on '
		stfd	f26, 0x0070 ( r4 )	; [r4 + 0x0070] := 'the wall'
		stfdu	f27, 0x0078 ( r4 )	; [r4 + 0x0070] := '.     \\'
		
	bdnz loop_09
	
	; Set I/O vector 0.
	addi	r4, r1, linkage_area + 0x0000
	stw		r4, 0x0278 ( r2 )
	
	; Cal SYS_writev with the verses.
	li		r0, SYS_writev
	li		r3, 0x0001
	addi	r4, r2, 0x0278
	li		r5, 0x0002
	sc
	b		error
	
	
	xor		r3 , r3 , r3
	lwz		r1 , 0x0000 ( r1 )

error:
	blr```