
## Language Linotte ##
---
- Author: Ronan
- Date: 07/20/07
- Info: http
- Score:  (3.00 in 9 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-linotte-1552.html
---

```Livre : 99 Bottles of Beer

(99 Bottles of Beer Version 1.0
 Date : 20 Juillet 2007)

Les grands r�les :
        Message est un texte avec " bottle"
        Message2 est un texte avec " of beer on the wall, "    
        Message4 est un texte avec " of beer, "
        Message7 est un texte avec "Take one down, pass it around, "

Paragraphe : d�but
    Les actions :
        De 99 � 1 , va vers la boucle
        "Go to the store, buy some more, 99 bottles of beer on the wall." !
        Termine

Paragraphe : boucle
    Les r�les :
        Message3 est un texte vide
        Message5 est un texte vide
        Bouteille est un nombre vide
    Les actions :
        Ajoute le joker dans le message3
        Ajoute le message dans le message3
        Si le joker est plus grand que 1 alors ajoute "s" dans le message3
        Ajoute le message3 dans le message5
        Ajoute le message2 dans le message3
        Ajoute le message4 dans le message5
        Ajoute le message5 dans le message3
        Affiche le message3
        Si le joker est �gal � 1 alors reviens
        Vide le message3
        Ajoute le message7 dans le message3
        Copie le joker dans la bouteille
        Soustrais 1 dans la bouteille
        Ajoute la bouteille dans le message3
        Ajoute le message dans le message3
        Si le joker est plus grand que 1 alors ajoute "s" dans le message3
        Ajoute le message4 dans le message3
        Affiche le message3        
        Reviens```