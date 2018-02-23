
## Language Condit ##
---
- Author: Marinus Oosters
- Date: 12/21/10
- Info: http
- Score:  (3.20 in 5 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-condit-2568.html
---

```when a=0                         then set a=1 set b=99 set r=1 set O=""
when (r=1 or r=2 or r=4) and b>0 then put b set O=""
when (r=1 or r=2 or r=4) and b=0 then set O="No more "
when (r=1 or r=2 or r=4) and b<0 then set O="99 "
when r=1 or r=2 or r=4           then set O=O+"bottle"
when r>0 and b<1 or b>1          then set O=O+"s"
when r=1 or r=2 or r=4           then set O=O+" of beer"
when r=1 or r=4                  then set O=O+" on the wall"
when r=3 and b>0                 then set O="Take one down and pass it around"
when r=3 and b<1                 then set O="Go to the store and buy some more"
when r>0 and r<4                 then set O=O+",\n"
when r=4                         then set O=O+".\n\n"
when r=3                         then set b=b-1
when r>0                         then set r=r+1 put O set O=""
when r>4 and b<0                 then set r=0
when r>4                         then set r=1```