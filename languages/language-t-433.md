
## Language T ##
---
- Author: Philipp Winterberg
- Date: 04/20/05
- Info: http
- Score:  (1.92 in 13 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-t-433.html
---

```% T version of 99 Bottles of beer (Bottles.t)
% http://www.programmersheaven.com/zone22/cat254/16480.htm
% Philipp Winterberg, http://www.winterbergs.de

program

    var b : int := 99
    
    loop
    
        exit when b = 0
        put b, " bottle(s) of beer on the wall,"
        put b, " bottle(s) of beer."
        put "Take one down, pass it around,"
        b := b - 1 
        put b, " bottle(s) of beer on the wall."
        
    end loop
    
end program```