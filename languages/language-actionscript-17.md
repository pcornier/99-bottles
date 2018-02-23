
## Language ActionScript ##
---
- Author: David Fichtmueller
- Date: 04/20/05
- Info: n/a
- Score:  (1.64 in 11 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-actionscript-17.html
---

```//  "99 bottles of beer" in ActionScript
//  by David Fichtmueller ( david@fichtmueller.de )

b = 99;
for (i=1; i<=99; i++) {
	txt = txt+b+" bottle(s) of beer on the wall. "+b+" bottle(s) of beer. Take 
one down, pass it around, ";
	b = b-1;
	txt = txt+b+" bottle(s) of beer on the wall. ";
}
stop ();```