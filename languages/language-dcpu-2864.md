
## Language DCPU ##
---
- Author: rey
- Date: 04/12/12
- Info: http
- Score:  (2.67 in 3 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-dcpu-2864.html
---

```SET A, 0x8000
SET B, start_data
SET C, end_data
SUB C, start_data
JSR memcpy

:beer_loop
    JSR sleep
    SET A, 0
    JSR decrement
    SET A, l2
    SUB A, l1
    JSR decrement
    SET A, l3
    SUB A, l1
    JSR decrement
    IFN A, 0xFFFF
        SET PC, beer_loop
JSR sleep
SET A, 0
JSR decrement
SET A, l2
SUB A, l1
JSR decrement
SUB PC, 1

:start_data
:l1
dat "99 bottles of beer on the wall, "
:l2
dat "99 bottles of beer.             "
dat "Take one down and pass it around"
:l3
dat "98 bottles of beer on the wall."
:end_data
dat "### DAMNIT I COPIED TOO MUCH!!! ###"

:decrement
    ADD A, 0x8000
    IFE [A+1], 48 ;; We have d0!j
        SET PC, decrement_big
    SUB [A+1], 1
    set PC, end_decrement
        
    

    :decrement_big
    	SET [A+1], 57
        IFE [A], 0x20 ;; We have space
            SET PC, no_beer
        IFE [A], 49 ;; We have 10
            SET PC, less_than_ten
        SUB [A], 1
        SET PC, end_decrement
    :less_than_ten
        SET [A], 0x20
        SET PC, end_decrement
    :no_beer
        SET [A], 110
        SET [A+1], 111
        SET A, 0xFFFF ;; Signal that there's no more beer
    :end_decrement
        SET PC, POP

:sleep
    SET A, 0x1000
    :sleep_loop
        DIV 0, 0
        MOD 0, 0
        SUB A, 1
        IFN A, 0
            SET PC, sleep_loop
    SET PC, POP

:memcpy ; Credit for this function goes to Tobba
    SET PUSH, J
    SET J, SP
      
    SET SP, B
    ADD B, C
  	
    SET PC, duff
      
    :loop
    IFE SP, B
    SET PC, end
      
	SET [A], [SP++]
	ADD A, 0x01
	SET [A], [SP++]
	ADD A, 0x01
	SET [A], [SP++]
	ADD A, 0x01
	SET [A], [SP++]
	ADD A, 0x01
	SET [A], [SP++]
	ADD A, 0x01
	SET [A], [SP++]
	ADD A, 0x01
	SET [A], [SP++]
	ADD A, 0x01
	SET [A], [SP++]
	ADD A, 0x01
    SET PC, loop
      
    :duff
    AND C, 0x7
    SHL C, 1
    ADD C, 6
    SUB PC, C
    
    :end
      
    SET SP, J
    SET J, POP
	SET PC, POP```