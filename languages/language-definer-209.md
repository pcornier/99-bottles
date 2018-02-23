
## Language Definer ##
---
- Author: Chris Sauls
- Date: 04/20/05
- Info: n/a
- Score:  (1.00 in 1 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-definer-209.html
---

```\{
	 Program: :99 Bottles
	Platform: :Definer (Console)
	  Author: :Chris Sauls
	    Date: :06.03.2003
\}

include std console;

define unsigned byte {
	BottleCount	= 99;
}

define string {
	SBottles	= " bottles of beer";
	SWall		= " on the wall";
	SPeriod		= ".\n";
}

\{ Main Routine \}
{
	while BottleCount {
		Console:WriteLine (BottleCount, SBottles + SWall + SPeriod);
		Console:WriteLine (BottleCount, SBottles + SPeriod);
		Console:WriteLine ("Take one down, pass it around.\n");
		Console:WriteLine (
			--BottleCount
			? BottleCount
			| "No more"
			, SBottles, SWall, SPeriod
		);
	}
}```