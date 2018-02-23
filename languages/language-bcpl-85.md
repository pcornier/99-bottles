
## Language BCPL ##
---
- Author: Akira Kida
- Date: 04/20/05
- Info: n/a
- Score:  (3.00 in 21 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-bcpl-85.html
---

```// BCPL version of 99 Bottles of Beer.
// hacked by Akira KIDA <SDI00379@niftyserve.or.jp>

GET "LIBHDR"

MANIFEST $(
    BOTTLES = 99
$)

LET START() BE $(
    LET BEERS(N, S) BE $(
        TEST N = 0 THEN WRITEF("No more bottles")
                   ELSE WRITEF("%N bottle%S", N, (N = 1) -> "", "s")
        WRITEF(" of beer%S", S)
    $)

    FOR I = BOTTLES TO 1 BY -1 DO $(
            BEERS(I, " on the wall, ")
            BEERS(I, ".*NTake one down, pass it around.*N")
            BEERS(I - 1, " on the wall.*N")
    $)
    FINISH
$)```