
## Language Zim ##
---
- Author: Rodrigo Euz�bio Nunes
- Date: 05/30/05
- Info: n/a
- Score:  (2.97 in 29 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-zim-718.html
---

```%% Zim Version 7.11
%% Rodrigo Euz�bio Nunes
 
Procedure BeerSong() Local(b)
  out '99 bottles of beer on the wall'
  out '99 bottles of beer'
  out 'You take one down and pass it around'
  let b= 98
  While b > 2
    Out $Concat($Trim(b), ' bottles of beer on the wall.')
    Out ''
    Out $Concat($Trim(b), ' bottles of beer on the wall')
    Out $Concat($Trim(b), ' bottles of beer')
    Out 'You take one down and pass it around'
    let b= b-1
  EndWhile
  let b= 1
  out $Concat( $Trim(b), ' bottle of beer on the wall')
  out ''
  out $Concat( $Trim(b), ' bottle of beer')
  out 'You take one down and pass it around'
  out 'No bottles of beer on the wall!'
 
EndProcedure```