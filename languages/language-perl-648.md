
## Language Perl ##
---
- Author: Scott Bryce
- Date: 05/15/05
- Info: n/a
- Score:  (3.00 in 32 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-perl-648.html
---

```#!/usr/bin/perl
use strict;
use warnings;

#######################################
#
#   99 bottles of beer on the wall
#   Written in object oriented Perl
#
#######################################
my $beer = Bottles->new();
$beer->Take_One_Down() while $beer->Remaining();

package Bottles;

sub new
{
	my $bottles = 99;
	bless \$bottles;
}

sub Take_One_Down
{
	my $self = shift;	
	my $s = $$self == 1 ? '' : 's';
	
	print "$$self bottle$s of beer on the wall,\n";
	print "$$self bottle$s of beer.\n";
	print "Take one down, pass it around.\n";
	
	$$self--;
	
	$s = $$self == 1 ? '' : 's';
	
	print "$$self bottle$s of beer on the wall.\n\n";
}

sub Remaining
{
	my $self = shift;
	return $$self;	
}```