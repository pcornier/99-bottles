
## Language bc ##
---
- Author: Feherke
- Date: 09/15/05
- Info: http
- Score:  (3.00 in 7 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-bc-871.html
---

```#! /usr/bin/bc -q
/* bc - An arbitrary precision calculator language */

for (i=99;i>=0;) {

  if (i) print i else "No more"
  " bottle"
  if (i-1) "s"
  " of beer on the wall, "
  if (i) print i else "no more"
  " bottle"
  if (i-1) "s"
  print " of beer.\n"

  if (i--) {
    "Take one down and pass it around, "
    if (i) print i else "no more"
    " bottle"
    if (i-1) "s"
    print " of beer on the wall.\n\n"
  } else print "Go to the store and buy some more, 99 bottles of beer on the wall.\n\n"
  
}

halt```