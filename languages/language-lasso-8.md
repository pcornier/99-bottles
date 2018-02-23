
## Language Lasso 8.1 ##
---
- Author: Chris Corwin
- Date: 05/24/06
- Info: http
- Score:  (4.00 in 3 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-lasso-8.1-1164.html
---

```[//lasso 

	
	local(
		'no_of_bottles'   = 99,
		'out'          = string,
		);
		
	while(boolean(#no_of_bottles));
		#out += '<p>';
		#out += #no_of_bottles ' bottle' (#no_of_bottles != 1 ? 's') ' of beer on the wall,<br />';
		#out += #no_of_bottles ' bottle' (#no_of_bottles != 1 ? 's') ' of beer;<br />';
		#out += 'Take one down, pass it around,<br />' (--#no_of_bottles)  ' bottle' (#no_of_bottles != 1
? 's') ' of beer on the wall.';
		#out += '</p>';
	/while;
	
	#out;

]```