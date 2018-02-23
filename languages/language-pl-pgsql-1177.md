
## Language PL/PGSQL ##
---
- Author: Luis Carlos F. Dias
- Date: 06/08/06
- Info: n/a
- Score:  (2.97 in 30 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-pl-pgsql-1177.html
---

```create or replace function BottlesOfBeerSong () returns SETOF text
as '
declare
  i integer := 99 ;
  out1 text := '''' ;
  out2 text := '''' ;
begin
  while (i >= 0) loop
    out1 := i || '' bottles of beer on the wall, '' || i || '' bottles of beer.''  ;

    if (i > 2) then 
      out2 := ''Take one down and pass it around, '' || i-1 || '' bottles of beer on the wall.'' ;
    elsif (i = 2) then
      out2 := ''Take one down and pass it around, 1 bottle of beer on the wall.'' ;
    elsif (i = 1) then
      out1 := ''1 bottle of beer on the wall, 1 bottle of beer.''  ;
      out2 := ''Take one down and pass it around, no more bottles of beer on the wall.'' ;
    elsif (i = 0) then
      out1 := ''No more bottles of beer on the wall, no more bottles of beer.''  ;
      out2 := ''Go to the store and buy some more, 99 bottles of beer on the wall.'' ;
    end if ;

    return next out1 ;
    return next out2 ;
    i := i - 1 ;
  end loop ;

  return ;
end ;
'
language 'plpgsql' ;

select * from BottlesOfBeerSong() ;```