
## Language GProlog ##
---
- Author: Paul J. DeMarco
- Date: 04/20/05
- Info: n/a
- Score:  (3.11 in 363 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-gprolog-293.html
---

```/*******************************************************
 * 99 Bottles of Beer
 * Paul J. DeMarco  9/20/2002
 * beer.pro
 * To execute start gprolog (others may work)
 * consult('beer.pro').
 * drink(beer,99).
 *******************************************************/
english(beer,0):-
                        write('no more bottle of beer').
english(beer,1):-
                        write('1 bottle of beer').
english(beer,X):-
                        X >= 2,
                        write( X ) ,
                        write(' bottles of beer').
 
drink(beer,X):- X >= 1,
                        english(beer,X),
                        write(' on the wall, '),
                        english(beer,X),
                        write(', take one down, pass it around\n'),
                        X1 is X - 1,
                        english(beer,X1),
                        write(' on the wall.\n'),
                        drink(beer, X1).```