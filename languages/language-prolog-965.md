
## Language Prolog ##
---
- Author: M@
- Date: 11/28/05
- Info: n/a
- Score:  (3.02 in 45 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-prolog-965.html
---

```% 99 bottles of beer.
% Remko Troncon <spike@kotnet.org>
% Modified by <M@>

bottles :-
    bottles(99).

bottles(1) :- 
    write('1 bottle of beer on the wall, 1 bottle of beer,'), nl,
    write('Take one down, and pass it around,'), nl,
    write('Now they are all gone.'), nl,!.
bottles(X) :-
    write(X), write(' bottles of beer on the wall,'), nl,
    write(X), write(' bottles of beer,'), nl,
    write('Take one down and pass it around,'), nl,
    NX is X - 1,
    write(NX), write(' bottles of beer on the wall.'), nl, nl,
    bottles(NX).```