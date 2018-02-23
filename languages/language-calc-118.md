
## Language Calc ##
---
- Author: Anonymous
- Date: 04/20/05
- Info: http
- Score:  (3.00 in 2 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-calc-118.html
---

```/*
 * 99 bottles of beer
 *
 * See:
 *      http://reality.sgi.com/csp/ioccc/noll/noll.html#calc
 */

for (i=99; i > 0;) {
    /* current wall state */
    some_bottles = (i != 1) ? "bottles" : "bottle";
    print i, some_bottles, "of beer on the wall,",;
    print i, some_bottles, "of beer!";

    /* glug, glug */
    --i;
    print "Take one down and pass it around,",;

    /* new wall state */
    less = (i > 0) ? i : "no";
    bottles = (i!=1) ? "bottles" : "bottle";
    print less, bottles, "of beer on the wall!\n";
}```