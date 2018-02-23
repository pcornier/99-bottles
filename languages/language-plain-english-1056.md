
## Language Plain English ##
---
- Author: The Osmosian Order
- Date: 02/16/06
- Info: http
- Score:  (3.02 in 148 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-plain-english-1056.html
---

```To sing the beer song:
  Put 99 into a number.
  Loop.
  If the number is 0, break.
  Format a string given the number and "bottle" and "bottles".
  Write the string then " of beer on the wall, " then the string then " of beer.".
  Format another string given the number minus 1 and "bottle" and "bottles".
  Write "Take one down and pass it around, " then the other string then " of beer on the wall.".
  Skip a line.
  Subtract 1 from the number.
  Repeat.
  Write "No more bottles of beer on the wall, no more bottles of beer.".
  Write "Go to the store and buy some more, 99 bottles of beer on the wall.".

To format a string given a number and a singular string and a plural string:
  If the number is 0, put "no more " then the plural into the string; exit.
  If the number is 1, put "1 " then the singular into the string; exit.
  Put the number then " " then the plural into the string.```