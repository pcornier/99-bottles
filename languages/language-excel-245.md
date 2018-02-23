
## Language Excel ##
---
- Author: AMi
- Date: 04/20/05
- Info: n/a
- Score:  (1.00 in 2 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-excel-245.html
---

```/*26.09.2002 by AMi  <mailto:amiundyvonne@web.de*/> amiundyvonne@web.de*/
/*Used german Excel-version: WENN means IF, ZEILE means ROW            */

=WENN(ZEILE(A1)<100;100-ZEILE(A1) & " bottles of beer on the wall, " &
100-ZEILE(A1) & " bottles of beer, take one down and pass it
around,";WENN(ZEILE(A1)=100;"no more bottles of beer on the wall, no more
bottles, go to the store and by some more, 99 bottles of beer";""))```