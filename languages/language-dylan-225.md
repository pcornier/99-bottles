
## Language Dylan ##
---
- Author: Anonymous
- Date: 04/20/05
- Info: n/a
- Score:  (3.01 in 90 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-dylan-225.html
---

```// Dylan version of 99 Bottles of Beer
// programmer: Jim Studt jim@federated.com

define method enumerate( count == 1 ) "1 bottle" end method enumerate;
define method enumerate( count == 0 ) "no more bottles" end method enumerate;
define method enumerate( count :: <integer> )
  format-to-string("%d bottles", count);
end method enumerate;

define method reference( count == 1) "it" end method reference;
define method reference( count :: <integer>) "one" end method reference;

define method main (argv0, #rest noise)
  for ( i from 99 to 1 by -1) 
    format( *standard-output*, "%s of beer on the wall, %s of beer.\n", 
	   enumerate(i), enumerate(i));
    format( *standard-output*, 
	   "  Take %s down, pass it around, %s of beer on the wall.\n",
	   reference(i), enumerate( i - 1));
  end for;
end method main;```