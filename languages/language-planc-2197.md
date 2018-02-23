
## Language Planc ##
---
- Author: Jonny Oddene
- Date: 10/13/09
- Info: n/a
- Score:  (1.00 in 3 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-planc-2197.html
---

```% tab p
% Planc ND-100 version of 99 bottles of beer
% Jonny Oddene, http://www.sintran.com/sintran.html
%
module bottles

integer         : bottle
integer array   : stack (0:1000)

program : bottles
    inistack stack

    for bottle in reverse (1:99) do
      output (1, 'i', bottle)
      output (1, 'a', ' bottle(s) of beer on the wall,$')
      output (1, 'i', bottle)
      output (1, 'a', ' bottle(s) of beer.$')
      output (1, 'a', 'Take one down, pass it around,$')
      output (1, 'i', bottle-1)
      output (1, 'a', ' bottle(s) of beer on the wall.$ $');
    endfor
endroutine bottles
endmodule
$eof```