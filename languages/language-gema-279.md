
## Language Gema ##
---
- Author: Laurent Vogel
- Date: 04/20/05
- Info: http
- Score:  (3.00 in 18 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-gema-279.html
---

```! gema version of 99 bottles of beer
! Laurent Vogel  http://lvogel.free.fr
! (gema info  http://www.ugcs.caltech.edu/gema/)

@set{i;99}@set{s;s}@set{b; bottle}@set{o; of beer}@set{w; on the wall}
@repeat{$i;@out{$i$b$s$o$w,\n$i$b$s$o.\n}\
@out{Take one down, pass it around,\n}@decr{i}\
@set{s;@cmpn{$i;1;;;s}}@set{i;@cmpn{$i;1;No;$i;$i}}\
@out{$i$b$s$o$w.\n\n}}@end```