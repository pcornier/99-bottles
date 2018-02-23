
## Language Tcl ##
---
- Author: mackenga
- Date: 07/14/05
- Info: http
- Score:  (3.51 in 138 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-tcl-797.html
---

```#!/usr/bin/tclsh

# 99.tcl; Tcl version of 99 Bottles of Beer Song

proc findBString { count } {
  return [switch -exact -- $count {
    0       { expr {"No more bottles"}  }
    1       { expr {"1 bottle"}         }
    default { expr {"$count bottles"}   }
  }]
}

set bottles 99
set bString [findBString $bottles]
while {$bottles + 1} {
  puts "$bString of beer on the wall.  $bString of beer."
  incr bottles -1
  if {$bottles + 1} {
    set bString [findBString $bottles]
    puts "Take one down, pass it round, $bString of beer on the wall.\n"
  } else {
    puts "Go to the store and buy some more...99 bottles of beer."
  }
}```