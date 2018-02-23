
## Language Yacas ##
---
- Author: Philipp Winterberg
- Date: 04/20/05
- Info: n/a
- Score:  (2.38 in 13 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-yacas-65.html
---

```// Yacas version of 99 Bottles of beer (Bottles.ys)
// Yacas = Yet Another Computer Algebra System
//         http://yacas.sourceforge.net/yacas.html
//
// Philipp Winterberg, http://www.winterbergs.de

For (b := 99, b > 0, b--) 
  Echo({b, "bottle(s) of beer on the wall," : Nl(),
        b, "bottle(s) of beer." : Nl(),
        "Take one down, pass it around," : Nl(),
        b - 1, "bottle(s) of beer on the wall." : Nl()});```