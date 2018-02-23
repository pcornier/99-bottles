
## Language eC ##
---
- Author: Philipp Winterberg
- Date: 04/20/05
- Info: http
- Score:  (2.61 in 23 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-ec-229.html
---

```// eC version of 99 Bottles of beer (Bottles.ec)
// See http://sunset.backbone.olemiss.edu/~bobcook/eC/
// Philipp Winterberg, http://www.winterbergs.de

#include <iostream.h>
#include <iomanip.h>

unsigned int b;

void main () {
        for (b = 99; b > 0; b--) {
                cout<<setw(2)<<b<<" bottle(s) of beer on the wall,\n"<<b;
                cout<<" bottle(s) of beer.\nTake one down, pass it around,\n";
                cout<<setw(2)<<(b-1)<<" bottle(s) of beer on the wall.\n\n";
        }; 
};```