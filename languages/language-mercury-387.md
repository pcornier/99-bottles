
## Language Mercury ##
---
- Author: Fergus Henderson
- Date: 04/20/05
- Info: http
- Score:  (3.02 in 103 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-mercury-387.html
---

```A purely declarative logic programming language. 
<a href="http://www.cs.mu.oz.au/~zs/mercury.html">Click</a> for more information.

% file: beer.m
% author: Fergus Henderson <fjh@cs.mu.oz.au>
% date: Thursday 9th November 1995

:- module beer.
:- interface.
:- import_module io.

:- pred main(io__state::di, io__state::uo) is det.

:- implementation.
:- import_module int.

main --> beer(99).

:- pred beer(int::in, io__state::di, io__state::uo) is det.

beer(N) -->
	( { N = 0 } ->
		io__write_string("Go to the store and buy some more!")
	;
		bottles(N),
		io__write_string(" on the wall,\n"),
		bottles(N),
		io__write_string(".\n"),
		io__write_string("Take one down, pass it around,\n"),
		{ N1 is N - 1 },
		bottles(N1),
		io__write_string(" on the wall.\n\n"),
		beer(N1)
	).

:- pred bottles(int::in, io__state::di, io__state::uo) is det.

bottles(N) -->
	( { N = 0 } ->
		io__write_string("No more bottles of beer")
	; { N = 1 } ->
		io__write_string("1 bottle of beer")
	;
		io__write_int(N),
		io__write_string(" bottles of beer")
	).```