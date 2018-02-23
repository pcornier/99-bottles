
## Language tbpl ##
---
- Author: kmeaw
- Date: 11/12/06
- Info: http
- Score:  (3.00 in 4 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-tbpl-1324.html
---

```*CBottle = CClass new
implements:
{
  self 'toString =
  {
    self bottles > 1
    then
      "\{self bottles} bottles"
    :else self bottles == 1 then
      "\{self bottles} bottle"
    else
      "no more bottles"
  };
};
CBottle 'initialize =
{
  self 'bottles = 99;
};

*beer = CBottle new;

{
  io <<< "\{beer} of beer on the wall, \{beer} of beer.";
  io << "Take one down and pass it around, ";
  beer bottles -= 1;
  io <<< "\{beer} bottles of beer on the wall.";
} while { beer bottles > 0 };

io <<< $(No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.);```