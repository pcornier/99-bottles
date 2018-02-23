
## Language coq ##
---
- Author: Hugo Feree
- Date: 04/01/11
- Info: http
- Score:  (3.33 in 3 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-coq-2626.html
---

```Require Import String Ascii.
Open Scope string_scope.

Fixpoint ten_div n := match n with
  | S(S(S(S(S(S(S(S(S(S p))))))))) => let (q, r) := ten_div p in (S q, r)
  | _ => (O, n)
end.

Function nts (n : nat) : string := 
match ten_div n with
  | (O, r) => String (ascii_of_nat (48 + r)) ""
  | (q, r) => String (ascii_of_nat (48 + (snd(ten_div q)))) (String (ascii_of_nat (48 + r)) "")
end.

Let take := "
Take one down and pass it around, ".

Fixpoint bottle n := match n with
 | O => ""
 | 2 => "2 bottles of beer on the wall, 2 bottles of beer." ++ take ++ "1 bottle of beer on the
wall.

1 bottle of beer on the wall, 1 bottle of beer." ++ take ++ "no more bottles of beer on the wall.

No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall."
 | (S n) => (nts(S n)) ++ " bottles of beer on the wall, " ++ (nts (S n)) ++ " bottles of beer." ++
take ++ (nts n) ++ " bottles of beer on the wall.

" ++ (bottle n)
end.

Eval compute in (bottle 99).


(*
You can check that this is correct:

Lemma correct : bottle 99 ="put here the entire song".
Proof.
reflexivity.
Qed.
*)```