
## Language Fril ##
---
- Author: Patrick Cain
- Date: 07/13/05
- Info: http
- Score:  (2.38 in 13 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-fril-795.html
---

```((bottle 99))
((bottle X)
        (bottle Y)
        (sum Y -1 X))
((beer 0)
        (cprintf stdout "No more bottles of beer"))
((beer 1)
        (cprintf stdout "1 bottle of beer"))
((beer X)
        (less_eq 2 X)
        (cprintf stdout "%d bottles of beer" X))
((wall 0)
        (beer 0)
        (cprintf stdout " on the wall. ")
        (beer 0)
        (cprintf stdout "...\nGo to the store and buy some more...")
        (beer 99)
        (cprintf stdout ".\n\n"))
((wall X)
        (less_eq 1 X)
        (sum Y 1 X)
        (beer X)
        (cprintf stdout " on the wall, ") 
        (beer X)
        (cprintf stdout ".\nTake one down and pass it around, ")
        (beer Y)
        (cprintf stdout ".\n\n"))
?((repeat) 
        (bottle N)
        (wall N)
        (less_eq N 0))```