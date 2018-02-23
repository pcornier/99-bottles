
## Language Assembler (Z80) ##
---
- Author: Duncan Bayne
- Date: 08/20/05
- Info: http
- Score:  (3.33 in 244 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-assembler-(z80)-843.html
---

```org &a000

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;
; This program prints the '99 bottles of beer' lyrics.  It was lovingly
; handcrafted, assembled and tested using the WinAPE Amstrad CPC 
; Emulator, version 2.0 Alpha 6.
;
; This program is Free Software, and may be used and redistributed under 
; the terms of the GNU LGPL.
;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

ld a,&02
call &bc0e;			; set high-res mode for 80-column text

ld hl,count
ld (hl),&63			; this is the starting number of bottles

.nextbottle
ld a,(count)

ld hl,str_plural
push hl

ld a,(count)
ld h,&00
ld l,a
push hl

ld hl,str_plural
push hl

ld a,(count)
ld h,&00
ld l,a
push hl

ld hl,str_bottles1
push hl
call printf			; print the first line

ld a,(count)
dec a				; decrement the count
cp &01
jr nz,notone
ld hl,str_plural		; null the plural string if we're down to one bottle
ld (hl),&00

.notone
cp &00
jr z,finish
ld (count),a

ld hl,str_plural
push hl

ld a,(count)
ld h,&00
ld l,a
push hl

ld hl,str_bottles2
push hl
call printf			; print the second line

jr nextbottle

.finish
ld hl,str_finish
push hl
call printf			; print the final three lines

ret


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;
; This is a simple version of printf.  It works on a null-terminated 
; format string, with the following parameter types:
;
; %s	null-terminated ASCII string
; %d	single-byte unsigned int
; %c    ASCII character
;
; The single-byte unsigned int is printed in decimal, with leading 
; zeroes dropped.  To print single '%' characters, double them up 
; (e.g. "%%").
;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

.printf
pop bc
pop hl
.charloop
ld a,(hl)
cp &00
jr z,nullterm
cp '%'			; this is a parameter
jr z,parameter
call &bb5a		; this is just a plain ol' ASCII character
.nextchar
inc hl
jr charloop

.nullterm
push bc
ret

.parameter
inc hl			; get the next char, which is the type
ld a,(hl)
cp '%'
jr z,percent		; a plain '%' character
cp 'c'
jr z,char		; a single ASCII character
cp 's'
jr z,string		; a string
cp 'd'          
jr z,number		; a number (8-bit)

.string
pop de			; print a simple null-terminated string
.nextcharstring
ld a,(de)
cp &00
jr z,nulltermstring
call &bb5a
inc de
jr nextcharstring
.nulltermstring
jr nextchar

.percent
call &bb5a		; it's a simple '%' character
jr nextchar

.char
pop de			; print an ASCII character
ld a,e
call &bb5a
jr nextchar

.number
pop de
push hl			; we'll be needing this later
ld a,e
ld hl,hundreds		; reset the place counts
ld (hl),&00
ld hl,tens
ld (hl),&00
ld hl,ones
ld (hl),&00

.dohundreds		; count the hundreds in the number
ld d,&64
ld hl,hundreds
.nexthundred
sub d
jr c,dotens
inc (hl)
jr nexthundred

.dotens			; count the tens in the number
add d
ld d,&0a
ld hl,tens
.nextten
sub d
jr c,doones
inc (hl)
jr nextten

.doones			; whatever is left is the ones
add d
ld (ones),a

ld d,0

.printhundreds
ld a,(hundreds)
cp &00
jr z,printtens		; skip leading zeroes
add a,&30		; print the hundreds
call &bb5a
ld d,1

.printtens
ld a,(tens)
add d
cp &00
jr z,printones		; skip leading zeroes
sub d
ld d,1
add a,&30		; print the tens
call &bb5a

.printones
ld a,(ones)
add a,&30		; print the ones
call &bb5a

pop hl			; take hl back off the stack, oh for more registers
jp nextchar


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;
; These are the data used by the program.
;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

.hundreds
defb &00

.tens
defb &00

.ones
defb &00

.str_bottles1
defm "%d bottle%s of beer on the wall, %d bottle%s of beer."
defb &0d
defb &0a
defb &00

.str_bottles2
defm "Take one down and pass it around, %d bottle%s of beer on the wall."
defb &0d
defb &0a
defb &0d
defb &0a
defb &00

.str_finish
defm "Take one down and pass it around, no more bottles of beer on the wall."
defb &0d
defb &0a
defb &0d
defb &0a
defm "No more bottle of beer on the wall, no more bottles of beer."
defb &0d
defb &0a
defm "Go to the store and buy some more, 99 bottles of beer on the wall."
defb &0d
defb &0a
defb &0d
defb &0a

.str_plural
defm "s"
defb &00

.str_single
defb &00

.count
defb &00```