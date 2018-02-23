
## Language ChucK ##
---
- Author: Burton Samograd
- Date: 10/21/06
- Info: http
- Score:  (2.90 in 10 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-chuck-1309.html
---

```for (99 => int i; i >= 0; i--) {
	if(i > 1) {
		<<< i, "bottles of beer on the wall", i, "bottles of beer." >>>;
		<<< "Take one down and pass it around,", i-1, "bottles of beer on the wall" >>>;
	} else if (i == 1) {
		<<< i, "bottle of beer on the wall", i, "bottle of beer." >>>;
		<<< "Take one down and pass it around,", "no more bottles of beer on the wall" >>>;
	} else {
		<<< "No more bottles of beer on the wall,", "no more bottles of beer." >>>;
		<<< "Go the the store and buy some more,", "99 bottles of beer on the wall" >>>;
	}
	<<< "", "" >>>;
};```