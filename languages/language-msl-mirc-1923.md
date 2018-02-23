
## Language mSL/mIRC ##
---
- Author: Sparkie
- Date: 11/22/08
- Info: http
- Score:  (3.00 in 3 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-msl-mirc-1923.html
---

```alias bottle {
  :Start
  var %x 99
  while (%x > 0) {
    echo -a %x bottles of beer on the Wall, %x Bottles of beer
    dec %x
    echo -a You take one down, pass it around, %x Bottles of beer
  } 
  echo -a No more bottles of beer on the wall, no more bottles of beer.
  echo -a Go to the store and buy some more, 99 bottles of beer on the wall. | Goto Start 
}

This one is never ending, once you have no bottles left, it goes back to the start.

alias bottle {
  var %x 99
  while (%x > 0) {
    echo -a %x bottles of beer on the Wall, %x Bottles of beer
    dec %x
    echo -a You take one down, pass it around, %x Bottles of beer
  } 
  echo -a No more bottles of beer on the wall, no more bottles of beer.
  echo -a Go to the store and buy some more, 99 bottles of beer on the wall. 
}

This one stops when there are no bottles left```