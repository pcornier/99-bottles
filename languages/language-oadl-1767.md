
## Language OADL ##
---
- Author: Ross Cunniff
- Date: 04/24/08
- Info: http
- Score:  (3.00 in 1 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-oadl-1767.html
---

```/* The beer song, written in OADL, (Object Action Definition Language),
 * the designated heir to ADL (Adventure Definition Language).
 *
 * Ross Cunniff, 1997
 */

/* Declare the beerWall class and its publics.  We could insert the
 * actual beerWall class implementation here if we preferred, but
 * I like top-down programming better.
 */
class beerWall;
public describe, takeOneDown, numBeers, beerProc;

/* Here is our wall o' beer (oops - #17 is bear whiz instead) */
beerWall wall {
    numBeers = 99
    beerProc = proc( n ) {
        if( n == 17 ) return "bear whiz";
        else return "beer";
    }
}

/* The actual main program.  Take 'em all down. */
proc main()
{
    /* We have 99 bottles. We want to take them all down. */
    do {
        wall.describe();
    } while( wall.takeOneDown() );
}

/*** Implementation of the beerWall class ***/
class beerWall {
    public var numBeers;  /* Initial number of beers on this wall. */
    public var beerProc;  /* Returns the type of item on the wall */
    var currBeers;        /* How many currently on the wall */

    /* Create a beerWall with a given number of beers on it. */
    public proc create()
    {
        /* Default beerproc is this anonymous proc that
         * always returns boring old beer */
        beerProc = proc() { return "beer"; };
    }

    /* Completion operator - move parameter from public var to private
     * copy */
    operator {} ()
    {
        currBeers = numBeers;
    }

    /* Describe the beer wall. */
    public proc describe()
    {
        if( currBeers > 1 ) {
            say( currBeers, " bottles of ", beerProc( currBeers ),
                 " on the wall.\n" );
            say( currBeers, " bottles of ", beerProc( currBeers ),
                 ".\n" );
        }
        else {
            say( "1 bottle of ", beerProc( currBeers ),
                 " on the wall.\n" );
            say( "1 bottle of ", beerProc( currBeers ),
                 ".\n" );
        }
    }

    /* Take a beer down from the beer wall. */
    public proc takeOneDown()
    {
        say( "You take one down, pass it around.\n" );
        currBeers -= 1;

        switch( currBeers ) {
        case 0 :
            say( "No more bottles of ", beerProc( currBeers ),
                 " on the wall.\n" );
            return 0;
        case 1 :
            say( "1 more bottle of ", beerProc( currBeers ),
                 " on the wall.\n\n" );
            return 1;
        default :
            say( currBeers, " bottles of ", beerProc( currBeers ),
                 " on the wall.\n\n" );
            return 1;
        }
    }
}```