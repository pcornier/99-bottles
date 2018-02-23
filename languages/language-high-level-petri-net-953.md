
## Language High Level Petri Net ##
---
- Author: Tim Strazny
- Date: 11/20/05
- Info: http
- Score:  (2.60 in 15 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-high-level-petri-net-953.html
---

```F
txt(i) = ifthen(i#0, i, \"no\") + \" bottle\" + ifthen(i#1, \"s\", \"\") + \
\" of beer\"

PL
1 "count" y"{99}" *

TR
1 "loop" g"count#0 & next=count-1 & write(txt(count), \" on the wall, \", \
txt(count), \".\nTake one down and pass it around, \", txt(next), \" on the \
wall.\n\n\")"

2 "break" g"write(\"No more bottles of beer on the wall, no more bottles of \
beer.\nGo to the store and by some more, 99 bottles of beer on the wall.\n\")"

PT
1>1 p"count"
1>2 p"0"

TP
1<1 p"next"```