
## Language Mathematica ##
---
- Author: Konstantin Kouptsov
- Date: 02/27/06
- Info: http
- Score:  (2.58 in 12 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-mathematica-1063.html
---

```(* Mathematica code *)
(* by Konstantin Kouptsov *)

With[{
  m = "no more",
  b = " bottle",
  e = " of beer",
  w = " on the wall",
  n = "\n",
  d = "Take one down and pass it around, ",
  g = "Go to the store and buy some more, "
  },
 NoMore[x_, y_] := If[x > 0, ToString[x], y];
 Plural[x_] := If[x == 1, "", "s"];
 StringJoin[MapThread[
   Function[{p, q, r},
    StringJoin[{
      NoMore[p, "No more"], b, Plural[p], e, w, ", ",
      NoMore[q, m], b, Plural[q], e, ". ", n, If[q > 0, d, g],
      NoMore[r, m], b, Plural[r], e, w, ".", If[p > 0, n <> n, ""]}]],
   {#, #, RotateLeft[#]} &[Range[99, 0, -1]]]]]```