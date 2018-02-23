
## Language Python ##
---
- Author: Ricardo Garcia Gonzalez
- Date: 01/15/06
- Info: http
- Score:  (2.76 in 51 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-python-1024.html
---

```#!/usr/bin/env python
# 	99 bottles of beer in Python by Ricardo Garcia. Public Domain code.
# 	Fully compliant version, pretty indentation, fits in 80x24.

plural = lambda n: n != 1 and "s" or ""
number = lambda n: n == 0 and "No" or str(n)
next = lambda n: (n - 1) % 100

pu_line = lambda n: n == 0 and	"Go to the store and buy some more" or	\
				"Take one down, pass it around"

verses = lambda n:	"%s bottle%s of beer on the wall!\n"		\
			"%s bottle%s of beer!\n"			\
			"%s\n"						\
			"%s bottle%s of beer on the wall!\n" %		\
			(	number(n), plural(n),
			 	number(n), plural(n),
			 	pu_line(n),
			 	number(next(n)), plural(next(n))	)

print "\n".join([verses(x) for x in range(99, -1, -1)])```