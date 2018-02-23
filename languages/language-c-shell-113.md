
## Language C Shell ##
---
- Author: Anonymous
- Date: 04/20/05
- Info: n/a
- Score:  (2.99 in 68 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-c-shell-113.html
---

```#!/bin/csh

#
# C-Shell script version of 99 Bottles of Beer
#

set i = 100

while ($i > 0)

  echo -n $i " bottles of beer on the wall"
  echo $i " bottles of beer......"

   set i = `expr $i - 1`

  echo -n "take one down pass it around, " $i
  echo "bottles of beer on the wall"

end

#end of script```