
## Language Erlang ##
---
- Author: Kurt J. Bosch
- Date: 06/27/05
- Info: http
- Score:  (2.78 in 110 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-erlang-770.html
---

```%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%
%% erlang - 99 Bottles of Beer Song
%%
%% Advanced Edition (makes an exact last verse too ;-)
%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%
%% Kurt J. Bosch
%%
%% 2005/06/27
%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

-module(beers).
-export([sing/0]).

sing ()  -> sing(99).

sing (N) -> verse( N, N ).

% ---------------------------------------------------------------------------

% the last verse
verse( 0, Nstart ) ->
  line ( [
              num_bottles_of_beer( 0     , u_case, bottle  ),
              " on the wall. "                              ,
              num_bottles_of_beer( 0     , u_case, bottles ),
              "..."                                            ] ),
  line ( [
              "Go to the store and buy some more...",
              num_bottles_of_beer( Nstart, l_case ) ,
              "."                                              ] );

% the other verses
verse( N, Nstart ) ->
  line ( [
              num_bottles_of_beer( N     , u_case ),
              " on the wall, "                     ,
              num_bottles_of_beer( N     , l_case ),
              "."                                              ] ),
  line ( [
              "Take one down and pass it around, " ,
              num_bottles_of_beer( N-1   , l_case ),
              " on the wall."                                  ] ),

  line ( [] ),

  verse (N-1, Nstart).

% ---------------------------------------------------------------------------

line (List) ->
  io:put_chars (List),
  io:nl().

% ---------------------------------------------------------------------------

num_bottles_of_beer (1, Case) -> num_bottles_of_beer (1, Case, bottle );
num_bottles_of_beer (N, Case) -> num_bottles_of_beer (N, Case, bottles).

num_bottles_of_beer (N, Case, Bottle_s) ->
  [ num_prefix(N), bottle(N, Case), s_postfix(Bottle_s), " of beer" ].

num_prefix (0) -> "";
num_prefix (N) -> lists:concat ( [ (N), " " ] ). % integer to string

s_postfix (bottles) -> "s";
s_postfix (bottle ) -> "".

% ---------------------------------------------------------------------------

bottle       (0, Case) -> N = letter (n, Case), [ N, "o more bottle" ];
bottle       (_, Case) -> B = letter (b, Case), [ B, "ottle"         ].

letter (n, l_case) -> "n";
letter (n, u_case) -> "N";
letter (b, l_case) -> "b";
letter (b, u_case) -> "B".

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%```