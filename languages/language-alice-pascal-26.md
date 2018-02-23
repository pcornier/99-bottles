
## Language Alice Pascal ##
---
- Author: Anonymous
- Date: 04/20/05
- Info: http
- Score:  (2.56 in 18 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-alice-pascal-26.html
---

```program Bottles(input, output);
{ Alice Pascal version of 99 Bottles of beer (Bottles.ap) } 
{ See http://www.templetons.com/brad/alice.html           }
{ Philipp Winterberg, http://www.winterbergs.de           } 
var
	b : Byte;

begin
b := 99;
repeat
	writeln(b:2, ' bottle(s) of beer on the wall,');
	writeln(b:2, ' bottle(s) of beer');
	writeln('Take one down, pass it around,');
	b := b - 1;
	writeln(b:2, ' bottle(s) of beer on the wall.');
	writeln('');
until b = 0;
end.```