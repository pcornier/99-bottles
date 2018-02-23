
## Language Pawn ##
---
- Author: Anonymous
- Date: 05/19/07
- Info: http
- Score:  (2.00 in 9 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-pawn-1486.html
---

```/* PAWN */

main()
{
	for(new bottles = 99;bottles > 1;bottles--)
	{
		printf "%d bottles of beer on the wall, %d bottles of beer.\n",bottles,bottles
		printf "Take one down and pass it around, %d bottles of beer on the wall.\n\n",bottles
	}
	
	printf "1 bottle of beer on the wall, 1 bottle of beer.\n"
	printf "Take one down and pass it around, no more bottles of beer on the wall.\n\n"

	printf "No more bottles of beer on the wall, no more bottles of beer.\n"
	printf "Go to the store and buy some more, 99 bottles of beer on the wall."
}```