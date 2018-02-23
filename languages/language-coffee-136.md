
## Language Coffee ##
---
- Author: dingo
- Date: 04/20/05
- Info: n/a
- Score:  (2.93 in 14 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-coffee-136.html
---

```// Coffee programming language version 0.98a
// by dingo www.TheBrownStuff.co.nr

var i new int = 99;
while (i > 0) {
  if (i > 1) {
    println(i+" bottles of beer on the wall,");
    println(i+" bottles of beer,");
    println("Take one down, pass it around,");
    println((i--)+" bottles of beer on the wall.");
  } else {
    println("One more bottle of beer on the wall,");
    println("One more bottle of beer,");
    println("Take it down, pass it around,");
    println("No more bottles of beer on the wall.");
    i--;
  }
}```