
## Language VectorScript ##
---
- Author: Paul C. Zimmerman
- Date: 04/20/05
- Info: n/a
- Score:  (2.27 in 15 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-vectorscript-165.html
---

```{ 99 Bottles of Beer in VectorScript }
{ VectorScript is the scripting language of the VectorWorks CAD package }
{ Programming by Paul C. Zimmerman (paul at lugal dot com) }

PROCEDURE beer;
VAR
	i: INTEGER;
BEGIN
	FOR i:=99 DOWNTO 2 DO
	BEGIN
		Message(i,' bottles of beer on the wall...');
		Message(i,' bottles of beer!');
		Message('You take one down, pass it around...');
		IF (i>2) THEN Message(i-1,' bottles of beer on the wall.')
		ELSE Message('1 bottle of beer on the wall.')
	END;
	Message('1 bottle of beer on the wall...');
	Message('1 bottle of beer!');
	Message('You take one down, pass it around...');
	Message('No more bottles of beer on the wall.');
END;
RUN(beer);```