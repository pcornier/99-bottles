
## Language Q ##
---
- Author: Albert Graef
- Date: 04/09/07
- Info: http
- Score:  (3.02 in 117 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-q-1441.html
---

```song	= do verse [99,98..0];

verse 0	= puts "No more bottles of beer on the wall, no more bottles of beer.\n\
Go to the store and buy some more, 99 bottles of beer on the wall.\n\n";

verse I = printf "%s of beer on the wall, %s of beer.\n\
Take one down and pass it around, %s of beer on the wall.\n\n"
(s I,s I,s (I-1));

s 0	= "no more bottles";
s 1	= "1 bottle";
s I	= sprintf "%d bottles" I;```