
## Language ao ##
---
- Author: Arturo Borquez E.
- Date: 10/29/05
- Info: n/a
- Score:  (3.02 in 239 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-ao-927.html
---

```# COMBINATORS USED ---------------------------
[? '\n' ?] ?n OP
[(x) x x x] X3 OP
[(_)] X- OP
[-> (_ x) x] ->> OP
[(f i c) [i] [i c <] [] [i f . i 1 -] REC] Downto OP
[{atoi(0 @Str) - Int}] Atoi OP

# THE BOTTLES PROGRAM ------------------------
[X- "Take one down, pass it around, No more bottles of beer on the wall!\n" ?n] Nomore OP

["Take one down, pass it around, " ? 1 - ?
 " bottle(s) of beer on the wall.\n" ?n] Beers OP

[X3 ? " bottle(s) of beer on the wall," ?n ? " bottle(s) of beer." ?n
  [1 =] [Nomore] [Beers] IFTE]
  ARGC 2 = [ARGV 1 ->> Atoi] [1] IFTE 1 Downto```