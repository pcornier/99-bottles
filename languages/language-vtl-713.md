
## Language VTL ##
---
- Author: Filipe Pinto
- Date: 05/30/05
- Info: http
- Score:  (2.33 in 12 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-vtl-713.html
---

```##Apache Jakarta Velocity Template Language (VTL)
#foreach( $beers in [99..0] )
    #if($beers = = 1)
        $beers bottle of beer on the wall, $beers bottle of beer,
    #else
        $beers bottles of beer on the wall, $beers bottles of beer,
    #end

    #if($beers = = 0)
        Go to the store, buy some more, 99 bottles of beer on the wall.
    #else
        #set($temp = $beers - 1)
        #if($temp = = 1)
            Take one down, pass it around, $temp bottle of beer on the wall.
        #else
            Take one down, pass it around, $temp bottles of beer on the
wall.
        #end
    #end
#end```