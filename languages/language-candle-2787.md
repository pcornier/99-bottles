
## Language Candle ##
---
- Author: Henry Luo
- Date: 11/17/11
- Info: http
- Score:  (3.00 in 7 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-candle-2787.html
---

```<?csp1.0?>
function nil:bottles($n as integer) {
   if ($n == 1) { "1 bottle" }
   else if ($n == 0) { "no more bottles" }
   else { {$n + " bottles"} }
}

function main() {
   for $b in reverse(0 to 99) {
      {replace(nil:bottles($b), "n", "N")} " of beer on the wall, "
      nil:bottles($b); " of beer.&cr;&lf;" 
      if ($b != 0) {
         "Take one down and pass it around, " 
         nil:bottles($b - 1); " of beer on the wall.&cr;&lf;"
      } else {
         "Go to the store and buy some more, " 
         "99 bottles of beer on the wall.&cr;&lf;"
      }
      "&cr;&lf;"
   }
}```