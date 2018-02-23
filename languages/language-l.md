
## Language L.S.E. ##
---
- Author: Pascal Bourguignon
- Date: 04/20/05
- Info: n/a
- Score:  (3.00 in 16 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-l.s.e.-350.html
---

```Here is  a version  of of the  program in L.S.E.   (Langage Symbolique
d'Enseignement), a  French programming language used in  the 1970's on
mini-computers  (and later on  early micro-computers)  in high-schools
(Lyc�es) in France.

1*CHANSON DES 99 BOUTEILLES DE BIERE
2*PASCAL BOURGUIGNON, <PJB@INFORMATIMAGO.COM>, 2003
10 FAIRE 20 POUR N_99 PAS -1 JUSQUA 1
20 &STROF(N)
30 AFFICHER['IL EST TEMPS D''ALLER AU MAGASIN.',/]
40 TERMINER
100 PROCEDURE &STROF(N) LOCAL S1,S0;CHAINE S1,S0;S1_"S";S0_"S"
110 SI N=2 ALORS S0_"S" SINON SI N=1 ALORS DEBUT S1_"";S2_"" FIN
120 AFFICHER[U,' BOUTEILLE',U,' DE BIERE SUR LE MUR.',/]N,S1
130 AFFICHER[U,' BOUTEILLE',U,' DE BIERE.',/]N,S1
140 AFFICHER['EN PRENDRE UNE, LA FAIRE PASSER.',/]
150 AFFICHER[U,' BOUTEILLE',U,' DE BIERE SUR LE MUR.',2/]N-1,S0
160 RETOUR```