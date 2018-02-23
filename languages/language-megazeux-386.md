
## Language Megazeux ##
---
- Author: Anonymous
- Date: 04/20/05
- Info: n/a
- Score:  (2.00 in 1 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-megazeux-386.html
---

```."Megazeux Code"
."For '99 bottles of beer"

set "temp" to 99
:noe
if "temp" = 0 "toopoor"
* "&temp& bottles of beer on the wall,"
wait 30
* "&temp& bottles of beer!"
wait 30
* "Yah take one down, pass it around,"
dec "temp" by 1
wait 30
* "&temp& bottles of beer on the wall."
wait 30
goto "noe"
end
:toopoor
* "No more bottles of beer on the wall,"
wait 30
* "No more bottles of beer!"
wait 30
* "Let's go to the store and get some more,"
wait 30
* "No more bottles of beer on the wall..."
wait 30
* ">HIC<"
explode 5
end```