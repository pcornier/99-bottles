
## Language TOM ##
---
- Author: John Jensen
- Date: 04/20/05
- Info: n/a
- Score:  (3.00 in 1 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-tom-458.html
---

```<copyright> 99 bottles of beer on the wall in TOM.
    By <a href="mailto:jjens@primenet.com">John Jensen</a>
    No Copyright, this code is placed in the public domain.
    </copyright>

implementation class beer
<doc> Every program needs a main.  </doc>
int
  main Array arguments
  {
    int beers;
    beers = 99;
    while (beers > 0) {
    [[[stdio out] print beers] print " bottles of beer on the wall, "];
    [[[stdio out] print beers] print " bottles of beer.\n"];
    [[stdio out] print "Take one down, pass it around, "];
    beers--;
    if (beers != 0) {
     [[[stdio out] print beers] print " bottles of beer on the wall.\n\n"];
    } else {
     [[stdio out] print "no more bottles of beer on the wall.\n\n"];
    }
  }
  = 0;
}
end;

implementation instance beer end;```