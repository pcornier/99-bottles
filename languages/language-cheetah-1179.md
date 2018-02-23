
## Language Cheetah ##
---
- Author: Ilan Schnell
- Date: 06/10/06
- Info: http
- Score:  (2.33 in 3 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-cheetah-1179.html
---

```#*
 *        Author: Ilan Schnell
 *
 *   Description: Fully compliant (including last verse) version of
 *                99 Bottles of Beer.
 *
 *           Run: cheetah fill beer.tmpl
 *
 *  More details: http://cheetahtemplate.org/
 *#
#for $n in range(99,0,-1)
$beers($n) on the wall, $beers($n).
Take one down and pass it around, $beers($n-1) on the wall.

#end for
No more bottles of beer on the wall, $beers(0).
Go to the store and buy some more, $beers(99) on the wall.
#def beers($n)
  #if $n==0
no more bottles#slurp
  #else
    #set $s = n != 1 and 's' or ''
$n bottle$s#slurp
  #end if
 of beer#slurp
#end def```