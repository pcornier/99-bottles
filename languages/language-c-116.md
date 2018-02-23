
## Language C ##
---
- Author: Bill Wein
- Date: 04/20/05
- Info: n/a
- Score:  (2.81 in 124 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-c-116.html
---

```/*
 * 99 bottles of beer in ansi c
 *
 * by Bill Wein: bearheart@bearnet.com
 *
 */

#define MAXBEER (99)

void chug(int beers);

main()
{
register beers;

for(beers = MAXBEER; beers; chug(beers--))
  puts("");

puts("\nTime to buy more beer!\n");

exit(0);
}

void chug(register beers)
{
char howmany[8], *s;

s = beers != 1 ? "s" : "";
printf("%d bottle%s of beer on the wall,\n", beers, s);
printf("%d bottle%s of beeeeer . . . ,\n", beers, s);
printf("Take one down, pass it around,\n");

if(--beers) sprintf(howmany, "%d", beers); else strcpy(howmany, "No more");
s = beers != 1 ? "s" : "";
printf("%s bottle%s of beer on the wall.\n", howmany, s);
}```