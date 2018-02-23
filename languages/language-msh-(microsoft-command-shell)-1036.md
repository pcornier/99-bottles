
## Language MSH (Microsoft Command Shell) ##
---
- Author: Danko Durbic
- Date: 01/30/06
- Info: http
- Score:  (3.00 in 10 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-msh-(microsoft-command-shell)-1036.html
---

```#
# 99 bottles of beer
# MSH (Microsoft Command Shell) (beta 3) version
# 
# Author: Danko Durbic
# Date: 2006-01-30

function bottle( $num )
{
	"$( ( $num, 'no more' )[ $num -eq 0 ] ) $( ( 'bottle', 'bottles' )[ $num -ne 1 ] )"
}

( 99..1 ) | 
foreach { "$( bottle( $_ ) ) of beer on the wall, $( bottle( $_ ) ) of beer.`r`n" +
		  "Take one down and pass it around, $( bottle( $_ - 1 ) ) of beer on the wall.
		  " }
								  
"No more bottles of beer on the wall, no more bottles of beer."
"Go to the store and buy some more, 99 bottles of beer on the wall."```