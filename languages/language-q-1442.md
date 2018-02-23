
## Language Q ##
---
- Author: Albert Graef
- Date: 04/09/07
- Info: http
- Score:  (3.01 in 87 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-q-1442.html
---

```/* This version uses an infinite stream which cycles through 99,98..0
   repeatedly, and pauses for 1 second after each verse. Use Ctrl-C to
   interrupt when you get bored. */

song	= do verse $ cycle [99,98..0];

verse 0	= puts "No more bottles of beer on the wall, no more bottles of beer.\n\
Go to the store and buy some more, 99 bottles of beer on the wall.\n\n" ||
sleep 1;

verse I = printf "%s of beer on the wall, %s of beer.\n\
Take one down and pass it around, %s of beer on the wall.\n\n"
(s I,s I,s (I-1)) || sleep 1;

s 0	= "no more bottles";
s 1	= "1 bottle";
s I	= sprintf "%d bottles" I;```