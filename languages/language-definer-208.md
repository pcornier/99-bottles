
## Language Definer ##
---
- Author: Chris Sauls
- Date: 04/20/05
- Info: n/a
- Score:  (2.92 in 102 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-definer-208.html
---

```\{
	 Program: :99 Bottles (OO Version)
	Platform: :Definer (Console)
	  Author: :Chris Sauls
	    Date: :06.03.2003
\}

include std console *;
include std wrap list array *;

define class bottle {
	define public routine Take {
		Console:WriteLine ("Take one down, pass it around.\n");
	}
}

define class shelf {
	define private bottle array {
		Bottles = 99 ** (new bottle ());
	}

	define public routine TakeOne {
		Bottles:Extract(0):Take;
	}

	define public routine Report {
		Console:WriteLine (Bottles.Length, " bottles of beer");
	}

	define public condition boolean Empty {
		return Bottles.Length == 0;
	}
}

define shelf {
	Shelf = new shelf ();
}

\{ Main Routine \}
{
	until Shelf.Empty {
		Console:WriteLine (Shelf:Report, " on the wall.\n");
		Console:WriteLine (Shelf:Report, ".\n");
		Shelf:TakeOne;
		Console:WriteLine (Shelf:Report, " on the wall.\n");
	}
	Console:WriteLine ("No more bottles of beer on the wall.\n");
}```