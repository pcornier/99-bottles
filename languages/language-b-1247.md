
## Language B ##
---
- Author: Pietro Gagliardi
- Date: 08/21/06
- Info: http
- Score:  (2.98 in 110 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-b-1247.html
---

```/* 99 Bottles of Beer
   B Version
   By Pietro Gagliardi
   Started and Completed August 21, 2006
   Try this if you can access a 1st edition Unix! :-) */

main()
{
    auto a;

    while (a >= 0) {
        printf("%d %s of beer on the wall!*n", a, (a == 0 ? "bottle" : "bottles"));
        printf("%d %s of beer,*n", a, (a == 0 ? "bottle" : "bottles"));
        printf("You take one down, pass it around,*n");
        if (a == 0) break;
        printf("%d bottles of beer on the wall!*n*n", --a);
    }

    printf("No more bottles of beer on the wall!*n");
}```