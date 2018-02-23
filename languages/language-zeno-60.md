
## Language Zeno ##
---
- Author: Philipp Winterberg
- Date: 04/20/05
- Info: http
- Score:  (2.24 in 25 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-zeno-60.html
---

```% Zeno version of 99 Bottles of beer (Bottles.zen)
% See http://home.att.net/~srschmitt/zeno.html
% Philipp Winterberg, http://www.winterbergs.de

var b : int := 99

program

    while b > 0
    
        put b:2, " bottle(s) of beer on the wall,"
        put b:2, " bottle(s) of beer."
        put "Take one down, pass it around,"
        decr b
        put b:2, " bottle(s) of beer on the wall."   
        put " "
        
    end while

end program```