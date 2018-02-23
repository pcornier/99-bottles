
## Language Life ##
---
- Author: Denys Duchier
- Date: 04/20/05
- Info: http
- Score:  (2.95 in 163 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-life-358.html
---

```<A HREF=http://www.isg.sfu.ca/life/>LIFE</A> is a constraint logic programming language.

%% LIFE version of 99 Bottles of beer
%% by Denys Duchier duchier@cs.sfu.ca

how_many(0) -> "no more".
how_many(N) -> N.

action(0) -> 99  | write("Go to the store and buy some more.\n").
action(N) -> N-1 | write("Take one down, pass it around.\n").

bottles(1) -> "bottle".
bottles(N) -> "bottles".

sing(N) :-
  write(H:how_many(N)," ",B:bottles(N)," of beer on the wall, ",
        H," ",B," of beer.\n"),
  write(how_many(M:action(N))," ",bottles(M),
        " of beer on the wall.\n\n"),
  sing(M).```