
## Language Darwin ##
---
- Author: Anonymous
- Date: 04/20/05
- Info: n/a
- Score:  (2.00 in 5 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-darwin-197.html
---

```Some biochemists write code in a programming language called Darwin, which
is an interpreted language with support for many of the functions used 
when analyzing biological sequences. Here is '99 bottles of beer' in 
Darwin. It even handles plural.

plural := proc(num)
  if num = 1 then
    return(''):
  else
    return('s'):
  fi:  
end:

bottlesong := proc()
  for i from 99 to 1 by -1 do
    printf('%d bottle%s of beer on the wall. \n', i, plural(i)):
    printf('%d bottle%s of beer\n', i, plural(i)):
    printf('Take one down, pass it around.\n'):
    printf('%d bottle%s of beer on the wall.\n\n', i-1, plural(i-1)):
  od:
end:

bottlesong();```