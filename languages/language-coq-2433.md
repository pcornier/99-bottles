
## Language Coq ##
---
- Author: Jean-Marie Madiot
- Date: 06/25/10
- Info: http
- Score:  (2.92 in 12 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-coq-2433.html
---

```
(* Coq is a formal proof management system. It provides a formal
 * language to write mathematical definitions, executable algorithms 
 * and theorems together with an environment for semi-interactive 
 * development of machine-checked proofs.
 *
 * This code, when compiled with Coq, produce a formal proof of the 
 * fact that 99 + 98 is an odd number. This proof is built 
 * successively in 100 steps thanks to the fact that if a + b is an 
 * odd number, then (1 + a) + (1 + b) is, too. These steps call an 
 * informative routine which sings the 99 bottles of beer song all 
 * along the construction of the proof.
 *
 * to compile: "coqc ninetynine.v"
 *
 * You can't execute the proof compiled (in fact you could, thanks 
 * to the Curry-Howard correspondence, but executing proofs 
 * unfortunately does not sing anything.)
 *)

Require Import Arith.

(* Informative singing routine *)
Ltac sing := match goal with
  | |- _ (2 + _) =>
      idtac "2 bottles of beer on the wall, 2 bottles of beer.";
      idtac "Take one down and pass it around, 1 bottle of beer on the wall."
  | |- _ (1 + _) =>
      idtac "1 bottle of beer on the wall, 1 bottle of beer.";
      idtac "Take one down and pass it around, no more bottles of beer on the wall."
  | |- _ (O + _) =>
      idtac "No more bottles of beer on the wall, no more bottles of beer.";
      idtac "Go to the store and buy some more, 99 bottles of beer on the wall."
  | |- _ (?n + ?n') =>
     idtac n "bottles of beer on the wall," n "bottles of beer.";
     idtac "Take one down and pass it around," n' "bottles of beer on the wall."
end.

(* What does it mean a number is odd? *)
Definition odd n := exists p, n = 2 * p + 1.

(* Proof that is a+b is odd then (1+a)+(1+b) is odd. *)
Lemma odd_plus_s_s : forall a b, odd (a + b) -> odd (S a + S b).
Proof.
 intros a b odd_a_b.
 destruct odd_a_b as (p, Hp).
 rewrite <- plus_n_Sm.
 simpl.
 rewrite Hp.
 exists (1 + p).
 simpl.
 repeat rewrite <- plus_n_Sm.
 reflexivity.
Qed.

(* Routine which apply the previous lemma and call "sing" then call itself *)
Ltac bottle := match goal with
  | |- _ => sing; apply odd_plus_s_s; idtac ""; bottle
  | |- _ =>
    idtac "";
    idtac "No more bottles of beer on the wall, no more bottles of beer.";
    idtac "Go to the store and buy some more, 99 bottles of beer on the wall."
end.

(* The theorem this file eventually proves *)
Theorem odd_99_plus_98 : odd (99 + 98).
Proof.
 bottle.
 exists O.
 simpl.
 reflexivity.
Qed.

(* Of course, you can prove that faster, for instance "exists 98; 
 * auto." is enough to complete the proof, but can't sing the song, 
 * how sad it is?
 *)```