
## Language Posix Shell ##
---
- Author: Dave Plonka
- Date: 04/20/05
- Info: n/a
- Score:  (2.00 in 1 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-posix-shell-555.html
---

```Posix is yet another U**x shell.

#!/bin/sh
# POSIX shell version of 99 Bottles
# Dave Plonka - plonka@carroll1.cc.edu

typeset -i n=99
typeset bottles=bottles
typeset no

while let n
do
   echo "${n?} ${bottles?} of beer on the wall,"
   echo "${n?} ${bottles?} of beer,"
   echo "take one down, pass it around,"
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
   echo "${no:-${n}} ${bottles?} of beer on the wall."
   echo
done

exit```