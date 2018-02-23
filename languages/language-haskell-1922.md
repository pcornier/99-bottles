
## Language Haskell ##
---
- Author: Ben Firner
- Date: 11/21/08
- Info: http
- Score:  (2.87 in 15 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-haskell-1922.html
---

```--99 bottles of beer on the wall song
--x holds the remaining number of bottles.
--The strings in b1 and b2 are based upon the current value of x.
--b3 capitalizes b1
--line2 depends on x and is built from b2 except in the last verse
main = (putStr (unlines
        [b3++" of beer on the wall, "++b1++" of beer.\n"++line2++" of beer on the wall.\n" |
         x<-[99,98..0],
         b1<-["no more bottles",show x++" bottles",show x++" bottle"],
         b2<-["no more bottles",show (x-1)++" bottles", show (x-1)++" bottle"],
         b3<-[b1, "N"++tail b1],
         line2<-["Take one down and pass it around, "++b2,
                 "Go to the store and buy some more, 99 bottles"],
         ((b1 == show x++" bottle") == (x == 1)), ((b1 == "no more bottles") == (x == 0)),
         ((last b2 == 'e') == (x == 2)), (head b2 == 'n') == (x == 1),
         ((b3 == "N"++tail b1) == (head b1 == 'n')),
         ((head line2 == 'G') == (x == 0))]))```