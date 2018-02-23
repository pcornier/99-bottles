
## Language io ##
---
- Author: Laurent Vogel
- Date: 04/20/05
- Info: n/a
- Score:  (1.45 in 11 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-io-335.html
---

```#  io version of 99 bottles of beer
#  Laurent Vogel,  http://lvogel.free.fr
#  Tested with the Amalthea interpreter:
#  http://www.dtek.chalmers.se/~d97masa/files/amalthea084.zip

declare p: -> s c; print_string_ s c.
declare nl: -> c; print_string "" c.
declare a: -> n c; = 0 n (p "No more" c); print_int_ n; c.
declare b: -> n c; = 1 n c; p "s"; c.
declare q: -> n c; a n ; p " bottle"; b n; p " of beer"; c.
declare r: -> n c; q n; p " on the wall,"; nl; q n; p "."; nl;
  p "Take one down, pass it around,"; nl; - n 1 -> n; q n; 
  p " on the wall."; nl; nl; = 0 n c; r n c.
r 99 terminate```