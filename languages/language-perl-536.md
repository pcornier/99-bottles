
## Language Perl ##
---
- Author: Marty Pauley
- Date: 04/20/05
- Info: n/a
- Score:  (3.02 in 193 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-perl-536.html
---

```#!/usr/bin/perl
# Marty Pauley sings "99 bottles of beer"
use Lingua::EN::Inflect 'inflect';
print inflect(<<"SING") for (reverse(1 .. 99));
        NO(bottle,$_) of beer on the wall,
        NO(bottle,$_) of beer,
        Take one down and pass it around,
        NO(bottle,@{[$_-1]}) of beer on the wall.
SING```