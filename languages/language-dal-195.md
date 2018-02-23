
## Language DAL ##
---
- Author: Georg Hentsch
- Date: 04/20/05
- Info: n/a
- Score:  (2.00 in 1 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-dal-195.html
---

```Apple's Data Access Language

/*
DAL version of 99 Bottles of beer programmer:
by Georg Hentsch: ghentsch@blsoft.com
*/

declare integer beers = 99;
declare varchar s;

while (beers > 0)
{
	if (beers != 1)
		s = "s";
	else
		s = "";
	printf("%d bottle%s of beer on the wall,\n", beers, s);
	printf("%d bottle%s of beeeeer . . . ,\n", beers, s);
	printf("Take one down, pass it around,\n");

	beers--;
	if (beers > 0)
		printf("%d", beers);
	else
		printf("No more");
	if (beers != 1)
		s = "s";
	else
		s = "";
	printf(" bottle%s of beer on the wall.\n", s);
}```