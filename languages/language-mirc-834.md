
## Language mIRC ##
---
- Author: IceShaman
- Date: 08/11/05
- Info: http
- Score:  (2.90 in 10 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-mirc-834.html
---

```alias beer {
  var %x = 99, %phrase = bottles of beer on the wall, %phrase2 = Take one down and pass it around
  while ($calc(%x + 1)) {
    var %y = $iif(%x,%x,No more), %z = $remove(%phrase,$iif(%x == 1,s))
    echo $+(,%y) %z $+ , $lower(%y) $gettok(%z,1-3,32) $+ . | dec %x
    if ($calc(%x + 1) > 0) { 
      echo %phrase2 $+ , $lower($iif(%x,%x,No more)) $+($remove(%phrase,$iif(%x == 1,s)),.) 
      echo $+(,$chr(160))
    }
    else { echo Go to the store and buy some more, 99 $+(%phrase,.) | return }    
  }
}```