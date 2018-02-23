
## Language WebL ##
---
- Author: Philipp Winterberg
- Date: 04/20/05
- Info: http
- Score:  (2.38 in 26 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-webl-152.html
---

```// WebL version of 99 Bottles of beer (Bottles.webl)
// WebL = Compaq's Web Language, http://research.compaq.com/SRC/WebL
// Philipp Winterberg, http://www.winterbergs.de

var b = 99;

while b > 0 do 
  PrintLn(b, " bottle(s) of beer on the wall,\n",	
          b, " bottle(s) of beer.\n", "Take one down, pass it around,\n",
          (b - 1), " bottle(s) of beer on the wall.\n");
  b = b - 1
end```