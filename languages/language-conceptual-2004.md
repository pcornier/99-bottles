
## Language coNCePTuaL ##
---
- Author: Scott Pakin
- Date: 03/18/09
- Info: http
- Score:  (3.33 in 3 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-conceptual-2004.html
---

```For each numbottles in {99, ..., 1} {
  if numbottles = 1 then
    task 0 outputs "1 bottle of beer on the wall, "
      and "1 bottle of beer."
  otherwise
    task 0 outputs numbottles and " bottles of beer on the wall, "
      and numbottles and  " bottles of beer." then
  if numbottles-1 = 0 then
    task 0 outputs "Take it down and pass it around, "
      and "no more bottles of beer on the wall.\n"
  otherwise
    if numbottles-1 = 1 then
      task 0 outputs "Take one down and pass it around, "
        and "1 bottle of beer on the wall.\n"
    otherwise
      task 0 outputs "Take one down and pass it around, "
        and (numbottles-1) and " bottles of beer on the wall.\n"
} then
task 0 outputs "No more bottles of beer on the wall, no more bottles of beer." then
task 0 outputs "Go to the store and buy some more, 99 bottles of beer on the wall.".```