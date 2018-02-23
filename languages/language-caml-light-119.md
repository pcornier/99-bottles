
## Language Caml Light ##
---
- Author: Bow-Yaw Wang
- Date: 04/20/05
- Info: n/a
- Score:  (3.01 in 103 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-caml-light-119.html
---

```(* Caml Light version of 99 bottles of beer *)
(* Written by Bow-Yaw Wang (bywang@saul.cis.upenn.edu) *)
let rec bottles =
  function 1 -> print_string "1 bottle of beer on the wall, 1 bottle of beer\n";
                print_string "Take one down, pass it around,\n";
                print_string "no more bottles of beer on the wall\n"
         | n -> print_int n;
                print_string " bottles of beer on the wall, ";
                print_int n;
                print_string " bottles of beer\n";
                print_string "Take one down and pass it around,\n";
                print_int (n-1);
                print_string " bottles of beer on the wall\n";
                bottles (n-1)
in
   bottles 99;;```