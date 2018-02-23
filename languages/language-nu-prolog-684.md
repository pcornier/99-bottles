
## Language NU-Prolog ##
---
- Author: Lee Naish
- Date: 05/22/05
- Info: http
- Score:  (3.02 in 132 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-nu-prolog-684.html
---

```% Beer song, see http://www.99-bottles-of-beer.net/
% (was http://www.ionet.net/~timtroyr/funhouse/beer.html)
% NU-Prolog (http://www.cs.mu.oz.au/~lee/src/nuprolog/) DCG version
% Author: Lee Naish lee@cs.mu.oz.au 4/2000
%
% DCG = Definite Clause Grammar, a grammar formalism supported by Prolog
% This version owes something to the Mercury version.
%
% Grammars are most commonly used for parsing strings but can also be
% used in reverse for generating strings.  In this case we need to
% parse/generate numbers which is a bit tricky in standard Prolog.
% However, NU-Prolog supports some reversible builtin predicates such as
% plus/3 and divides/4 and has "coroutining" (dynamic reordering of the
% calls based on data flow), allowing us to write simple elegant code
% which can parse the beer song and also generate it!
% beer(99, Song, []) binds Song to the text of the song.
% beer(99, Song, Song) binds Song to an infinite (circular) repetition
% of the text of the song (the occurs check is violated in the
% unification).

% top level goal for 99 bottles
main(_) :-
	beer(99, Song, []),
	format("~s", [Song]).

% First we declare b_o_b (short for bottles of beer) as a prefix operator
% to allow "N b_o_b" instead of "b_o_b(N)" for extra cuteness
:- op(10, xf, b_o_b).

% beer song - N is initial number of bottles
% (maximum 99 - we don't want to encourage drinking to excess!)
beer(N) --> {N > 0},
	N b_o_b, " on the wall,\n",
	N b_o_b, ".\n",
	"Take one down, pass it around,\n",
	{plus(N1, 1, N)}, N1 b_o_b, " on the wall.\n\n",
	beer(N1).
beer(0) --> "Go to the store and buy some more!\n".

% "N bottles of beer" (special cases for N=0 or 1)
0 b_o_b --> "No more bottles of beer".
1 b_o_b --> "1 bottle of beer".
N b_o_b --> {N > 1}, num(N), " bottles of beer".

% number in range 0-99 - N = numeric value
num(N) --> digit(N).
num(N) --> digit(D0), digit(D),
	{D0 > 0, divides(N, 10, D0, D)}.
	
% single digit - N = numeric value
digit(N) --> [A],
	{0'0 =< A, A =< 0'9, plus(N, 0'0, A)}.```