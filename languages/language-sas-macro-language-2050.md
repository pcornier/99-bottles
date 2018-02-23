
## Language SAS Macro Language ##
---
- Author: Mauro Rospocher
- Date: 04/16/09
- Info: http
- Score:  (3.01 in 78 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-sas-macro-language-2050.html
---

```/* SAS Macro Language 8.2       */
/* Recursive SAS Macro solution */ 

%macro bottiglieSong(bottiglie);
 %local resto;
 %let resto=%eval(&bottiglie-1);
 %put &bottiglie bottles of beer on the wall, &bottiglie bottles of beer.;
 %put Take one down and pass it around, &resto bottles of beer on the wall.;
 %put ;
 %if &bottiglie > 2 %then %bottiglieSong(&resto);
 %else %do;
   %put 1 bottle of beer on the wall, 1 bottle of beer.;
   %put Take one down and pass it around, no more bottles of beer on the wall.;
   %put ;
   %put No more bottles of beer on the wall, no more bottles of beer.;
   %put Go to the store and buy some more, 99 bottles of beer on the wall.;
 %end;
%mend bottiglieSong;

/* the macro call */

%bottiglieSong(99)```