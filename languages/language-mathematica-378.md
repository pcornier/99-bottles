
## Language Mathematica ##
---
- Author: Anonymous
- Date: 04/20/05
- Info: n/a
- Score:  (2.56 in 9 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-mathematica-378.html
---

```<a href=http://mathserv.math.sfu.ca/Software/MmaIntro.html>Mathematica</a> is a computer algebra
system.

(* Mathematica version of 99 Bottles of Beer *)
(* Bill Dall *)
Do[If[i>1,
     Print[i, " more bottles of beer on the wall. ",i,
           " more bottles of beer."];
     Print["Take one down, pass it around."], 
     (* else *)
     Print["1 more bottle of beer on the wall. 1 more bottle of beer."]; 
     Print["Take one down, pass it around."];
     Print["No more bottles of beer on the wall."] 
     ], (* If *)
   {i,99,1,-1}]```