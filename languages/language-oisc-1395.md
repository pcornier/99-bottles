
## Language OISC ##
---
- Author: Quiveror
- Date: 02/10/07
- Info: http
- Score:  (3.33 in 15 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-oisc-1395.html
---

```# beer.sq in OISC (SUBLEQ) version.
# Visit http://www.mozaika.com.au/oleg/subleq/
# for SUBLEQ assembler and emulator.
# To run, type "sqasm < beer.sq 2>nul | sqrun -stdin".
Z Z L2
L1:p1 d0
d0 dx ?+6
p1 d1; n10 d0
d1 OUT; d0 OUT;
?+11; sb ?+7; len; lb len; 0 OUT; m1 ?-5; m1 len ?-9; dot OUT; nl OUT; nl OUT
L2:d1 OUT; d0 OUT;
?+11; sb ?+7; len; lb len; 0 OUT; m1 ?-5; m1 len ?-9; com OUT; spc OUT
d1 OUT; d0 OUT
?+11; sb ?+7; len; ln len; 0 OUT; m1 ?-5; m1 len ?-9; dot OUT; nl OUT
?+11; st ?+7; len; lt len; 0 OUT; m1 ?-5; m1 len ?-9
dx; nz dx
m1 C1 L1
n10 d0
L3:p1 d0; d0 OUT;
?+11; sb ?+7; len; lb len; 0 OUT; m1 ?-5; m1 len ?-9; dot OUT; nl OUT; nl OUT
d0 OUT; ?+11; sb ?+7; len; lb len; 0 OUT; m1 ?-5; m1 len ?-9; com OUT; spc OUT
d0 OUT; ?+11; sb ?+7; len; ln len; 0 OUT; m1 ?-5; m1 len ?-9; dot OUT; nl OUT
?+11; st ?+7; len; lt len; 0 OUT; m1 ?-5; m1 len ?-9
dx; nz dx
m1 C2 L3
?+11; sz ?+7; len; lz len; 0 OUT; m1 ?-5; m1 len ?-9
0 0 (-1)
. m1:-1 Z:0 p1:1 n10:-10 nz:-'0' pz:'0'
. C1:-(90-1) C2:-(8-1) len:0
. d1:'0'+9 d0:'0'+9 dx:'0' nl:'\n' spc:' ' com:',' dot:'.'
. b:" bottles of beer" n:" on the wall"
. t:"Take one down and pass it around, "
. z:"1 bottle of beer on the wall.\n\n"
. "1 bottle of beer on the wall, 1 bottle of beer.\n"
. "Take one down and pass it around, no more bottles of beer on the wall.\n\n"
. "No more bottles of beer on the wall, no more bottles of beer.\n"
. "Go to the store and buy some more, 99 bottles of beer on the wall.\n"
. sb:-b lb:t-b-1 ln:n-b-1 st:-t lt:z-t-1 sz:-z lz:sb-z-1```