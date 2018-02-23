
## Language Neko ##
---
- Author: Daniel Bainton
- Date: 01/13/06
- Info: http
- Score:  (2.58 in 12 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-neko-1019.html
---

```// Neko version of 99 bottles of beer on the wall
// Created by Daniel Bainton at Friday the 13th, January 2006.

var bottles_left = function(bottles) {
  if (bottles > 1)
    return bottles + " bottles";
  if (bottles == 1)
    return bottles + " bottle";
  if (bottles == 0)
    return "no more bottles";
}

var sing = function(bottles) {
  $print(bottles_left(bottles) + " of beer on the wall, " + bottles_left(bottles) + " of beer.\n");
  $print("Take one down and pass it around, " + bottles_left(bottles - 1) + " of beer on the
wall.\n\n");
}

var bottles = 99;

while (bottles > 0) {
  sing(bottles);
  bottles = bottles - 1;
}

$print("No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.\n");```