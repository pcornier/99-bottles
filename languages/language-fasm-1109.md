
## Language FASM ##
---
- Author: Peter Kuscsik
- Date: 04/07/06
- Info: http
- Score:  (3.00 in 11 votes)
- URL: 158.197.33.240/~kuscsikp
- Original URL: http://www.99-bottles-of-beer.net/language-fasm-1109.html
---

```;----------------------------
;  Programmed by:
;  Peter Kuscsik
;----------------------------

format	PE console

start:
	mov	ah, 9
	mov	al, 9
	mov	[val], 3939h		;'99'
	mov	ebx, val
loop_:

	push	eax
	mov	esi, ebx
	call	display_string
	mov	esi, txt1
	call	display_string
	mov	esi, ebx
	call	display_string
	mov	esi, txt2
	call	display_string
	mov	esi, txt3
	call	display_string		

	pop	eax
	cmp	al, 2
	jnz	skip1

	cmp	ah, 0
	jz	finish			
skip1:
	dec	al
	dec	[val+1]
	cmp	al, 255 		
	jnz	text

	dec	ah
	dec	[val]			
	mov	byte [val+1], 39h
	mov	al, 9
	cmp	ah, 0
	jnz	text
	inc	ebx			
text:
	push	eax			
	mov	esi, ebx
	call	display_string
	mov	esi, txt4
	call	display_string
	mov	esi, newline
	call	display_string
	pop	eax
	jmp	loop_

finish:

	mov	esi, fin0		
	call	display_string
	mov	esi, newline
	call	display_string
	mov	esi, fin1
	call	display_string
	mov	esi, fin2
	call	display_string
	mov	esi, newline
	call	display_string
	mov	esi, fin3
	call	display_string
	mov	esi, fin4
	call	display_string

	xor	eax, eax
	call	[ExitProcess]		;Exit

display_string:
	push	esi
	push	0FFFFFFF5h		;STD_OUTPUT_HANDLE
	call	[GetStdHandle]
	mov	ebp, eax
	pop	esi
	mov	edi, esi
	or	ecx, -1
	xor	al, al
	repne	scasb
	neg	ecx
	sub	ecx, 2
	push	0
	push	bytes_count
	push	ecx
	push	esi
	push	ebp
	call	[WriteFile]
	ret

val dw ?
zero db 0
newline db 0Dh,0Ah,0
txt1 db ' bottles of beer on the wall, ',0
txt2 db ' bottles of beer.',0Dh,0Ah,0
txt3 db 'Take one down, pass it around, ',0
txt4 db ' bottles of beer on the wall.',0Dh,0Ah,0
fin0 db '1 bottle of beer on the wall,',0Dh,0Ah,0
fin1 db '1 bottle of beer on the wall, one bottle of beer.',0Dh,0Ah,0
fin2 db 'Take one down, pass it around, no more bottles of beer on the wall',0Dh,0Ah,0
fin3 db 'No more bottles of beer on the wall, no more bottles of beer.',0Dh,0Ah,0
fin4 db 'Go to the store and buy some more, 99 bottles of beer on the wall.',0Dh,0Ah,0

bytes_count dd ?

section '.idata' import data readable writeable

  dd 0,0,0,rva kernel_name,rva kernel_table
  dd 0,0,0,0,0

  kernel_table:
    ExitProcess dd rva _ExitProcess
    WriteFile dd rva _WriteFile
    GetStdHandle dd rva _GetStdHandle

   dd 0

  kernel_name db 'KERNEL32.DLL',0

  _ExitProcess dw 0
    db 'ExitProcess',0
  _WriteFile dw 0
    db 'WriteFile',0
  _GetStdHandle dw 0
    db 'GetStdHandle',0

section '.reloc' fixups data readable discardable

;SZSV :) , JFH!```