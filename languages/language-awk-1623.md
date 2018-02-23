
## Language AWK ##
---
- Author: OsamuAoki
- Date: 11/03/07
- Info: n/a
- Score:  (3.02 in 183 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-awk-1623.html
---

```#!/usr/bin/awk -f
#   awk version of 99 bottles of beer
#    by Whitey (whitey@netcom.com) - 06/05/95
#   updated to create correct text including the ending
#    by Osamu Aoki (osamu@debian.org) - 20007-11-04

BEGIN { 
   for(i = 99; i >= 0; i--) {
      print ubottle(i), "on the wall,", lbottle(i) "."
      print action(i), lbottle(inext(i)), "on the wall."
      print
   }
}
function ubottle(n) {
   return sprintf("%s bottle%s of beer", n ? n : "No more", n - 1 ? "s" : "")
}
function lbottle(n) {
   return sprintf("%s bottle%s of beer", n ? n : "no more", n - 1 ? "s" : "")
}
function action(n) {
   return sprintf("%s", n ? "Take one down and pass it around," : \
                            "Go to the store and buy some more,")
}
function inext(n) {
   return n ? n - 1 : 99
}```