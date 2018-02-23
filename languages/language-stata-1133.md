
## Language STATA ##
---
- Author: Jack Gibson
- Date: 04/23/06
- Info: http
- Score:  (2.65 in 92 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-stata-1133.html
---

```/* 99 Bottles of Beer
   By Jack Gibson.
   This is for STATA, a statistical analysis package
   with a powerful built-in programming system 

   NB. Three slashes just means "command continues on next line"

*/

set more off

foreach n of numlist 99/1 {
	if `n'==1 {
		display "1 bottle of beer on the wall, 1 bottle of beer."
		display "Take it down and pass it around, " ///
			"no more bottles of beer on the wall."
		display " "
		display "No more bottles of beer on the wall," ///
			" no more bottles of beer."
		display "Go to the store and buy some more," ///
			" 99 bottles of beer on the wall."
		display " "
	}
	else {
		if `n'==2 {
			display `n' " bottles of beer on the wall, " ///
				 `n' " bottles of beer."
			display "Take one down and pass it around," ///
				" 1 bottle of beer on the wall."
			display " "
		}
		else {
			display `n' " bottles of beer on the wall, " ///
				 `n' " bottles of beer."
			display "Take one down and pass it around, " ///
				`n'-1 " bottles of beer on the wall."
			display " "
		}
	}
}```