
## Language NewtonScript ##
---
- Author: Walter Smith
- Date: 04/20/05
- Info: n/a
- Score:  (3.02 in 97 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-newtonscript-425.html
---

```By Walter Smith.

BeerSong := {
  Drink: func ()
    for b:= 99 to 1 do begin
      Print(:Bob(b) & " on the wall, " & :Bob(b) & ".\n");
      Print("Take one down, pass it around, " & :Bob(b-1) &
            " on the wall.\n");
    end,

  Bob: func (i)
    if i = 0 then
      return "no more bottles of beer"
    else if i = 1 then
      return "1 bottle of beer"
    else
      return i & " bottles of beer",
};```