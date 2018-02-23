
## Language Derive 6 ##
---
- Author: John Coleman
- Date: 02/02/07
- Info: http
- Score:  (2.94 in 99 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-derive-6-1387.html
---

```#1: bottles(n):=if(n=1," bottle "," bottles ")

#2: beers(n) := ADJOIN(n, APPEND(bottles(n),"of beer"))

#3: first_line(n):= If(n>0,
                   APPEND(beers(n), " on the wall, ", beers(n) , "."),
                  "No more bottles of beer on the wall, no more bottles of beer")

#4: share := "Take one down and pass it around, "

#5: second_tail(n):= If(n>1, 
                       APPEND(beers(n-1), " on the wall."),
                       "no more bottles of beer on the wall.")

#6: second_line(n):= If(n>0,
                       APPEND(share, second_tail(n)),
                       APPEND("Go to the store and buy some more, ", 
                           beers(99), " on the wall."))

#7: song:=PROG(
              n:=99,
              LOOP(If(n<0,RETURN("")),
                  DISPLAY(first_line(n)),
                  DISPLAY(second_line(n)),
                  DISPLAY(""),
                  n := n-1))```