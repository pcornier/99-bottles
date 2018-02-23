
## Language BS ##
---
- Author: Dave Plonka
- Date: 04/20/05
- Info: n/a
- Score:  (3.01 in 97 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-bs-103.html
---

```#!/usr/bin/bs
# bs version of 99 Bottles
# Dave Plonka - plonka@carroll1.cc.edu
# Thu Aug  8 1996

fun sing(n, end) s
   s = ("s", "")[ match(n, "^1$") ]
   put = format(format(format("%s bottle%%s of beer%%%%s", n), s), end)
nuf

for n = 99, n, put = ""
   sing(format("%-0.0f", n), " on the wall,")
   sing(format("%-0.0f", n), ",")
   put = "take one down, pass it around,"
   --n
   sing((format("%-0.0f", n), "no")[ 0 == n ], " on the wall.")
next

run
exit```