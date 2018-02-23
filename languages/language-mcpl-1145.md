
## Language MCPL ##
---
- Author: Christian Meurin
- Date: 04/27/06
- Info: http
- Score:  (3.00 in 2 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-mcpl-1145.html
---

```// MCPL is a combination of BCPL, C, ML, and Prolog.
//
// http://www.cl.cam.ac.uk/users/mr/MCPL.html

MODULE bottlesofbeer

GET "mcpl.h"

MANIFEST beermax = 99
MANIFEST onebeerleft = 1
MANIFEST nobeer = 0

FUN start : =>
  LET count = beermax

  UNTIL count == nobeer DO {
    IF count == onebeerleft DO {
      writef ("%d bottles of beer on the wall,\n", count)
      writef ("%d bottles of beer...\n", count)
    } ELSE {
      writef "One more bottle of beer on the wall,\n"
      writef "One more bottle of beer...\n"
    }

    writef "Take one down, pass it around,\n"

    IF count == onebeerleft DO
      writef "One more bottle of beer on the wall.\n"
    ELSE IF count > onebeerleft DO
      writef ("%d more bottles of beer on the wall.\n", count)
    ELSE writef "No more bottles of beer on the wall.\n"
.```