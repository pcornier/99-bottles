
## Language OPAL ##
---
- Author: Maximilian Laiacker
- Date: 04/20/05
- Info: http
- Score:  (3.00 in 19 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-opal-516.html
---

```-- beer.impl
-- 99 Bottles of beer recursively, writen in OPAL
-- By Maximilian Laiacker
-- the OPAL Project: http://uebb.cs.tu-berlin.de/~opal/
IMPLEMENTATION beer

IMPORT Nat COMPLETELY
       Denotation COMPLETELY
       NatConv ONLY `

FUN Bottles: nat -> denotation
DEF Bottles(0)       == "no more bottles"
DEF Bottles(succ(0)) == "1 bottle"
DEF Bottles(n)       == `(n) ++ " bottles"

-- bofb(99) to return the Songtext
DEF bofb(0) == ""
DEF bofb(n) == Bottles(n) ++ " of beer on the wall, " ++
               Bottles(n) ++ " of beer. " ++
               "Take one down, pass it around, " ++
               Bottles(pred(n)) ++ " of beer on the wall.\n" ++ bofb(pred(n))```