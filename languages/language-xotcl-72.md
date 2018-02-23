
## Language XOTcl ##
---
- Author: Philipp Winterberg
- Date: 04/20/05
- Info: http
- Score:  (2.84 in 98 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-xotcl-72.html
---

```# XOTcl version of 99 Bottles of beer (Bottles.xotcl)
# http://www.xotcl.org
# Philipp Winterberg, http://www.winterbergs.de

for {set b 99} {$b > 0} {} {
  puts "$b bottle(s) of beer on the wall,"
  puts "$b bottle(s) of beer."
  puts "take one down, pass it around,"
  incr b -1
  puts "$b bottle(s) of beer on the wall.\n"
}```