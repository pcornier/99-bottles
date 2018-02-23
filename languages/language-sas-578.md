
## Language SAS ##
---
- Author: Whitey
- Date: 04/20/05
- Info: n/a
- Score:  (2.89 in 9 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-sas-578.html
---

```/* SAS version of 99 bottles of beer        */
/* by Whitey (whitey@netcom.com) - 06/05/95 */

data _null_;
   do i = 99 to 1 by -1;
      put i 'bottles of beer on the wall,' i 'bottles of beer,';
      put 'take one down, pass it around,';
      j = i - 1;
      if j = 0 then
         put 'no more ' @;
      else
         put j @;
      put 'bottles of beer on the wall.';
   end;
run;```