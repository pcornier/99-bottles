
## Language HLA ##
---
- Author: Nathan Baker
- Date: 10/04/05
- Info: http
- Score:  (3.28 in 60 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-hla-902.html
---

```program bottles;
#include( "stdlib.hhf" )

// HLA version of the "99 Bottles of Beer" song
// Cross-platform:  Linux console or Windows console
// Get HLA here:  http://webster.cs.ucr.edu/AsmTools/HLA/index.html

begin bottles;

mov( 99, cx );
forever

    if ( cx = 1 ) then

        stdout.puts( "One bottle of beer on the wall, one bottle of beer." nl );
        stdout.puts( "Take one down and pass it around, " );
        stdout.puts( "no more bottles of beer on the wall." nl nl );
        stdout.puts( "No more bottles of beer on the wall. No more bottles of beer..." nl );
        stdout.puts( "Go to the store and buy some more... 99 bottles of beer for the wall." nl);
        break;
    
    else;
    
        stdout.puti16( cx );
        stdout.puts( " bottles of beer on the wall, " );
        stdout.puti16( cx );
        stdout.puts( " bottles of beer." nl );
        stdout.puts( "Take one down and pass it around, " );
        dec( cx );
        if ( cx = 1 ) then
            stdout.puts( "one bottle of beer on the wall." nl nl );   
        else;
            stdout.puti16( cx );
            stdout.puts( " bottles of beer on the wall." nl nl );
        endif;

    endif;

endfor;

end bottles;```