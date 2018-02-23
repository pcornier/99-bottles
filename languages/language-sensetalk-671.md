
## Language Sensetalk ##
---
- Author: Todd Nathan
- Date: 05/18/05
- Info: n/a
- Score:  (3.00 in 21 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-sensetalk-671.html
---

```#! /usr/bin/st
# Copyleft (c) 2005 by Todd Nathan
get "s"
repeat with n =  99 down to 1
	if n <= 1 then get ""
	put n & " bottle" & it & " of beer on the wall, " & n & " bottle" & it & " of beer."
	if n - 1 <= 1 then get ""
	put "Take one down, pass it around, " & n - 1 & " bottle" & it & " of beer."
end repeat
put "There's no more beeeeeeer!"```