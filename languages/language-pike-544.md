
## Language Pike ##
---
- Author: Ivan Voras
- Date: 04/20/05
- Info: http
- Score:  (2.89 in 9 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-pike-544.html
---

```#!/usr/local/bin/pike
// A simple version made in Pike (http://pike.roxen.com/)
// Author: Ivan Voras <ivoras@fer.hr>

int main() {
	int i = 99;
	
	while (i > 0) {

		if (i > 1)
			write (i+" bottles of beer on the wall, "+i+" bottles of beer,\n");
		else
			write ("one bottle of beer on the wall, one bottle of beer,\n");

		write ("take one down, pass it around,\n");
		i--;
		switch (i) {
			case 0:
				write ("no more bottles of beer on the wall.\n");
				break;
			case 1:
				write ("one bottle of beer on the wall.\n");
				break;
			default:
				write (i+" bottles of beer on the wall.\n");
				break;
		}
	}
	
	return 0;
}```