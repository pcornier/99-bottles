
## Language mIRC ##
---
- Author: coolpix
- Date: 05/13/05
- Info: http
- Score:  (2.97 in 32 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-mirc-646.html
---

```alias beer {
  var %x 99
  while (%x > 0) {
    echo  %x Bottles of beer on the wall, %x bottles of beer
    echo  Take one down and pass it around,
    dec %x
    echo  %x bottles of beer on the wall.
    echo  $chr(160)
  }
  echo No more bottles of beer on the wall.
  echo No more bottles of beer...
}```