
## Language Yoix ##
---
- Author: Philipp Winterberg
- Date: 04/20/05
- Info: n/a
- Score:  (1.57 in 14 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-yoix-67.html
---

```// Yoix version of 99 Bottles of beer (Bottles.yx)
// See http://www.research.att.com/sw/tools/yoix/index.html
//
// Philipp Winterberg, http://www.winterbergs.de

import yoix.stdio.printf;

for (b = 99 ; b > 0 ; b--) 
      printf("%d %s\n%d %s\n%s\n%d %s\n\n", b, "bottle(s) of beer on the wall,",	
              b, "bottle(s) of beer.", "Take one down, pass it around,",
             (b - 1), "bottle(s) of beer on the wall.");```