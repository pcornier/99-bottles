
## Language zmud scripting language ##
---
- Author: Jennifer Polen
- Date: 07/07/05
- Info: http
- Score:  (2.97 in 32 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-zmud-scripting-language-786.html
---

```beers=99
#while (@beers>0) {
  say @beers %if( @beers<2, bottle, bottles) of beer on the wall!
  #alarm +2 {say @beers %if( @beers<2, bottle, bottles) of beer.}
  #alarm +4 {
    #add beers -1
    say Take one down, pass it around.
    }
  #alarm +6 {say %if( @beers=0, No more, @beers) %if( @beers=1, bottle,
    bottles) of beer on the wall!}
  #wait 10000
  }```