
## Language PL/PGSQL ##
---
- Author: Daivd Bitner
- Date: 01/10/06
- Info: http
- Score:  (2.00 in 6 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-pl-pgsql-1011.html
---

```CREATE OR REPLACE FUNCTION ninetyninebottles()
  RETURNS "varchar" AS
$BODY$declare
nbottles int4;
begin
nbottles := 99;
loop
	if (nbottles > 1) then
		raise notice '% bottles of beer on the wall, % bottles of beer.',nbottles,nbottles;
		nbottles := nbottles-1;
		raise notice 'Take one down, pass it around, % bottles of beer on the wall.',nbottles;
	else 
		raise notice '1 bottle of beer on the wall, 1 bottle of beer.';
		raise notice 'Take one down, pass it around, no more bottles of beer on the wall.';
		return 'Burp';
	end if;
end loop;
return 'burp';
end;$BODY$
  LANGUAGE 'plpgsql' VOLATILE;```