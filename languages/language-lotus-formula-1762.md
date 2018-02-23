
## Language Lotus Formula ##
---
- Author: Labberdasher
- Date: 04/15/08
- Info: http
- Score:  (3.50 in 4 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-lotus-formula-1762.html
---

```x0 := "9.8.7.6.5.4.3.2.1.0." ;
x1 := @text( @texttonumber( @explode( @repeat( @explode( x0 ; "." ) + "." ; 10 ) ; "." ) + @explode(
@repeat( x0 ; 10 ) ; "." ) ) ) ;
bt := " bottle" ;
bb := bt + "s of beer" ;
ow := " on the wall" ;
td := "Take one down and pass it around, " ;
nl := @newline ;
x21 := bb + ow + ", " ;
x22 := bb + "." + nl + td ;
x23 := bb + ow + "." + nl ;
x3 := @implode( x1 + x21 + x1 + x22 + @text( @texttonumber( x1 ) - 1 ) + x23 ; nl ) ;
@replacesubstring( x3 ; ( ( nl : " " ) + "1" + bt + "s" ) : ( ( nl : " " ) + "0" ) : ( td + "-1" ) ;
 ( ( nl : " " ) + "1" + bt ) : ( nl + "No more" ) : ( " no more" ) : ( "Go to the store and buy some
more, 99" ) )```