
## Language Apple Script ##
---
- Author: Kristopher Johnson
- Date: 04/20/05
- Info: n/a
- Score:  (3.03 in 138 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-apple-script-32.html
---

```-- AppleScript version of "99 Bottles of Beer"
-- by Kristopher Johnson  kdj@mindspring.com

to createBottleString for aNumberOfBottles
    if aNumberOfBottles is 0 then
        return "No more bottles"
    else if aNumberOfBottles is 1 then
        return "1 more bottle"
    else
        return (aNumberOfBottles as string) & " bottles"
    end if
end createBottleString

set lyrics to ""
repeat with numberOfBottles from 99 to 1 by -1
    set bottleString to (createBottleString for numberOfBottles)
    set lyrics to lyrics & bottleString & " of beer on the wall, " & bottleString & " of beer.  " &
return
    set lyrics to lyrics & "Take one down and pass it around, " & return
    set lyrics to lyrics & (createBottleString for (numberOfBottles - 1)) & " of beer on the wall. 
" & return
end repeat
set lyrics to lyrics & "No more bottles of beer on the wall, no more bottles of beer." & return
set lyrics to lyrics & "Go to the store and buy some more." & return
set lyrics to lyrics & "99 bottles of beer on the wall."
return lyrics```