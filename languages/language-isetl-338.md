
## Language ISETL ##
---
- Author: Philipp Winterberg
- Date: 04/20/05
- Info: http
- Score:  (1.94 in 18 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-isetl-338.html
---

```$ ISETL version of 99 Bottles of beer (Bottles.stl)
$ See http://isetlw.muc.edu/isetlw/about.htm
$ Philipp Winterberg, http://www.winterbergs.de

program Bottles;
  local b;
  b:= 99;
  while b > 0 do
    printf b, " bottle(s) of beer on the wall,\n";
    printf b, " bottle(s) of beer.\n";
    b:= b - 1;
    printf "Take one down, pass it around,\n";
    printf b, " bottle(s) of beer on the wall.\n\n";
  end;
end;```