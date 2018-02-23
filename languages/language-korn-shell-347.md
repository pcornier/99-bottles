
## Language Korn Shell ##
---
- Author: Dave Plonka
- Date: 04/20/05
- Info: n/a
- Score:  (3.01 in 139 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-korn-shell-347.html
---

```Yet another UN*X shell.

#!/bin/ksh
# Korn shell version of 99 Bottles
# Dave Plonka - plonka@carroll1.cc.edu

typeset -i n=99
typeset bottles=bottles
typeset no

while (( n ))
do
   print "${n?} ${bottles?} of beer on the wall,"
   print "${n?} ${bottles?} of beer,\ntake one down, pass it around,"
   n=n-1
   case ${n?} in
   0)
      no=no
      bottles=${bottles%s}s
      ;;
   1)
      bottles=${bottles%s}
      ;;
   esac
   print "${no:-${n}} ${bottles?} of beer on the wall.\n"
done

exit```