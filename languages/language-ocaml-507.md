
## Language OCaml ##
---
- Author: Philipp Winterberg
- Date: 04/20/05
- Info: http
- Score:  (1.41 in 22 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-ocaml-507.html
---

```(* Objective Caml version of 99 Bottles of beer (Bottles.ml) *)
(* http://caml.inria.fr/ocaml/distrib.html                   *)
(* Philipp Winterberg, http://www.winterbergs.de             *)

let b = ref 99
in while !b > 0 do
     print_int !b; print_string " bottle(s) of beer on the wall,\n";
     print_int !b; print_string " bottle(s) of beer.\n";
     print_string "Take one down, pass it around,\n";
     b := !b - 1;
     print_int !b; print_string " bottle(s) of beer on the wall.\n\n"
  done;;```