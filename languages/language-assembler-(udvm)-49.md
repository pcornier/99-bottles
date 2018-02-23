
## Language Assembler (UDVM) ##
---
- Author: Adam Roach
- Date: 04/20/05
- Info: n/a
- Score:  (3.12 in 25 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-assembler-(udvm)-49.html
---

```; 99 Bottles of Beer on the Wall in UDVM assembly.
;
; See the developing IETF SigComp specification under development
; in the ROHC working group for a language reference.
;
; By Adam Roach <adam at who.net>

at (64)

:registers        pad(8)
:num_bottles      pad(2)
:digit            pad(1)
:digit_lsb        pad(1)
:tens_ascii       pad(1)
:ones_ascii       pad(1)
:bottles_of_beer  pad(16)
:on_the_wall      pad(12)
:lf               pad(1)
:take_one_down    pad(30)

; Padding to make the strings come out an even length
pad(1)

; Executable code must start on a 64-byte boundary
align (64)

:start

; Initialize variables.
MULTILOAD (num_bottles, #, 99, 0, 14906,
  8290,28532,29804,25971,8303,26144,25189,25970,8303,28192,29800,25888,
  30561,27756,2676,24939,25888,28526,25888,25711,30574,11296,28769,29555,
  8297,29728,24946,28533,28260,2560)

:loop
OUTPUT    (tens_ascii, 31) ; "xx bottles of beer on the wall\n"
OUTPUT    (tens_ascii, 18) ; "xx bottles of beer"
OUTPUT    (lf, 31)         ; "\ntake one down, pass it around\n"

SUBTRACT  ($num_bottles, 1)

; Compute the ASCII digit for the tens position
LOAD      (digit, $num_bottles)
DIVIDE    ($digit, 10)
ADD       ($digit, 48)
COPY      (digit_lsb, 1, tens_ascii)

; Compute the ASCII digit for the digits position
LOAD      (digit, $num_bottles)
REMAINDER ($digit, 10)
ADD       ($digit, 48)
COPY      (digit_lsb, 1, ones_ascii)

OUTPUT    (tens_ascii, 31) ; "xx bottles of beer on the wall\n"

COMPARE   ($num_bottles, 0, finish, finish, loop)

:finish

; Signal that we're complete, and store this code as state so
; that it can be referenced by a state identifier in the future.
set (code_length, end - start)
END-MESSAGE (0, 0, code_length, start, start, 6, 1)

:end```