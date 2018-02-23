
## Language AL ##
---
- Author: Anonymous
- Date: 04/20/05
- Info: n/a
- Score:  (2.78 in 18 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-al-22.html
---

``` 	

bottles := 99;
OPENWINDOW('##1# bottles of beer on the wall \'+
          '##1# bottles of beer on the wall');
UPDATEWINDOW(1,bottles);
REPEAT
   OPENWINDOW('Take one down, pass it around');
   OPENWINDOW('##1# bottles of beer on the wall \'+
          '##1# bottles of beer on the wall');
   bottles := bottles -1;
   UPDATEWINDOW(1,bottles);
UNTIL bottles = 1;
OPENWINDOW('1 bottle of beer on the wall \'+
          'no more bottles of beer on the wall');
CLOSEWINDOW();```