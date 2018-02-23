
## Language promela ##
---
- Author: Nicolas Marti
- Date: 10/14/05
- Info: http
- Score:  (3.75 in 4 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-promela-915.html
---

```
int nb_bottle;

proctype Singer() {

	
	do
	:: 
		if
		:: nb_bottle > 1 -> printf ("%d bottles of beer on the wall, %d bottles of beer.\n Take one down
and pass it around, %d bottles of beer on the wall.\n", nb_bottle,nb_bottle,nb_bottle - 1);
nb_bottle --;
		:: nb_bottle == 1 -> printf ("1 bottles of beer on the wall, 1 bottles of beer.\n Take one down
and pass it around, no more bottles of beer on the wall.\n"); nb_bottle --;
		:: nb_bottle == 0 -> printf ("No more bottle of beer on the wall, no more bottles of beer.\n Go to
the store and buy some more, 99 bottles of beer on the wall.\n");
			break;
		fi;
	
	od;

};


init { 
	nb_bottle = 99;	
	run  Singer(); 
}```