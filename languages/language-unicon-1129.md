
## Language Unicon ##
---
- Author: Christian Meurin
- Date: 04/19/06
- Info: http
- Score:  (3.01 in 118 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-unicon-1129.html
---

```# Unicon is a "unified extended dialect" of the Icon programming language. 
# It introduces modern features such as object orientation and such.
# Unicon is the successor of Idol, an earlier attempt at Icon OOP.
# The current source code has been left alone for nearly 2 years, so
# I'm not sure if this is still in development.
#
# http://unicon.sourceforge.net/

package bottlesofbeer

$define BEERMAX 99
$define LOWBEER 1
$define NOBEER 0

class BeerSong()
   method start_chugging()
      local beercount

      beercount := BEERMAX;

      while beercount >= NOBEER do {
        # this could be slightly mistyped, but I'm not sure
        if beercount not LOWBEER then {
           write (beercount, " bottles of beer on the wall,\n");
           write (beercount, " bottles of beer.\n");
        } else {
           write ("One more bottle of beer on the wall,\n");
           write ("One more bottle of beer.\n");
        }

        write ("Take one down, pass it around,\n");

        case beercount of {
           0       : write ("No more bottles of beer on the wall.\n")
           1       : write ("One more bottle of beer on the wall.\n")
           default : write (beercount, " more bottles of beer on the wall.\n")
        }
      }

      write ("Get out of my bar yeh drunk low life!\n");
   end
end```