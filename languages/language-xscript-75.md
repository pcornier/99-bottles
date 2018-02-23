
## Language xScript ##
---
- Author: Philipp Winterberg
- Date: 04/20/05
- Info: http
- Score:  (2.43 in 23 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-xscript-75.html
---

```rem xScript version of 99 Bottles of beer (Bottles.xs)
rem See http://www.intelligent-data-systems.de/products/xccode.html
rem Philipp Winterberg, http://www.winterbergs.de

int b
string a,c,d,n
a = " bottle(s) of beer"
c = " on the wall"
d = "Take one down, pass it around," 
n = chr(13) + chr(10)
  for b = 99 to 1 step -1
    DisplayString cstr(b)+a+c+","+n+cstr(b)+a+"."+n+d+n+cstr(b-1)+a+c+"."
  next```