
## Language TADS 3 ##
---
- Author: Jim Nelson
- Date: 04/20/05
- Info: http
- Score:  (4.00 in 4 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-tads-3-436.html
---

```// TADS 3 (Text Adventure Development System) is a language 
// for crafting interactive fiction.  More information can 
// be found at http://www.tads.org/.

// 99 bottles of beer on the wall.
// 17 June 2002 Jim Nelson <jim_nelson@mindspring.com>

main(args)
{
	local bottles = 99;
	local number = bottles;
	local plural = 's';
	
	for(;;)
	{
		"<<number>> bottle<<plural>> of beer on the wall,\n";
		"<<number>> bottle<<plural>> of beer,\n";

		if(bottles == 0)
		{
			break;
		}
		
		"Take <<(bottles != 1) ? 'one' : 'it'>> down, pass it around,\n";

		bottles--;
		if(bottles > 1)
		{
			plural = 's';
			number = bottles;
		}
		else if(bottles == 1)
		{
			plural = '';
			number = 'One more';
		}
		else
		{
			// zero
			plural = 's';
			number = 'No more';
		}

		"<<number>> bottle<<plural>> of beer on the wall.\n\b";
	}

	"Go to the store, buy some more,\n";
	"99 bottles of beer on the wall.\n\b";
}```