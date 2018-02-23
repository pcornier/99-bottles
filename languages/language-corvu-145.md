
## Language CorVu ##
---
- Author: Anonymous
- Date: 04/20/05
- Info: http
- Score:  (2.00 in 3 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-corvu-145.html
---

```<a href=http://www.corvu.com.au>CorVu</a> is an integrated business intelligence suite
bottles = 99;

(bottles > 0)
?*
(
	text = ((bottles > 1) ? " bottles" : " bottle");
	display(bottles, text, " of beer on the wall,");
	newline();
	display(bottles, text, " of beer,");
	newline();
	display("Take one down, and pass it around,");
	newline();
	bottles = bottles - 1;
	(bottles > 0)
	?
	(
		text = ((bottles > 1) ? " bottles" : " bottle");
		display(bottles, text, " of beer on the wall.")
	)
	:
	(
		display("No more bottles of beer on the wall.")
	);
	newline(2)
);

display("No more bottles of beer on the wall,");
newline();
display("No more bottles of beer,");
newline();
display("Go to the store and buy some more,");
newline();
display("99 bottles of beer on the wall.");
newline()```