
## Language dtrace ##
---
- Author: Sean McGrath
- Date: 05/13/05
- Info: http
- Score:  (3.01 in 98 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-dtrace-644.html
---

```#!/usr/sbin/dtrace -qs

/* Dtrace version of bottles of beer
 * Written by Sean McGrath
 * http://blogs.sun.com/smg
 */

BEGIN
{
        n = 3;
        ifor = 1;
}

tick-1sec
/!n && !ifor/
{
        printf("No more bottles of beer on the wall\n\n");
        printf("Time to buy more beer!\n");
        exit(0);
}

tick-1sec
/n == 1 && !ifor/
{
        printf("one more bottle of beer on the wall\n\n");
        printf("one more bottle of beer on the wall\n");
        ifor = 1;
}

tick-1sec
/n > 1 && !ifor/
{
        printf("%d bottles of beer on the wall\n\n", n);
        printf("%d bottles of beer on the wall\n", n);
        printf("%d bottles of beeeeer . . .\n", n);
        printf("Take one down, pass it around,\n");
        ifor = 1;
}

tick-1sec
/ifor/
{
        n--;
        ifor = 0;
}```