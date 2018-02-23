
## Language CHR ##
---
- Author: Peter Van Weert
- Date: 10/16/06
- Info: http
- Score:  (3.02 in 126 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-chr-1303.html
---

```package examples.beer;

import static util.arithmetics.primitives.intUtil.*;

/**
 * <p>
 * 99 bottles of beer, K.U.Leuven JCHR version.
 * tested in version 1.5.1 of the 
 * <a href="http://www.cs.kuleuven.be/~petervw/JCHR/">K.U.Leuven JCHR System</a>
 * </p>
 * <p>
 * Ported from the CHR(Prolog) version written by Jon Sneyers.
 * </p>
 *
 * @author Peter Van Weert
 */
public handler beer {

    public constraint main;
    
    private constraint beer(int), bottle, sing,
                capital, bottles, ofbeer, onwall, comma,
                take_one, dotnl,
                bottle_count, bottles1(int), writeresult;
                
    private constraint write(String), nl;
    
    rules {
        // make 99 bottles and start singing
        main <=> beer(99), sing.

        // make N bottles
        makebottle @ beer(N) <=> N > 0 | bottle, beer(dec(N)).
        endloop    @ beer(_) <=> true.

        // stop singing if we're already singing
        // (change to simpagation rule to make the song infinite)
        sing, sing <=> true.

        // sing two lines
        sing ==> capital, bottles, ofbeer, onwall, comma, bottles, ofbeer, dotnl,
                 take_one, comma, bottles, ofbeer, onwall, dotnl, nl.

        // if we're still singing: sing again
        sing <=> sing.

        // take one bottle down
        take_one, bottle <=> write("Take one down and pass it around").

        // no more bottles: go to the store and start again
        take_one <=> write("Go to the store and buy some more"), main.

        // print how many bottles there are in the store
        bottle, bottle \ bottles <=> bottle_count, write(" bottles").
        bottle \ bottles  <=> write("1 bottle").
        capital, bottles <=> write("No more bottles").
        bottles <=> write("no more bottles").

        // count the number of bottles in the store
        bottle_count, bottle ==> bottles1(1).
        bottle_count <=> writeresult.
        bottles1(X), bottles1(Y) <=> bottles1(add(X,Y)).
        writeresult, bottles1(N) <=> write(String.valueOf(N)).

        // write stuff
        onwall <=> write(" on the wall").
        ofbeer <=> write(" of beer").
        dotnl <=> write("."), nl.
        comma \ capital <=> true.
        comma <=> write(", ").
        
        // to ease porting from Prolog version
        write(X) <=> System.out.print(X);
        nl <=> System.out.println();
    }
}```