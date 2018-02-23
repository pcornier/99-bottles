
## Language GeneXus ##
---
- Author: Enrique Almeida
- Date: 05/30/05
- Info: http
- Score:  (3.00 in 30 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-genexus-706.html
---

```/* *******************************************
99 beers
Written by Enrique Almeida
GeneXus 8.0 - Generated in C# - Console Application.
****************************************** */

&Bottles=99
do while &Bottles > 0
 
    do 'Bottles'
    Msg(&BottlesTXT+ "of beer on the Wall, " + &BottlesTXT+ "of beer,"  , status)
    
    &Bottles=&Bottles-1
    do 'Bottles'
    Msg("take one down, pass it around, " + &BottlesTXT+ "of beer on the wall." , status)
    Msg(NewLine(),status)
    
 enddo
 Msg("No more bottles of beer on the wall. No more bottles of beer...", status)
 Msg("Go to the store and buy some more...99 bottles of beer." , status)
 return
//**************************************


// Check if use bottle or bottles
 sub 'Bottles'
 If &Bottles > 1
    &BottlesTXT=str(&Bottles,2) + " bottles "
 else
     If &Bottles = 1
        &BottlesTXT=str(&Bottles,2) + " bottle "
     else
        &BottlesTXT="No more bottles "
     endif
 endif
 endsub```