
## Language Mathematica ##
---
- Author: Szabolcs Horv�t
- Date: 03/04/08
- Info: http
- Score:  (2.67 in 9 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-mathematica-1712.html
---

```tens  = {"ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"};
teens = {"eleven", "twelve", "thirteen", "fourteen", "fifteen", 
         "sixteen", "seventeen", "eighteen", "nineteen"};
ones  = {"one", "two", "three", "four", "five", "six", "seven", "eight", "nine"};

formatNum[{a_, b_}] := tens[[a]] <> "-" <> ones[[b]]
formatNum[{a_, 0}] := tens[[a]]
formatNum[{1, b_}] := teens[[b]]
formatNum[{b_}] := ones[[b]]
formatNum[{0}] := "no more"

capitalize[str_] := ToUpperCase[StringTake[str, 1]] <> StringDrop[str, 1]

pluralize[str_, _] := str <> "s"
pluralize[str_, 1] := str
pluralize[str_ /; StringMatchQ[str, "* of *"], n_] := 
  StringReplace[str, what__ ~~ " of " ~~ whatever__ :> pluralize[what, n] <> " of " <> whatever]

(* Add more special plurals here: *)
pluralize["box", _] := "boxes"
pluralize["mouse", _] := "mice"

multiple[str_, n_] := 
  formatNum@IntegerDigits[n] <> " " <> pluralize[str, n]

songAbout[thing_] := 
  Append[
    Table[
      capitalize@multiple[thing, i] <> " on the wall, " <> multiple[thing, i] <> ".\n" <>
      "Take one down and pass it around, " <> multiple[thing, i - 1] <> " on the wall.\n", 
      {i, 99, 1, -1}],
    capitalize@multiple[thing, 0] <> " on the wall, " <> multiple[thing, 0] <> ".\n" <>
    "Go to the store and buy some more, " <> multiple[thing, 99] <> " on the wall."
  ]

(* Sing about various stuff: *)
Print /@ songAbout["bottle of beer"];
Print /@ songAbout["beer bottle"];
Print /@ songAbout["flask of wine"];
Print /@ songAbout["box of chocolate"];```