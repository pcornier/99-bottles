
## Language Parlog ##
---
- Author: Alin Suciu
- Date: 10/19/05
- Info: http
- Score:  (3.00 in 40 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-parlog-917.html
---

```% 99 bottles of beer generator in Parlog
% author: Alin Suciu <alin.suciu@cs.utcluj.ro>

mode bottles.
bottles <- 
    bottles(99).

mode bottles(?).
bottles(1) <- 
    write('1 bottle of beer on the wall, 1 bottle of beer.') & nl &
    write('Take one down, and pass it around, no more bottles of beer on the wall.') & nl & nl &
    write('No more bottles of beer on the wall, no more bottles of beer.') & nl &
    write('Go to the store and buy some more, 99 bottles of beer on the wall.') & nl.

bottles(N) <-
    N > 1 : 
    N1 is N - 1 ,
    write(N) & write(' bottles of beer on the wall, ') & 
    write(N) & write(' bottles of beer.') & nl &
    write('Take one down and pass it around, ') &
    write(N1), write(' bottles of beer on the wall.') & nl & nl,
    bottles(N1).```