
## Language NIT ##
---
- Author: ig0r
- Date: 01/17/11
- Info: http
- Score:  (3.33 in 3 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-nit-2585.html
---

```fun bottles(n: Int) : String
do
   if n == 0 then 
      return "No more bottles of beer" 
   else if n == 1 then
      return "One bottle of beer" 
   else 
      return n.to_s + " bottles of beer"
   end
end

fun beers(n: Int)
do
   print bottles(n) + " on the wall, "
   print bottles(n) + "."
   if n > 0 then
      print "Take one down and pass it around, "
      print bottles(n-1) + " on the wall.\n"
   else
      print "Go to the store and buy some more, "
      print bottles(99) + " on the wall.\n"
   end
end

var l = [1..100]
l.iterate !each(i) do beers(100-i)```