
## Language RPL/2 ##
---
- Author: Kiyoshi Akima
- Date: 05/22/06
- Info: http
- Score:  (3.02 in 46 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-rpl-2-1161.html
---

```#!/usr/local/bin/rpl

BEER
<<
    99 do
        dup ->str PLURAL " on the wall," + disp
        dup ->str PLURAL "." + disp
        "Take one down, pass it around," disp
        1 -
        if dup then
            dup ->str
        else
            "No more"
        end
        PLURAL " on the wall." + disp
        "" disp
    until dup 0 == end
    drop
>>

PLURAL
<<
    " bottle" + over if 1 <> then "s" + end " of beer" +
>>```