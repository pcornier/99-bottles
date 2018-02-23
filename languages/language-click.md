
## Language click.EXE / instant.EXE ##
---
- Author: delirium
- Date: 03/28/06
- Info: http
- Score:  (2.00 in 8 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-click.exe---instant.exe-1099.html
---

```***  99 Bottles of Beer written in Click.EXE (www.clickexe.de). English equivalent can be found on
http://instantexe.com
***  Click.EXE / Instant.EXE is an easy to use drag&drop language

Anzeigefenster  '99 Bottles of Beer' (ID='info-window', zentriert, Max. m�glich)
Schleife Ab   ([beer_counter]  von 99  bis 1  Schrittweite -1)
   Setze  in [beer_left]:  '[beer_counter]-1' (berechnen)
   Wenn  Wahr: '[beer_counter]>2'
      Setze  in [beer]:  '[beer_counter] bottles of beer on the wall, [beer_counter] bottles of
beer.^MTake one down and pass it around, [beer_left] bottles of beer on the wall.^M^M' (Anh�ngen)
   Sonst  wenn Wahr: '[beer_counter]=2'
      Setze  in [beer]:  '[beer_counter] bottles of beer on the wall, [beer_counter] bottles of
beer.^MTake one down and pass it around, [beer_left] bottle of beer on the wall.^M^M' (Anh�ngen)
   Sonst  wenn Wahr: '[beer_counter]=1'
      Setze  in [beer]:  '[beer_counter] bottle of beer on the wall, [beer_counter] bottle of
beer.^MTake one down and pass it around, no more bottles of beer on the wall.^M^M' (Anh�ngen)
      Setze  in [beer]:  'No more bottles of beer on the wall, no more bottles of beer.^MGo to the
store and buy some more, 99 bottles of beer on the wall.' (Anh�ngen)
   Ende Wenn
   Anzeige-Element  Eingabe: '[beer]' (ID='beer', mehrzeilig, Schieber, Zielfenster-ID:
'info-window')
Schleife Bis
Warte  endlos...```