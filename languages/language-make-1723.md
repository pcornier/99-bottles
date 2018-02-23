
## Language make ##
---
- Author: rahul
- Date: 03/17/08
- Info: n/a
- Score:  (2.88 in 8 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-make-1723.html
---

```# who says that make is only gmake ? :)
# The make language is a very powerful one, not because of GNU extensions
# but because of the dependent targets and recursion.

PRED=`expr $* - 1`

1-bottles: 1-beer pass
        @echo "No more bottles of beer on the wall"

%-bottles: %-beer pass
        @echo "$(PRED) bottles of beer on the wall\n"
        @-make $(PRED)-bottles

1-beer:
        @echo "One bottle of beer on the wall, One bottle of beer"

%-beer:
        @echo "$* bottles of beer on the wall, $* bottles of beer"

pass:
        @echo "Take one down and pass it around,"


Using it:
make 99-bottles```