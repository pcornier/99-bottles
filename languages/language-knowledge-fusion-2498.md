
## Language Knowledge Fusion ##
---
- Author: Jonathan Lund
- Date: 09/20/10
- Info: http
- Score:  (2.67 in 3 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-knowledge-fusion-2498.html
---

```@{
	$bob << " bottles of beer";
	$wall << " on the wall!";
	$pass << " take one down, pass it arround... ";
	Loop{
		for $i from 99 to 1 by -1;
		do ug_printValue(format("%d",$i) + $bob + $wall
			+ ", " + format("%d",$i)+ $bob + "!"
			+ $pass + format("%d",$i) + " more"
			+ $bob + $wall);
	};
	ug_printValue("No more bottles of beer on the wall!");
	true;
};```