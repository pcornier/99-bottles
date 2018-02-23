
## Language Assembler ##
---
- Author: Michael Strosche
- Date: 09/23/09
- Info: http
- Score:  (3.50 in 24 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-assembler-2182.html
---

```;  99 bottles of beer on the wall for Atmel AVR 8-bit MCU with USART, LPM-Command
;
;  written by Michael Strosche
;  http://www.roboter-projekte.de
;
;  tested on ATMega32 @ 16 MHz

.include("m32def.inc")

; 9600 Baud @ 16 MHz
.equ BAUD = 0x0067

.org 0x0000
  rjmp  init

.org 0x002A
init:
  ; init stackpointer
  ldi   r16,  LOW (RAMEND)
  out   SPL,  r16
  ldi   r16,  HIGH(RAMEND)
  out   SPH,  r16

  ; init usart
  ldi   r16,  HIGH(BAUD)
  out   UBRRH,r16
  ldi   r16,  LOW (BAUD)
  out   UBRRL,r16
  ; enable transmitter
  ldi   r16,  (1<<TXEN)
  out   UCSRB,r16
  ; set frame format: 8data, 2stop bit
  ldi   r16,  (1<<URSEL)|(1<<USBS)|(3<<UCSZ0)
  out   UCSRC,r16

  ; number of bottle = 99
  ldi   r17,  99

main:
  rcall dec2ascii

  ldi   r31,  HIGH(txt0<<1)
  ldi   r30,  LOW (txt0<<1)
  rcall put_string
	
  rcall plural

  ldi   r31,  HIGH(txt1<<1)
  ldi   r30,  LOW (txt1<<1)
  rcall put_string
	
  rcall dec2ascii

  ldi   r31,  HIGH(txt0<<1)
  ldi   r30,  LOW (txt0<<1)
  rcall put_string
	
  rcall plural

  ldi   r31,  HIGH(txt2<<1)
  ldi   r30,  LOW (txt2<<1)
  rcall put_string

  ; decrement number of bottles
  dec   r17
	
  cpi   r17,  0
  brne  main__more_than_zero
  ldi   r31,  HIGH(nomore<<1)
  ldi   r30,  LOW (nomore<<1)
  rcall put_string
  rjmp  main__no_numbers
 main__more_than_zero:
  mov   r16,  r17
  rcall dec2ascii
 main__no_numbers:

  ldi   r31,  HIGH(txt0<<1)
  ldi   r30,  LOW (txt0<<1)
  rcall put_string
	
  rcall plural

  ldi   r31,  HIGH(txt3<<1)
  ldi   r30,  LOW (txt3<<1)
  rcall put_string

  ; more bottles? goto main
  cpi   r17,  0
  brne  main

  ; no more bottles

  ldi   r31,  HIGH(nomore_txt0<<1)
  ldi   r30,  LOW (nomore_txt0<<1)
  rcall put_string

  ldi   r31,  HIGH(nomore<<1)
  ldi   r30,  LOW (nomore<<1)
  rcall put_string

  ldi   r31,  HIGH(txt0<<1)
  ldi   r30,  LOW (txt0<<1)
  rcall put_string
	
  rcall plural
	
  ldi   r31,  HIGH(nomore_txt1<<1)
  ldi   r30,  LOW (nomore_txt1<<1)
  rcall put_string

  ldi   r17,  99
  rcall dec2ascii

  ldi   r31,  HIGH(txt0<<1)
  ldi   r30,  LOW (txt0<<1)
  rcall put_string
	
  rcall plural

  ldi   r31,  HIGH(txt3<<1)
  ldi   r30,  LOW (txt3<<1)
  rcall put_string
	
idle:
  ; endless loop
  rjmp  idle
	
put_string:
  ; load character from string
  lpm   r16,  Z+
  ; zero == eof
  cpi   r16,  0x00
  breq  put_string__no_more_characters
  ; transmit character
  rcall put_char
  ; next character
  rjmp	put_string
 put_string__no_more_characters:
  ret
	
put_char:
  ; wait for empty buffer
  sbis  UCSRA,UDRE
  rjmp  put_char
  ; transmit character
  out   UDR,  r16
  ret

dec2ascii:
  mov   r18,  r17
  ldi   r19,  0

  cpi   r18,  10
  brlo  dec2ascii_one_digit

 dec2ascii_loop:
  inc   r19
  subi  r18,  10
  cpi   r18,  10
  brsh  dec2ascii_loop

  rcall print_digit

 dec2ascii_one_digit:
  mov   r19,  r18
  rcall print_digit
  ret

print_digit:
  ldi   r16,  '0'
  add   r16,  r19
  rcall put_char
  ret

plural:
  ; 0 and 2-99 => 's', else => ''
  cpi   r17,  1
  breq  plural__only_one
  ldi   r16,  's'
  rcall put_char
 plural__only_one:
  ret



txt0:
  .db " bottle", 0x00

txt1:
  .db " of beer on the wall, ", 0x00

txt2:
  .db " of beer.", 0x0a, "Take one down and pass it around, ", 0x00

txt3:
  .db " of beer on the wall.", 0x0a, 0x0a, 0x00

nomore:
  .db "no more", 0x00

nomore_txt0:
  .db "No more bottles of beer on the wall, ", 0x00
  
nomore_txt1:
  .db " of beer. ", 0x0a, "Go to the store and buy some more, ", 0x00```