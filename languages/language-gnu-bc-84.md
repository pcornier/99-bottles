
## Language GNU bc ##
---
- Author: Adam Roach
- Date: 04/20/05
- Info: n/a
- Score:  (1.00 in 4 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-gnu-bc-84.html
---

```/* 99 bottles of beer in Unix bc                                          */
/* by Adam Roach <adam.roach@exu.ericsson.se>                             */
/*                                                                        */
/* In theory, this could be shortened by functions, but the version of    */
/* bc that I have access to doesn't allow functions... so this is long... */

i = 99
while ( i > 0 ) {
  if (i/10 == 1) "1"
  if (i/10 == 2) "2"
  if (i/10 == 3) "3"
  if (i/10 == 4) "4"
  if (i/10 == 5) "5"
  if (i/10 == 6) "6"
  if (i/10 == 7) "7"
  if (i/10 == 8) "8"
  if (i/10 == 9) "9"
  if (i%10 == 0) "0 bottle"
  if (i%10 == 1) "1 bottle"
  if (i%10 == 2) "2 bottle"
  if (i%10 == 3) "3 bottle"
  if (i%10 == 4) "4 bottle"
  if (i%10 == 5) "5 bottle"
  if (i%10 == 6) "6 bottle"
  if (i%10 == 7) "7 bottle"
  if (i%10 == 8) "8 bottle"
  if (i%10 == 9) "9 bottle"
  if (i != 1) "s"
  " of beer on the wall,
"
  if (i/10 == 1) "1"
  if (i/10 == 2) "2"
  if (i/10 == 3) "3"
  if (i/10 == 4) "4"
  if (i/10 == 5) "5"
  if (i/10 == 6) "6"
  if (i/10 == 7) "7"
  if (i/10 == 8) "8"
  if (i/10 == 9) "9"
  if (i%10 == 0) "0 bottle"
  if (i%10 == 1) "1 bottle"
  if (i%10 == 2) "2 bottle"
  if (i%10 == 3) "3 bottle"
  if (i%10 == 4) "4 bottle"
  if (i%10 == 5) "5 bottle"
  if (i%10 == 6) "6 bottle"
  if (i%10 == 7) "7 bottle"
  if (i%10 == 8) "8 bottle"
  if (i%10 == 9) "9 bottle"
  if (i != 1) "s"
  " of beer.
"
  i = i - 1 
  "Take one down, pass it around.
"
  if (i/10 == 1) "1"
  if (i/10 == 2) "2"
  if (i/10 == 3) "3"
  if (i/10 == 4) "4"
  if (i/10 == 5) "5"
  if (i/10 == 6) "6"
  if (i/10 == 7) "7"
  if (i/10 == 8) "8"
  if (i/10 == 9) "9"
  if (i%10 == 0) "0 bottle"
  if (i%10 == 1) "1 bottle"
  if (i%10 == 2) "2 bottle"
  if (i%10 == 3) "3 bottle"
  if (i%10 == 4) "4 bottle"
  if (i%10 == 5) "5 bottle"
  if (i%10 == 6) "6 bottle"
  if (i%10 == 7) "7 bottle"
  if (i%10 == 8) "8 bottle"
  if (i%10 == 9) "9 bottle"
  if (i != 1) "s"
  " of beer on the wall.

"
}
quit```