
## Language Slick-C ##
---
- Author: Siegfried Hirsch
- Date: 04/20/05
- Info: http
- Score:  (2.00 in 4 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-slick-c-598.html
---

```/* 99 Bottles of Beer in Slick-C
-- Slick-C is the programming language of
-- Visual Slickedit from Slickedit Inc.
-- More on http://www.slickedit.com
-- programmed by: Siegfried Hirsch, http://www.hhs.de
-- This is a new command for the editor which must
-- be loaded with the "load" command
-- Then it could be used to insert the song into
-- the current editor window with an argument of
-- the number of bottles you would like to drink.
-- CommandLine: bottles 99 <return>
*/
_command bottles(...) {
   param = arg(1);
   if (param=="" || ! isinteger(param)) {
       message('Please give number of bottles');
       return(1);
   }
   for (i = param; i > 0; i--) {
      insert_line(i ' Bottles of beer on the wall,' );
      insert_line(i ' Bottles of beer.');
      insert_line( "Take one down, pass it around,");
      if (i - 1 == 0) {
         insert_line ("Go to the store and buy some more.");
      } else {
         insert_line(i-1 " bottles of beer on the wall.");
      }
      insert_line("");
   }
}```