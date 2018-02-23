
## Language Fudgit ##
---
- Author: Ralf Schwedler
- Date: 05/17/05
- Info: n/a
- Score:  (3.00 in 10 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-fudgit-653.html
---

```# The fudgit language and interpreter was created by Martin-D. Lacasse.
# It is used to preprocess data for plotting, typically with gnuplot.
# The interpreter is found in common linux distros, e.g. Debian Sarge
# (c) Ralf Schwedler 2005

set format "%2.0f"


cmode

for(x=99;x>=1;x=x-1) {
	if (x == 1) {
           1, "bottle of beer on the wall"
          } else {
	   x, "bottles of beer on the wall"
	  }
	if (x == 1) {
           x, "bottle of beer"
          } else {
	   x, "bottles of beer"
	  }
	"Take one down and pass it around,"
	if ((x-1) == 0) {
	  "No bottle of beer on the wall"
	} else {
	if ((x-1) == 1) {
           x-1, "bottle of beer on the wall"
          } else {
	   x-1, "bottles of beer on the wall"
	  }
        }
	""
}

fmode```