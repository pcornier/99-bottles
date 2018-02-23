
## Language PAL ##
---
- Author: Kim Moser
- Date: 04/20/05
- Info: n/a
- Score:  (3.00 in 12 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-pal-528.html
---

```PAL is Prodigy Application Language. I listed this one as unique simply 
because you don't often get a peek at a truly proprietary language.  
This can't be compiled by anyone other than Prodigy employees.

/*=========================================================================*/
/*                                                                         */        
/*                       PRODIGY SERVICES COMPANY                          */
/*                                                                         */
/*  Author:        Kim Moser (kmoser@prodigy.com)                          */
/*  Application:   99 Bottles of Beer on the Wall                          */
/*  Program Name:  XXXXBEER.PGM                                            */
/*  Program Type:  Element preprocessor                                    */
/*  File Name:     xxxxbeer.s                                              */
/*  Version:       0.0                                                     */
/*  Contents:      PAL                                                     */                       
         
/*=========================================================================*/
/* PROGRAM DESCRIPTION: This function fills PEVs 10-110 with 99 verses     */
/*  of the "99 Bottles of Beer on the Wall" song (one verse per PEV),      */
/*  appends these verses to the file whose name was given in P1 (the       */
/*  first parameter), then opens a window warning you to buy more beer.    */
/*                                                                         */
/*  The program is smart enough to pluralize "beer" when refering to       */
/*  more than one, and says "no" when refering to 0 bottles.               */
/*                                                                         */
/*  The output is as follows:                                              */
/*  99 bottles of beer on the wall, 99 bottles of beer.                    */
/*  Take one down, pass it around, 98 bottles of beer on the wall.         */
/*  ...                                                                    */
/*  1 bottle of beer on the wall, 1 bottle of beer.                        */
/*  Take one down, pass it around, no bottles of beer on the wall.         */
/*  Time to buy more beer!                                                 */
/*                                                                         */
/*-------------------------------------------------------------------------*/
/* MAINTENANCE LOG:                                                        */
/*  PROGRAMMER        DATE        DESCRIPTION OF CHANGE                    */
/*   Kim Moser      23-Oct-96      Creation.                               */
/*=========================================================================*/

#define DISPLAY_PEV  10

#define Q_CTX_NAME "beer_ctx"
context beer_ctx {
    var
    ctx_fp,                /* File pointer: where to write the song */
    ctx_bottle,            /* " bottle" */
    ctx_bottle_of_beer,    /* " bottle of beer" */
    ctx_bottles_of_beer,   /* " bottles of beer" */
    ctx_on_the_wall;       /* " on the wall" */
}

#define DEFAULT_FNAME    "beer.txt"

"XXXXBEERPGM{CODE}0{CODE}C"(var fname)
{
    var i;
    var of_beer;
    var sentence;

    if (open_one_context(Q_CTX_NAME) > 1) {
        /* Error opening context */
        return (-1);
    }

    /* Initialize context: */
    /* Reduce string overhead by putting these phrases in variables: */
    of_beer = " of beer";
    ctx_bottle = " bottle";
    ctx_bottle_of_beer = string(ctx_bottle, of_beer);
    ctx_bottles_of_beer = string(ctx_bottle, "s", of_beer);
    ctx_on_the_wall = " on the wall";

    if (fname ==$ "") {
        /* No filename specified */
        fname = DEFAULT_FNAME;
    }

    if (open(fname, F_APPEND, ctx_fp) == 0) {
        for (i=99; i > 0; i-=1) {
            sentence = bottles_sentence(i);

            &0[DISPLAY_PEV + (100-i)] = sentence;
            write_line(ctx_fp, sentence);
        }
        write_line(ctx_fp, "Time to buy more beer!\n");
        close(ctx_fp);
    }

    close_all_contexts(Q_CTX_NAME);

    open_window("XXXXBEERWND{CODE}0{CODE}E");  /* Warning: Time to buy more beer */
}

bottles_sentence(var n_bottles)
{
    var bob1, bob2; /* " bottles of beer" or " bottle of beer" */

    bob1 = bob(n_bottles);
    bob2 = bob(n_bottles - 1);

    return (
        string(
            n_bottles,
            bob1,
            ctx_on_the_wall,
            ", ",
            n_bottles,
            bob1,
            ".\nTake one down, pass it around, ",
            (n_bottles-1 ? n_bottles-1 : "no"),
            bob2,
            ctx_on_the_wall,
            "."
        )
    );
}

bob(var n_bottles)
{
    return (n_bottles==1 ? ctx_bottle_of_beer : ctx_bottles_of_beer);
}```