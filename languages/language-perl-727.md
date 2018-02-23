
## Language Perl ##
---
- Author: Mark Sheppard
- Date: 06/01/05
- Info: n/a
- Score:  (3.02 in 129 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-perl-727.html
---

```This one's slightly longer than the original (155 bytes), but the output's more
correct - it doesn't have an "s" after "1 bottle" and it has punctuation at the
end of each line:

sub b{$n=99-@_-$_||No;"$n bottle"."s"x!!--$n." of beer"};$w=" on the wall";
die map{b."$w,\n".b.",\nTake one down, pass it around,\n".b(0)."$w.\n\n"}0..98```