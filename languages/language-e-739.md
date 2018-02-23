
## Language e ##
---
- Author: Frank Oberhoff
- Date: 06/06/05
- Info: http
- Score:  (2.97 in 33 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-e-739.html
---

```<'
// 99 Bottles of beer
// By Frank Oberhoff

extend sys  {
   run() is also {
      for i from 99 down to 1 do {
         outf ("%0d bottles of beer on the wall,\n", i);
         outf ("%0d bottles of beer,\n", i);
         out ("Take one down and pass it around,");
         if i == 1 {
            out ("No more bottles of beer on the wall.");
            outf ("\n");
         }
         else {
            outf ("%0d bottles of beer on the wall.\n", i-1);
            outf ("\n");
         };
      };
      out ("Go to the store and buy some more");
   };
};

'>```