
## Language Logtalk ##
---
- Author: Paulo Moura
- Date: 01/22/07
- Info: http
- Score:  (4.00 in 4 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-logtalk-1379.html
---

```/*******************************************************
 * 99 Bottles of Beer
 * Paulo Moura - January 21, 2007
 * bottles.lgt
 * To execute start Logtalk and use the query
 * logtalk_load(bottles).
 *******************************************************/

:- object(bottles).

  :- initialization(sing(99)).

  sing(0) :-
    write('No more bottles of beer on the wall, no more bottles of beer.'), nl,
    write('Go to the store and buy some more, 99 bottles of beer on the wall.'), nl, nl.
  sing(N) :-
    N > 0,
    N2 is N -1,
    beers(N), write(' of beer on the wall, '), beers(N), write(' of beer.'), nl,
    write('Take one down and pass it around, '), beers(N2), write(' of beer on the wall.'), nl, nl,
    sing(N2).

  beers(0) :-
    write('no more bottles').
  beers(1) :-
    write('1 bottle').
  beers(N) :-
    N > 1,
    write(N), write(' bottles').

:- end_object.```