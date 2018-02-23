
## Language Prolog ##
---
- Author: Brent Spillner
- Date: 04/12/06
- Info: n/a
- Score:  (2.96 in 27 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-prolog-1114.html
---

```% 99 bottles of beer song implemented in Prolog
% Released into the public domain in 2006 by Brent Spillner

wall_capacity(99).

wait(_) :- true.

report_bottles(0) :- write('no more bottles of beer'), !.
report_bottles(X) :- write(X), write(' bottle'),
                     (X = 1 -> true ; write('s')),
                     write(' of beer').

report_wall(0, FirstLine) :-
                  (FirstLine = true -> write('No ') ; write('no ')),
                  report_bottles('more'), write(' on the wall'), !.
report_wall(X, _) :- report_bottles(X), write(' on the wall').

sing_verse(0) :- !, report_wall('No more', true), write(', '),
                 report_bottles('no more'), write('.'),
                 nl, write('Go to the store and buy some more, '),
                 wall_capacity(NewBottles), report_wall(NewBottles, false),
                 write('.'), nl.

sing_verse(X) :- report_wall(X, true), write(', '),
                 report_bottles(X), write('.'), nl,
                 write('Take one down and pass it around, '),
                 Y is X - 1, report_wall(Y, false), write('.'), nl, nl,
                 wait(5), sing_verse(Y).

:- wall_capacity(Bottles), sing_verse(Bottles).```