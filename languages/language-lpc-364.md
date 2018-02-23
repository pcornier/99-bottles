
## Language LPC ##
---
- Author: Tim Hollebeek
- Date: 04/20/05
- Info: n/a
- Score:  (3.00 in 20 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-lpc-364.html
---

```LPC was originally conceived as a object oriented C-like 
language for writing MUDs and being able to modify them on the fly.

// beersong.c
// an implementation in the LPC language
// Tim Hollebeek, 6/6/95 - tim@debusy.Princeton.EDU

private string bottles(int n) {
    switch (n) {
    case 0: return "no more bottles of beer";
    case 1: return "1 bottle of beer";
    default: return n + " bottles of beer";
    }
}

void beersong() {
    for (int i = 99; i; i--) {
        write(bottles(i) + " on the wall, " + bottles(i)
	      + ", take one down, pass it around, "
	      + bottles(i - 1) + " on the wall.\n");
    }
}```