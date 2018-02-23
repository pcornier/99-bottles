
## Language XION ##
---
- Author: Rebecca Bettencourt
- Date: 02/15/11
- Info: http
- Score:  (2.50 in 2 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-xion-2600.html
---

```on bottles start
        repeat with x = start down to 1
                if x = 1 then
                        put "1 bottle of beer on the wall,"
                        put "1 bottle of beer."
                        put "Take one down, pass it around,"
                        put "No more bottles of beer on the wall."
                else
                        put x&&"bottles of beer on the wall,"
                        put x&&"bottles of beer."
                        put "Take one down, pass it around,"
                        if x-1 = 1 then
                                put "1 bottle of beer on the wall."
                        else
                                put (x-1)&&"bottles of beer on the wall."
                        end if
                        put empty
                end if
        end repeat
end bottles

bottles 99```