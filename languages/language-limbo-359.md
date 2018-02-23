
## Language Limbo ##
---
- Author: Anonymous
- Date: 04/20/05
- Info: n/a
- Score:  (2.58 in 19 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-limbo-359.html
---

```Limbo is compiler for Lucent Technologies new Inferno Operating System.

implement BeerBottles;

include "sys.m";
	sys: Sys;
include "draw.m";
	draw: Draw;

BeerBottles: module
{
	init: fn(ctxt: ref Draw->Context, agv: list of string);
};

init(ctxt: ref Draw->Context, argv: list of string)
{
	sys = load Sys Sys->PATH;
	for (int bottles = 99; bottles > 0; bottles--) {
		sys->print("%d bottle(s) of beer on the wall,\n",bottles);
		sys->print("%d bottle(s) of beer.\n",bottles);
		sys->print("Take one down, pass it around,\n");
		sys->print("%d bottle(s) of beer on the wall.\n\n");
	}
}```