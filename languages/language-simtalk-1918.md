
## Language SimTalk ##
---
- Author: planty
- Date: 11/19/08
- Info: http
- Score:  (3.00 in 1 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-simtalk-1918.html
---

```is
	local
	ii : integer;
do
	for ii := 99 downto 1 loop
		print ii, " Bottle(s) of beer on the wall, ", ii, " bottle(s) of beer";
		print "Take one down and pass it around,";
		print ii-1, " bottle(s) of beer on the wall";
	next;
	
	print "No more bottles of beer on the wall, no more bottles of beer.";
	print "Go to the store and buy some more, 99 bottles of beer on the wall.";
	
end;```