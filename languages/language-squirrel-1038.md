
## Language Squirrel ##
---
- Author: Joe Andrusyszyn
- Date: 02/01/06
- Info: http
- Score:  (3.00 in 6 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-squirrel-1038.html
---

```function first(i)
{
	if(i>1)
		suspend(i + " bottles of beer on the wall, " + i  + " bottles of beer.");
	if(i==1)
		suspend(i + " bottle of beer on the wall, " + i  + " bottle of beer.");
	if(i<1)
		return null;
	return second(i);
}

function second(i)
{
	if(i>2)
		suspend("Take one down and pass it around, " + (i-1) + " bottles of beer on  the wall.");
	if(i==2)
		suspend("Take one down and pass it around, " + (i-1) + " bottle of beer on  the wall.");
	if(i==1)
		suspend("Take one down and pass it around, no more bottles of beer on  the wall.");
	i--;
	return first(i);
}

local songthread = newthread(first);
local line;
print(songthread.call(99)+"\n");
while(line = songthread.wakeup())
	print(line + "\n");```