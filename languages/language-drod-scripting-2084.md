
## Language DROD Scripting ##
---
- Author: Stefan Carey
- Date: 05/06/09
- Info: http
- Score:  (3.00 in 1 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-drod-scripting-2084.html
---

```Label 99 bottles of leaf juice, for 99-bottles-of-beer.net.
Label By Stefan Carey AKA Sillyman
  Set var "Num" = 99
  Set var "s" : s
Label Loop
  Speech "$Num$ bottle$s$ of leaf juice on the wall,",Normal,Self,0,.
  Speech "$Num$ bottle$s$ of leaf juice!",Normal,Self,0,.
  Speech "Take one down, and pass it around!",Normal,Self,0,.
  Set var "Num" - 1
  If ... 
        Wait until var "Num" = 1
     Set var "s" : 
  If End 
  If ... 
        Wait until var "Num" = 0
     Set var "Num" : No more
     Set var "s" : s
  If End 
  Speech "$Num$ bottle$s$ of leaf juice on the wall!",Normal,Self,0,.
  If ... 
        Wait until var "Num" : No more
     End 
  Else 
     Go to Loop
  If End```