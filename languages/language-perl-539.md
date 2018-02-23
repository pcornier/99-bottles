
## Language Perl ##
---
- Author: Jim Menard
- Date: 04/20/05
- Info: n/a
- Score:  (3.02 in 175 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-perl-539.html
---

```#!/usr/bin/perl
# Jim Menard     jimm@{bbn,io}.com     (617) 873-4326    http://www.io.com/~jimm/
$nBottles = $ARGV[0];
$nBottles = 100 if $nBottles eq '' || $nBottles < 0;

foreach (reverse(1 .. $nBottles)) {
    $s = ($_ == 1) ? "" : "s";
    $oneLessS = ($_ == 2) ? "" : "s";
    print "\n$_ bottle$s of beer on the wall,\n";
    print "$_ bottle$s of beer,\n";
    print "Take one down, pass it around,\n";
    print $_ - 1, " bottle$oneLessS of beer on the wall\n";
}
print "\n*burp*\n";```