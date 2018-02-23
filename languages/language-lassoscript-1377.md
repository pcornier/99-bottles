
## Language LassoScript ##
---
- Author: Sage Statham
- Date: 01/21/07
- Info: http
- Score:  (2.90 in 10 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-lassoscript-1377.html
---

```<?LassoScript
	loop: -from = 99, -to = 0, -by = -1;
		if: (loop_count) > 1;
			loop_count + ' bottles of beer on the wall<BR>';
			loop_count + ' bottles of beer!<BR>';
			'You take one down, pass it around!<BR>';
		else: loop_count == 1;
			loop_count + ' bottle of beer on the wall<BR>';
			loop_count + ' bottle of beer!<BR>';
			'You take it down, pass it around!<BR>';
		else: loop_count == 0;
			'No bottles of beer on the wall<BR>';
			'No bottles of beer!<BR>';
			'You go to the store, gets some more, 99 bottles of beer on the wall!<BR>';
		/if;
		'<BR>';
	/loop;
?>```