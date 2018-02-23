
## Language CSP ##
---
- Author: Werner Renhardt
- Date: 04/20/05
- Info: n/a
- Score:  (2.78 in 9 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-csp-148.html
---

```-- CSP - Version of 99 Bottles of Beer
-- uses output of FDR2 refinement checker
-- by Werner Renhardt werner@kangaroo.at
-- 12/05/2002
-- 
-- execute: fdr batch -trace beer99.csp > beer99.txt

datatype Text = bottles_of_beer_on_the_wall | bottles_of_beer |
                bottle_of_beer_on_the_wall | bottle_of_beer
nametype Text2 = {0..99}.Text

channel Still : Text2
channel So : Text2
channel Go_to_the_store_and_buy_some_more
channel Take_one_down_and_pass_it_around
channel No_more_bottles_of_beer_on_the_wall
channel No_more_bottles_of_beer


BEERCRATE(0) = No_more_bottles_of_beer_on_the_wall ->
	       No_more_bottles_of_beer ->
	       Go_to_the_store_and_buy_some_more
	        -> STOP

BEERCRATE(1) = Still!1.bottle_of_beer_on_the_wall -> 
               Still!1.bottle_of_beer -> 
               Take_one_down_and_pass_it_around ->
	       No_more_bottles_of_beer_on_the_wall ->
               BEERCRATE(0)

BEERCRATE(n) = Still!n.bottles_of_beer_on_the_wall -> 
               Still!n.bottles_of_beer -> 
               Take_one_down_and_pass_it_around ->
	       So!(n-1).bottles_of_beer_on_the_wall ->
               BEERCRATE(n-1)

BEER99 = BEERCRATE(99)

-- a deadlock occurs after emptying 99 beers ( -> STOP)
-- and the corresponding trace will be delivered as output

assert BEER99 :[ deadlock free [F] ]


---------- snip ---------

Part of the output beer99.txt
---------
Checking beer99.csp
xfalse
BEGIN TRACE example=0 process=0
Still.99.bottles_of_beer_on_the_wall
Still.99.bottles_of_beer
Take_one_down_and_pass_it_around
So.98.bottles_of_beer_on_the_wall
Still.98.bottles_of_beer_on_the_wall
...
...
So.1.bottles_of_beer_on_the_wall
Still.1.bottle_of_beer_on_the_wall
Still.1.bottle_of_beer
Take_one_down_and_pass_it_around
No_more_bottles_of_beer_on_the_wall
No_more_bottles_of_beer_on_the_wall
No_more_bottles_of_beer
Go_to_the_store_and_buy_some_more
END TRACE example=0 process=0
---------```