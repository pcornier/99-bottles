
## Language Perl ##
---
- Author: Randolph Chung, Joey Hess
- Date: 04/20/05
- Info: n/a
- Score:  (3.02 in 56 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-perl-535.html
---

```#!/usr/bin/perl -iake_one_down_pass_it_around:_bottles_of_beer:_on_the_wall:99
for(($t,$a,$b,$i)=split/:/,$^I;$i;print){$_="-$i$a$b,-$i$a,-T$t,-".--$i."$a$b
";s/(-1_.*?e)s/$1/g;y/_-/ \n/}#     by Randolph Chung and Joey Hess```