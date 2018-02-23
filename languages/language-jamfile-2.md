
## Language Jamfile ##
---
- Author: David Brandon
- Date: 04/20/05
- Info: n/a
- Score:  (2.86 in 14 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-jamfile-2.html
---

```# Jamfile for 99 Bottles of beer on the wall.
# David Brandon (brandon@aspentech.com)

ALWAYS beer ;

rule Drink {
    for tenbeers in 9 8 7 6 5 4 3 2 1 "" {
        for beers in 9 8 7 6 5 4 3 2 1 0 {
            b = $(tenbeers)$(beers) ;
            if ( $(b) != 99 ) {
                ECHO "$(b) bottles of $(<) on the wall!" ;
            }
            if ( $(b) = 0 ) {
                EXIT "No more $(<)!" ;
            }
            ECHO "$(b) bottles of $(<) on the wall. $(b) bottles of $(<). Take one down," ;
            ECHO "pass it around..." ;
        }
    }
}

Drink beer ;```