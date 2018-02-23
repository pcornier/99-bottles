
## Language Turbo C ##
---
- Author: Philipp Winterberg
- Date: 04/20/05
- Info: http
- Score:  (1.56 in 18 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-turbo-c-469.html
---

```/* Turbo C version of 99 Bottles of beer (Bottles.c)             */
/* See http://community.borland.com/article/0,1410,20841,00.html */
/* Philipp Winterberg, http://www.winterbergs.de                 */

#include <stdio.h>

int b;

main() {
  for (b = 99; b > 0; b--) 
    printf("%d bottle(s) of beer on the wall,\n%d %s\n%s\n%d %s", b, b, 
           "bottle(s) of beer.", "Take one down, pass it around,", (b-1), 
           "bottle(s) of beer on the wall.\n\n");
}```