
## Language Transcript ##
---
- Author: Mark Smith
- Date: 12/28/05
- Info: http
- Score:  (3.00 in 70 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-transcript-994.html
---

```Local lyricSheet,startBottles,bottles,feelingSick=false

on mouseUp
  singBottles 99
end mouseUp

on singBottles howManyBottles
  put howManyBottles into bottles
  put howManyBottles into startBottles
  
  repeat until feelingSick
    countBottles
    makeSure
    drinkOne
    checkTheresSomeLeft
  end repeat
  
  put lyricSheet
end singBottles

on countBottles
  if bottles > 1 then
    put bottles && "bottles of beer on the wall, " after lyricSheet
  else if bottles = 1 then
    put bottles && "more bottle of beer on the wall, " after lyricSheet
  else
    put "No more bottles of beer on the wall, " after lyricSheet
  end if
end countBottles

on makeSure
  if bottles > 1 then
    put bottles && "bottles of beer." & cr after lyricSheet
  else if bottles = 1 then
    put bottles && "more bottle of beer." & cr after lyricSheet
  else
    put "No more bottles of beer." & cr after lyricSheet
  end if
end makeSure

on drinkOne
  if bottles > 1 then
    put "Take one down and pass it around, " after lyricSheet
  else if bottles = 1 then
    put "Take it down and pass it around, " after lyricSheet
  else
    put "Go to the shtore and buy shome more, " after lyricSheet
  end if
  subtract 1 from bottles
end drinkOne

on checkTheresSomeLeft
  if bottles > 1 then
    put bottles && "bottles of beer on the wall." & cr & cr after lyricSheet
  else if bottles = 1 then
    put bottles && "more bottle of beer on the wall." & cr & cr after lyricSheet
  else if bottles = 0 then
    put "No more bottles of beer on the wall." & cr & cr after lyricSheet
  else
    put startBottles into bottles
    put bottles && "bottlesh of beer on the wall!" after lyricSheet
    put true into feelingSick
  end if
end checkTheresSomeLeft```