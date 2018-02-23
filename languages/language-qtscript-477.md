
## Language QtScript ##
---
- Author: Anonymous
- Date: 04/20/05
- Info: n/a
- Score:  (2.96 in 23 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-qtscript-477.html
---

```// implementation of 99 bottles of beer using QtScript,
// The ECMAScript 4.0 based langauge used in Qt Script for Applications (QSA).

var beers = 99;

function takeOne() { 
    print( "take one down, pass it around" );
    --beers;
}

function sing(on_the_wall) {
    print( beers + " bottles of beer" + on_the_wall );
}

while (beers>=1) {
    sing( " on the wall!!" );
    sing( "!!" );
    takeOne();
    sing( " on the wall!!" );
}```