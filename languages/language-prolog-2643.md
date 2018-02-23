
## Language prolog ##
---
- Author: none
- Date: 04/28/11
- Info: n/a
- Score:  (2.91 in 11 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-prolog-2643.html
---

```% 99 bottles of beer song implemented in Prolog

kiom(N,_) --> {N > 0, number_chars(N,A)}, A.
kiom(0,I) --> {I =:= 1}, ['No more'] ; ['no more'].

suff(N)   --> {N =\= 1}, ['s'] ; [ ].
beer(N,X) --> kiom(N,X), [' bottle'], suff(N), [' of beer'].
wall(N,X) --> beer(N,X), [' on the wall'].

take(N)   --> {N > 0}, ['Take one down and pass it around' ].
take(0)   -->          ['Go to the store and buy some more'].

koplo(N)  --> wall(N,1), [', '], beer(N,2), ['.\n'], {M is (N-1) mod 100},
              take(N  ), [', '], wall(M,2), ['.\n'].

kanto(N) :- koplo(N,X,[]), findall(_,(member(E,X),print(E)),_),
            ( N =:= 0 ; M is N-1, nl, kanto(M) ), !.```