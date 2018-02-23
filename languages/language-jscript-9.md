
## Language JScript ##
---
- Author: Philipp Winterberg
- Date: 04/20/05
- Info: n/a
- Score:  (2.50 in 8 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-jscript-9.html
---

```// *short* JScript/WSH version of 99 Bottles of beer (Bottles.js)
// Philipp Winterberg, http://www.winterbergs.de 
//
var beerShell = WScript.CreateObject("WScript.Shell");
for (b = 99 ; b > 0 ; b--) {
  beerShell.Popup(b + " bottle(s) of beer on the wall, " + b + \
" bottle(s) of beer.", 2, "99 Bottles of Beer");
  beerShell.Popup("Take one down, pass it around, " + (b - 1) + \ 
"bottle(s) of beer on the wall.", 2, "99 Bottles of Beer");
}```