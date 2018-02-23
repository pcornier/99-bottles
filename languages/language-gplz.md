
## Language GPLZ.easy ##
---
- Author: Philipp Winterberg
- Date: 04/20/05
- Info: http
- Score:  (1.00 in 9 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-gplz.easy-292.html
---

```# GPLZ.easy version of 99 Bottles of beer (Bottles.easy)
# See http://www.p-nand-q.com/gplz/gplz-easy.htm
# Philipp Winterberg, http://www.winterbergs.de

f(x):<<x." bottle(s) of beer on the wall,"
g(x):<<x.<<" bottle(s) of beer."
h(x):<<"Take one down, pass it around,"
i(x):<<x-1.<<" bottle(s) of beer on the wall."
j(x):<<" "
do:b=99
while:b>0.f(b).g(b).h(b).i(b).j(i).b=b-1```