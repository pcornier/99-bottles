
## Language elastiC ##
---
- Author: Philipp Winterberg
- Date: 04/20/05
- Info: n/a
- Score:  (2.20 in 20 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-elastic-233.html
---

```// elastiC version of 99 Bottles of beer (Bottles.ec)
// Philipp Winterberg, http://www.winterbergs.de

package bottles;
import basic;

local b = 99;
while (b > 0)
{        
    basic.print(b, " bottle(s) of beer on the wall,\n", 
                b, " bottle(s) of beer.\n");
    b = b - 1;
    basic.print("Take one down, pass it around,\n", 
                b, " bottle(s) of beer on the wall.\n\n");
}```