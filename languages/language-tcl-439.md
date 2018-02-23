
## Language Tcl ##
---
- Author: Don Libes
- Date: 04/20/05
- Info: n/a
- Score:  (3.00 in 109 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-tcl-439.html
---

```# Tcl version of 99 bottles of beer on the wall
# Author: Don Libes (libes@nist.gov)
#

proc bottles {i} {
	return "$i bottle[expr $i!=1?"s":""] of beer"
}

proc line123 {i} {
	puts "[bottles $i] on the wall,"
	puts "[bottles $i],"
	puts "take one down, pass it around,"
}

proc line4 {i} {
	puts "[bottles $i] on the wall.\n"
}

for {set i 99} {$i>0} {} {
	line123 $i
	incr i -1
	line4 $i
}```