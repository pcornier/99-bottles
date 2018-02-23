
## Language AlgoBox ##
---
- Author: Jio15
- Date: 11/13/11
- Info: http
- Score:  (2.25 in 4 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-algobox-2785.html
---

```

1   VARIABLES

2     nb EST_DU_TYPE NOMBRE

3     strophe EST_DU_TYPE CHAINE

4   DEBUT_ALGORITHME

5     nb PREND_LA_VALEUR 99

6     TANT_QUE (nb>1) FAIRE

7       DEBUT_TANT_QUE

8       strophe PREND_LA_VALEUR nb.toString()+" bottles of beer on the wall, "+nb.toString()+"
bottles of beer."

9       AFFICHER strophe

10      nb PREND_LA_VALEUR nb-1

11      strophe PREND_LA_VALEUR "Take one down and pass it around, "+nb.toString()+" bottles of beer
on the wall."

12      AFFICHER strophe

13      AFFICHER " "

14      FIN_TANT_QUE

15    AFFICHER "1 bottle of beer on the wall, 1 bottle of beer."

16    AFFICHER "Take one down and pass it around, no more bottles of beer on the wall."

17    AFFICHER " "

18    AFFICHER "No more bottles of beer on the wall, no more bottles of beer."

19    AFFICHER "Go to the store and buy some more, 99 bottles of beer on the wall."

20  FIN_ALGORITHME```