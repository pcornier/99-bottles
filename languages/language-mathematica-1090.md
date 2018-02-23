
## Language Mathematica ##
---
- Author: Brenton Bostick
- Date: 03/16/06
- Info: http
- Score:  (2.87 in 15 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-mathematica-1090.html
---

```StringForm["`2``1`, `4`.\n`3`, `5``1`.`6`",
        " on the wall",
        #2@#, #3@#,
        ToLowerCase[#2[#]], ToLowerCase[#2[# - 1]],
        If[#==0, "", "\n"]]&[
    #,
    If[# == 0, "No more", ToString[Mod[#, 100]]] <> " bottle" <> If[# == 1, "", "s"] <> " of
beer"&,
    If[# == 0, "Go to the store and buy some more", "Take one down and pass it around"]&
]& /@ Range[99, 0, -1] //TableForm```