
## Language Ruri ##
---
- Author: Tom Rothamel
- Date: 04/20/05
- Info: http
- Score:  (3.00 in 3 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-ruri-500.html
---

```// Ruri version of 99 Bottles of beer.
// By Tom Rothamel <tom-ijvm@onegeek.org>
// 
// See http://onegeek.org/~tom/software/ruri/ for more info on the
// language.

main {
	word i;

	for (i = 99; i > 0; i) {
		printbottlesob(i);
		out " on the wall,\n";
		printbottlesob(i);
		out ".\n";
		
		i = i - 1;
		out "Take one down, pass it around,\n";
		printbottlesob(i);
		out " on the wall.\n\n";
	}

	halt;
}

method printbottlesob(word n) {
	word q;
	word oldn;

	oldn = n;

	if (n > 0) {
		q = 0;

		while (n >= 10) {
			n = n - 10;
			q = q + 1;
		}
	
		if (q) out '0' + q;
		out '0' + n;
	} else {
		out "No";
	}
		
	out " bottle";
	
	if (oldn != 1) out "s";
	
	out " of beer";

	return 0;
}```