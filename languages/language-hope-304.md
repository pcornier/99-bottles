
## Language Hope ##
---
- Author: Wolfgang Lohmann
- Date: 04/20/05
- Info: http
- Score:  (2.93 in 15 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-hope-304.html
---

```<a href=http://www-ala.doc.ic.ac.uk/~rap/Hope/>Click</a> for more information.

! Hope Version of 99 Bottles of Beer : RAM-Biter!!!
! Tested on a SPARC classic, SunSolaris 2 
! Programmer: Wolfgang Lohmann   wlohmann@informatik.uni-rostock.de
 
dec app  :( list ( char ) X list ( char )) -> list ( char ) ;
dec i2c  : num -> char;
dec i2s  : num -> list(char);
dec beer : num -> list(char);

--- app ( nil , w )
       <= w  ;
--- app (( a  ::  v ), w )
       <=( a  ::  app ( v , w )) ;

--- i2c(0) <= '0';
--- i2c(1) <= '1';
--- i2c(2) <= '2';
--- i2c(3) <= '3';
--- i2c(4) <= '4';
--- i2c(5) <= '5';
--- i2c(6) <= '6';
--- i2c(7) <= '7';
--- i2c(8) <= '8';
--- i2c(9) <= '9';

--- i2s(x) <= if x < 10 then [i2c(x)] else
				app(i2s(x div 10), i2s( x mod 10)); 

--- beer(x) <= if x = 1 then app( i2s(x), 
				" bottle of beer. No more beer on the wall.")
                	else app( app( app( app( app( 
				i2s(x), 
				" bottles of beer on the wall, "),
				i2s(x)), 
				" bottles of beer. "),
				"Take one down, pass it around. "), 
				beer(y))
                        where y== x-1;```