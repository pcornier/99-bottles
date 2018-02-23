
## Language Assembler (Intel 8086) ##
---
- Author: Alan de Lespinasse
- Date: 04/20/05
- Info: n/a
- Score:  (2.92 in 39 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-assembler-(intel-8086)-45.html
---

```; 99 Bottles of Beer program in Intel 8086 assembly language.
; Assemble to a .COM file for MS-DOS.
;
; Author: Alan deLespinasse
; aldel@alum.mit.edu
; www.aldel.com

code segment
assume cs:code,ds:code
org 100h
start:


; Main loop

mov cx, 99                    ; bottles to start with

loopstart:

call printcx                  ; print the number
mov dx,offset line1           ; print the rest of the first line
mov ah,9                      ; MS-DOS print string routine
int 21h

call printcx                  ; print the number
mov dx,offset line2_3         ; rest of the 2nd and 3rd lines
mov ah,9
int 21h

dec cx                        ; take one down
call printcx                  ; print the number
mov dx,offset line4           ; print the rest of the fourth line
mov ah,9
int 21h

cmp cx, 0                     ; Out of beer?
jne loopstart                 ; if not, continue

int 20h                       ; quit to MS-DOS


; subroutine to print CX register in decimal

printcx:

mov di, offset numbufferend   ; fill the buffer in from the end
mov ax, cx                    ; put the number in AX so we can divide it

printcxloop:
mov dx, 0                     ; high-order word of numerator - always 0
mov bx, 10
div bx                        ; divide DX:AX by 10. AX=quotient, DX=remainder
add dl,'0'                    ; convert remainder to an ASCII character
mov [ds:di],dl                ; put it in the print buffer
cmp ax,0                      ; Any more digits to compute?
je printcxend                 ; if not, end
dec di                        ; put the next digit before the current one
jmp printcxloop               ; loop

printcxend:
mov dx,di                     ; print, starting at the last digit computed
mov ah,9
int 21h
ret


; Data

line1 db ' bottles of beer on the wall,',13,10,'$'
line2_3 db ' bottles of beer,',13,10,'Take one down, pass it around,',13,10,'$'
line4 db ' bottles of beer on the wall.',13,10,13,10,'$'
numbuffer db 0,0,0,0,0
numbufferend db 0,'$'

code ends
end start```