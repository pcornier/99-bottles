
## Language Inger ##
---
- Author: Alex van Oostenrijk
- Date: 04/20/05
- Info: http
- Score:  (2.94 in 16 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-inger-331.html
---

```/*
 * 99 bottles of beer in Inger
 * (http://inger.sourceforge.net)
 *
 * by Alex van Oostenrijk: atrox [@] zebra [.] uem [.] mz
 *
 */

module bottles;

#include "stdio.ih"

void say: int bottles -> void
{
    switch( bottles )
    {
        case 0
        {
            printf( "No more bottles" );
        }
        case 1
        {
            printf( "One bottle" );
        }
        default
        {
            printf( bottles ); 
            printf( "bottles" );
        }
    }
}
  
start beer: void -> void 
{
    int bottles = 99;

    while( bottles > 0 ) do
    {
        say( bottles );
        printf( " of beer on the wall,\n" );
        say( bottles );
        printf( " of beeeeer . . .,\n" );
        printf( "Take one down, pass it around,\n" );
        bottles = bottles - 1;
        say( bottles );
        printf( " of beer on the wall,\n" );
        say( bottles );
        printf( " of beeeeer . . .,\n\n" );
    }

    printf( "\nTime to buy more beer!\n" );
}```