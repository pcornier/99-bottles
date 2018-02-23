
## Language C-- ##
---
- Author: Philipp Winterberg
- Date: 04/20/05
- Info: n/a
- Score:  (2.90 in 136 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-c---112.html
---

```/* C-- version of 99 Bottles of beer (Bottles.c--) */
/* See http://www.cs.utexas.edu/users/tbone/c--/   */
/* Philipp Winterberg, http://www.winterbergs.de   */

? include "WRITE.H--"
         
int b;
main ()           
{
b = 99;
do {           
    WRITEINT(b);                            
    WRITESTR(" bottle(s) of beer on the wall,\n");
    WRITEINT(b);                            
    WRITESTR(" bottle(s) of beer.\n");
    WRITESTR("Take one down, pass it around,\n");
    b--;
    WRITEINT(b);                            
    WRITESTR(" bottle(s) of beer on the wall.\n\n");
   } while (b > 0);
}```