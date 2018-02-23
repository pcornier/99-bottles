
## Language SuperTalk ##
---
- Author: Anonymous
- Date: 04/20/05
- Info: n/a
- Score:  (2.50 in 2 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-supertalk-616.html
---

```on mouseup
put 99 into numBeerz
put "s it" into modifier
repeat with x = numBeerz down to 1
put "one" into whichone
put "s" into modifier
put "s" into otherModifier
put x - 1 into nextCount
if x is 2 then put "" into otherModifier
if x is 1 then
put "it" into whichone
put "" into modifier
put "s" into otherModifier
put "no more" into nextCount
end if

put x & " bottle" & modifier& " of beer on the wall, " & x & " bottle" & 
modifier & " of beer..." after y
put " Take " & whichOne & " down, pass it around, " & nextCount & " 
bottle" & otherModifier & " of beer on the wall. " & cr after y
end repeat
put "No more bottles of beer on the wall, ya bastards drank them all! So 
off to the store to buy some more, let's put 99 bottles of beer on the 
wall!" & cr after y

put y into card field 1
-- say cd fld 1 -- uncomment this line to hear it sing.

end mouseup```