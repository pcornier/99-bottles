
## Language Erlang ##
---
- Author: H�kan Stenholm
- Date: 01/23/06
- Info: http
- Score:  (2.81 in 26 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-erlang-1031.html
---

```-module(bottle).

%% only the 0 argument version of song(...) can be called by other modules
-export([song/0]).

%% macros to reduce function name length
-define(dup, lists:duplicate).
-define(i2l, integer_to_list).


%% initiate the bottle count
song() ->
    song(99).



%% base case of the recursion (bottles = 0), print the special second line message
song(0) ->
    first_line(0),
    io:format("Go to the store and buy some more, 99 bottles of beer on the wall.\n");
%% no. of bottles still > 0, print the usual second line
song(N) ->
    first_line(N),
    %% only use the lower case bottle(...) return value
    io:format("Take one down and pass it around, ~s of beer on the wall.~n~n", tl(bottle(N-1))),
    song(N-1).



%% prints the top line
first_line(N) -> 
    io:format("~s of beer on the wall, ~s of beer.~n", bottle(N)).



%% return both upper and lower case versions in a list, this makes them directly suitable
%% as arguments to the print function - io:format(...)
bottle(N) ->
    case N of
	0 -> ["No more bottles", "no more bottles"];
	1 -> ?dup(2, "1 bottle");
	N -> ?dup(2, ?i2l(N) ++ " bottles")
    end.```