
## Language Cool ##
---
- Author: Kirsten Chevalier
- Date: 04/20/05
- Info: http
- Score:  (3.00 in 3 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-cool-144.html
---

```-- Cool, a language used for teaching compilers
-- http://www.cs.berkeley.edu/~aiken/cool/

-- By Kirsten Chevalier -- krc AT cs DOT berkeley DOT edu

class Beer inherits IO {

  numberOfBeers : Int <- 99;

  song () : Object {
   if (numberOfBeers = 0) then
      out_string("Time to buy more beer!\n")
   else
     {
       out_int(numberOfBeers);
       out_string(" bottles of beer on the wall,\n");
       out_int(numberOfBeers);
       out_string(" bottles of beer\nTake one down, pass it around\n");
       out_int(numberOfBeers);
       out_string(" bottles of beer on the wall.\n");
       numberOfBeers <- numberOfBeers - 1;
       song();
     }
   fi
  };

};

class Main {

  main () : Object {
   (new Beer).song()
  };

};```