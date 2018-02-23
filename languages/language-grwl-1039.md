
## Language GRWL ##
---
- Author: antonyclark
- Date: 02/01/06
- Info: antonyclark@gmail.com
- Score:  (2.50 in 2 votes)
- URL: antonyclark@gmail.com
- Original URL: http://www.99-bottles-of-beer.net/language-grwl-1039.html
---

```
for N = 99
for $b = "bottle"
for $d = "beer"
 page head
 (for pointsize 16 N " " $b " of " $d if continued " continued.. " fi
  fill*1
 )
 for b = N to 0 by -1
 for ink(if b eq 0 red else black fi)
  ss(b,1) " of " $d " on the wall, " ss(b,0) " of " $d "."
  fill*.1
  if b eq 0 "Go to the store and buy some more, "
  else  "Take one down and pass it around, " fi
  ss(b-1,0) " of " $d " on the wall."
  fill*1
  para
 next next 
next next next

procedure ss(n,i)
(
 if n ge 1 n    
 elif n eq 0 if i "N" else "n" fi "o more" 
 else N fi
 " " $b
 if n eq 1 else "s" fi
)```