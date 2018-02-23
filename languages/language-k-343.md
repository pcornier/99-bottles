
## Language K ##
---
- Author: Anonymous
- Date: 04/20/05
- Info: n/a
- Score:  (3.00 in 129 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-k-343.html
---

```\d beer

s:"N bottles of beer on the wall, N bottles of beer.
Take one down, pass it around;
N-1 bottles of beer on the wall.

"

one:{_ssr[_ssr[after[s;"No more"];"N bottles";"1 bottle"];"one";"it"]}
two:{before[_ssr[s;"N-1 bottles";"1 bottle"];2]}
n:{before[after[s;$x-1];$x]}

before:{_ssr[x;"N";$y]}     / after after
after:{_ssr[x;"N-1";$y]}    / before before

beer:{|(one[]; two[]),n'3_!x+1}

sing:{`0:,/beer x}         / display the song
sing_file:{x 0: beer 99}   / write the (default) song to a file```