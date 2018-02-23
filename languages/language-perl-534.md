
## Language Perl ##
---
- Author: Anonymous
- Date: 04/20/05
- Info: n/a
- Score:  (3.00 in 29 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-perl-534.html
---

```#!/usr/bin/perl -w

use Math::String 1.16;
use Math::BigInt 1.48;

my $i = Math::String->new('99',['0'..'9']);             # counter
my $cs = ["a".."z","A".."Z"," ",",","(",")","\n"];      # charset
my $c = 'Math::String';                                 # class
my $u = $c->from_number(                                # b. of beer on wall
       "143457256751672444408485136195337476997885002593618110354",$cs);
my $v = $c->from_number(                                # take one, pass it
       "2183742159727155773060245326632596445683097582725669500",$cs);
my $w = $c->from_number(                                # bottles of beer
       "121961920301233380909600391518980493",$cs); 

while ($i ne '00') { print "$i$u$i$w$v"; $i--; print "$i$u\n"; }```