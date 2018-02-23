
## Language Limbo ##
---
- Author: rog peppe
- Date: 10/17/08
- Info: http
- Score:  (3.25 in 4 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-limbo-1892.html
---

```implement Bottles;
include "sys.m";
	sys: Sys;
include "draw.m";

Bottles: module {
	init: fn(nil: ref Draw->Context, nil: list of string);
};

Bottle: adt {
	beer: real;
};

take: chan of (int, Bottle);
passitaround: chan of Bottle;

init(nil: ref Draw->Context, nil: list of string)
{
	sys = load Sys Sys->PATH;
	take = chan of (int, Bottle);
	passitaround = chan of Bottle;
	bottles: list of Bottle;

	for(i := 0; i < 99; i++)
		bottles = Bottle(1.0) :: bottles;

	spawn wall(bottles);
	for(i = 0; i < 5; i++)
		spawn bloke(4.0, 0.3);
	singer();
}

wall(bottles: list of Bottle)
{
	for(; bottles != nil; bottles = tl bottles)
		take <-= (len bottles, hd bottles);
	take <-= (0, Bottle(0.0));
}

singer()
{
	(n, bottle) := <-take;
	max := n;
	for(;;){
		if(n == 0)
			break;
		s := amount(n);
		sys->print("%s bottles of beer on the wall, %s bottles of beer\n", s, s);
		s = amount(n - 1);
		sys->print("Take one down and pass it around, %s bottles of beer on the wall.\n", s);
		sys->print("\n");
		passitaround <-= bottle;
		(n, bottle) = <-take;
	}

	sys->print("No more bottles of beer on the wall, no more bottles of beer.\n");
	sys->print("Go to the store and buy some more, %s bottles of beer on the wall.\n",
		amount(max));
}

bloke(capacity, swig: real)
{
	bellyfull := 0.0;
	for(;;){
		if(bellyfull >= capacity){
			sys->sleep(1000);
			bellyfull = 0.0;
		}
		bottle := <-passitaround;
		drink := max(swig, bottle.beer);
		bellyfull += drink;
		bottle.beer -= drink;
		if(bottle.beer >= 0.0)
			passitaround <-= bottle;
	}
}

amount(n: int): string
{
	if(n > 0)
		return string n;
	return "no";
}

max(a, b: real): real
{
	if(a > b)
		return a;
	return b;
}```