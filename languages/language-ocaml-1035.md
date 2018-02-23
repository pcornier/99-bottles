
## Language OCaml ##
---
- Author: Philippe Wang
- Date: 01/28/06
- Info: http
- Score:  (3.01 in 117 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-ocaml-1035.html
---

```(* this is only a little modification of the current code by  Walter C. Reel III *)
(* in deed, I just made it be a little more ``Caml-looking'' *)

let bottles n =
  string_of_int n ^ " bottle" ^ (if n = 1 then "" else "s") ^ " of beer" in
let finale = function
    0 ->  "\nNo more bottles of beer on the wall!" 
  | n ->  ((bottles n) ^ " on the wall.\n\n") in
let round n =
  print_string ((bottles n) ^ " on the wall,\n");
  print_string ((bottles n) ^ ".\n");
  print_string "Take one down, pass it around.\n";
  print_string (finale (pred n)) in
let rec doit = function 
    0 -> ()
  | n -> round n; doit (pred n) in
doit 99;;```