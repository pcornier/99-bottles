
## Language ITCL Shell ##
---
- Author: Steven Grady
- Date: 04/20/05
- Info: n/a
- Score:  (2.89 in 9 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-itcl-shell-341.html
---

```#!/usr/local/bin/itcl_sh
# [incr Tcl] version of "99 bottles of beer"
# Author: Steven Grady
# grady@xcf.berkeley.edu

itcl_class bottle {
	constructor {config} {
		incr numBottles
	}

	destructor {
		incr numBottles -1
	}

	method drink {} {
		puts "Take one down, pass it around,"
		$this delete
	}

	proc numBottleStr {} {
		switch $numBottles {
		  0 {
			return "No more bottles of beer"
		  }
		  1 {
			return "1 bottle of beer"
		  }
		  default {
			return "$numBottles bottles of beer"
		  }
		}
	}

	proc numBottles {} {
		return $numBottles
	}

	common numBottles 0
}

proc createBottles {numBottles} {
	for {set i 0} {$i < $numBottles} {incr i} {
		bottle #auto
	}
}

createBottles 99
foreach b [itcl_info objects -class bottle] {
	set str [bottle :: numBottleStr]
	puts "$str on the wall, $str"
	$b drink
	puts "[bottle :: numBottleStr] on the wall."
}```