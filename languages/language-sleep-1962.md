
## Language Sleep ##
---
- Author: Chris Adamson
- Date: 01/23/09
- Info: http
- Score:  (4.00 in 3 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-sleep-1962.html
---

```# 99Bottles.sl

for($total = 99; $total > 0; $total--) {
  $beer = "$total bottle" . iff($total == 1, "", "s");
  println("$beer of beer on the wall, $beer of beer.");

  if ($total == 0) {
    println("Take one down and pass it around, no more bottles of beer
    on the wall");
  } else {
    $beer = "$total bottle" . iff($total == 1, "", "s");
    println("Take one down and pass it around, $beer of beer on the wall.");
  }
  
  println();
}

println("No more bottles of beer on the wall, no more bottles of beer.");
println("Go to the store and buy some more, 99 bottles of beer on the wall.");```