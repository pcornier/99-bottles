
## Language MoH script ##
---
- Author: Hal / @(...
- Date: 10/09/06
- Info: http
- Score:  (3.00 in 4 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-moh-script-1295.html
---

```// 99 bottles of beer song in Medal of Honor script (Quake 3 engine)
//Hal / @(...:.:...)@
//http://www.modtheater.com/forum/
//Info on language: http://map.planetmedalofhonor.gamespy.com/mohaa/t.php?id=82

main:
	for(local.a = 99;local.a > 0;local.a --)
	{
		println ((local.beercount) + "bottles of beer on the wall, " + (local.beercount) + " bottles of
beer.")
		
		if(local.a > 1)
		{
			println ("Take one down and pass it around, " + (local.beercount - 1) + " bottles of beer on the
wall.")
		}
		else
		{
			println "No more bottles of beer on the wall, no more bottles of beer."
		}
		println " "	//Add blank line
	}
	
	println "No more bottles of beer on the wall, no more bottles of beer."
	printlnbold "Go to the store and buy some more, 99 bottles of beer on the wall."
end```