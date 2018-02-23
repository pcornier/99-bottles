
## Language CHR ##
---
- Author: Jon Sneyers
- Date: 06/19/06
- Info: http
- Score:  (3.00 in 15 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-chr-1184.html
---

```% 99 bottles of beer, CHR(Prolog) version.
% tested in the K.U.Leuven CHR implementation in SWI-Prolog
% Mon Jun 19 14:22:05 2006 Jon Sneyers
% top-level goal: beer

:- use_module(library(chr)).
:- chr_constraint beer, beer(+int), bottle, sing,
                capital, bottles, ofbeer, onwall, comma,
                take_one, dotnl,
                bottle_count, bottles(+int), writeresult.

:- chr_option(toplevel_show_store,off).
:- chr_option(optimize,full).
:- chr_option(debug,off).

% make 99 bottles and start singing
beer <=> beer(99), sing.

% make N bottles
makebottle @ beer(N) <=> N > 0 | bottle, beer(N-1).
endloop    @ beer(_) <=> true.

% stop singing if we're already singing
% (change to simpagation rule to make the song infinite)
sing, sing <=> true.

% sing two lines
sing ==> capital, bottles, ofbeer, onwall, comma, bottles, ofbeer, dotnl,
         take_one, comma, bottles, ofbeer, onwall, dotnl, nl.

% if we're still singing: sing again
sing <=> sing.

% take one bottle down
take_one, bottle <=> write('Take one down and pass it around').

% no more bottles: go to the store and start again
take_one <=> write('Go to the store and buy some more'), beer.

% print how many bottles there are in the store
bottle, bottle \ bottles <=> bottle_count, write(' bottles').
bottle \ bottles  <=> write('1 bottle').
capital, bottles <=> write('No more bottles').
         bottles <=> write('no more bottles').

% count the number of bottles in the store
bottle_count, bottle ==> bottles(1).
bottle_count <=> writeresult.
bottles(X), bottles(Y) <=> Z is X+Y, bottles(Z).
writeresult, bottles(N) <=> write(N).

% write stuff
onwall <=> write(' on the wall').
ofbeer <=> write(' of beer').
dotnl <=> write('.'), nl.
comma \ capital <=> true.
comma <=> write(', ').```