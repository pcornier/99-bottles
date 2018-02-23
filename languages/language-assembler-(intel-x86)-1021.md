
## Language Assembler (Intel x86) ##
---
- Author: Roman Ovseytsev
- Date: 01/14/06
- Info: n/a
- Score:  (3.00 in 19 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-assembler-(intel-x86)-1021.html
---

```; 99 Bottles of Beer.
; x86 Assembler for Windows console.
;
; by Roman Ovseytsev (tsech@mail.ru, www.eccentrix.com/members/arafel)
;
; Assemble with MASM32:
; ml.exe /c /coff beer.asm
; link.exe /SUBSYSTEM:CONSOLE beer.obj


.486
.model flat, stdcall
option casemap:none 

include \masm32\include\user32.inc
include \masm32\include\kernel32.inc

includelib \masm32\lib\user32.lib
includelib \masm32\lib\kernel32.lib



.data

strng1  db "%i bottle%sof beer on the wall, %i bottle%sof beer.",13,10,0
strng2  db "Take one down and pass it around, %i bottle%sof beer on the wall.",13,10,13,10,0
strng6  db "Go to the store and buy some more, 99 bottles of beer on the wall.",13,10
str1    db "s ",0
str3    db "no more",0


.data?

outnum  dd ?
outbuf  db 75 dup(?)



.code

start PROC 

        invoke  GetStdHandle, -11
        mov     ebx, eax

        mov     esi, 99
        mov     edi, offset str1

l0:     invoke  wsprintf, ADDR outbuf, ADDR strng1, esi, edi, esi, edi

        cmp     esi, offset str3
        jne     @f
        mov     [outbuf], byte ptr "N"

@@:     invoke  WriteConsole, ebx, ADDR outbuf, eax, ADDR outnum, 0

        cmp     esi, offset str3
        je      l2

        dec     esi
        jnz     @f
        mov     [strng2+35], byte ptr "s"
        mov     esi, offset str3
        mov     edi, offset str1

@@:     cmp     esi, 1
        jne     l1
        inc     edi

l1:     invoke  wsprintf, ADDR outbuf, ADDR strng2, esi, edi
        invoke  WriteConsole, ebx, ADDR outbuf, eax, ADDR outnum, 0

        cmp     esi, offset str3
        jne     l0
        mov     [strng1+1], byte ptr "s"
        mov     [strng1+33], byte ptr "s"
        jmp     l0

l2:     invoke  WriteConsole, ebx, ADDR strng6, sizeof strng6, ADDR outnum, 0

        invoke  ExitProcess, 0

start ENDP

end start```