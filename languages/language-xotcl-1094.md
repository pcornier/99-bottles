
## Language XOTcl ##
---
- Author: Mark Janassen
- Date: 03/19/06
- Info: http
- Score:  (1.50 in 4 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-xotcl-1094.html
---

```package require XOTcl

namespace import ::xotcl::*

Class SingleBottle 

SingleBottle instproc go {} {
   puts -nonewline "1 bottle of beer on the wall, "
   puts "1 bottle of beer."
   puts -nonewline "Take one down, pass it around, "
   puts "no bottles of beer on the wall.\n"
} 

Class Beerwall -parameter number

Beerwall instproc go {} {
  puts -nonewline "[my number] bottles of beer on the wall, "
  puts "[my number] bottles of beer."
  puts -nonewline "Take one down, pass it around, "
  set number [expr {[my number] - 1}]
  set b [Beerwall new -number $number]
  if {[$b number] == 1 } { 
	$b mixin SingleBottle ; puts "1 bottle of beer on the wall."
  } else {
	puts "$number bottles of beer on the wall."
 }
  $b go  
}

set b [Beerwall new -number 99]
puts [$b number]
$b go```