
## Language Occam ##
---
- Author: Tony Curtis
- Date: 04/20/05
- Info: n/a
- Score:  (3.02 in 118 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-occam-512.html
---

```-- compiled with the University of Kent "kroc" compiler
-- Tony Curtis <Tony.Curtis@vcpc.univie.ac.at> 1997
--
PROC beer (CHAN OF BYTE key, screen, error)
 
  VAL INT BEERS IS 99 :                       -- big fridge!
 
  #USE "tty_utils.tco"
  PROC sorp (VAL INT n, CHAN OF BYTE out)     -- singular or plural?
    IF
      n > 1
        out.string ("s", 1, out)
      TRUE
        SKIP
  :
  PROC sayit (VAL INT n, CHAN OF BYTE out)     -- text for each iteration
    SEQ
      out.number (n, 1, out)
      out.string (" bottle", 1, out)
      sorp (n, out)
      out.string (" of beer on the wall, ", 1, out)
      out.number (n, 1, out)
      out.string (" bottle", 1, out)
      sorp (n, out)
      out.string (" of beer.", 1, out)
      out.string ("*c*n", 1, out)
      out.string ("Take one down, pass it around, ", 1, out)
      VAL INT next IS  n - 1 :
      IF
        next > 0
          SEQ
            out.number (next, 1, out)
            out.string (" bottle", 1, out)
            sorp (next, out)
            out.string (" of beer on the wall.", 1, out)
        TRUE
          out.string ("no bottles of beer on the wall.", 1, out)
      out.string ("*c*n", 1, out)
  :
  PROC beers (VAL INT nbeers, CHAN OF BYTE out)
    INT b :
    SEQ
      b := nbeers
      WHILE b > 0
        SEQ
          sayit (b, out)
          b := b - 1
  :
  beers (BEERS, screen)
:```