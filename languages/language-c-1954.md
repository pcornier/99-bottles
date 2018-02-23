
## Language C ##
---
- Author: Steve Checkoway
- Date: 01/15/09
- Info: n/a
- Score:  (3.00 in 46 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-c-1954.html
---

```#include <stdio.h>
#include <stdlib.h>

static void song( int bottles )
{
	while( (printf("%d bottles of beer on the wall, %d bottles of beer.\n"
		       "Take one down and pass it around, %d bottle%s of beer on the wall.\n\n",
		       bottles, bottles, bottles-1, bottles>2? "s":""), bottles > 2) )
		while( (--bottles,0) ) {}
	while( (puts("1 bottle of beer on the wall, 1 bottle of beer.\n"
		     "Take one down and pass it around, no more bottles of beer on the wall.\n\n"
		     "No more bottles of beer on the wall, no more bottles of beer.\n"
		     "Go to the store and buy some more, 99 bottles of beer on the wall."),0) ) {}
}

int main()
{
	while( (song(99), exit(0), 0) ) {}
}```