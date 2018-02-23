
## Language UGCL ##
---
- Author: Fredrik Stromberg
- Date: 02/22/08
- Info: http
- Score:  (2.50 in 2 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-ugcl-1701.html
---

```# Implemented in University of Gothenburg Command Language
# Not intended as a real language. 
# Just something students make as part of a programming lab.

set count 99
while { > $count 2 }{
  puts "$count bottles of beer on the wall, $count bottles of beer."
  set count [ - $count 1]
  puts "Take one down and pass it around, $count bottles of beer on the wall."
  puts ""
}
puts "2 bottles of beer on the wall, 2 bottles of beer."
puts "Take one down and pass it around, 1 bottle of beer on the wall."
puts ""
puts "1 bottle of beer on the wall, 1 bottle of beer."
puts "Take one down and pass it around, no more bottles of beer on the wall."
puts ""
puts "No more bottles of beer on the wall, no more bottles of beer."
puts "Go to the store and buy some more, 99 bottles of beer on the wall."```