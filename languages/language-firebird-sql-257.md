
## Language Firebird SQL ##
---
- Author: Jim Dunleavy
- Date: 04/20/05
- Info: http
- Score:  (3.02 in 85 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-firebird-sql-257.html
---

```/*
 * beer_song.sql - 99 Bottles of Beer in Firebird relational database SQL
 * Firebird is at firebird.sourceforge.net
 * Author: Jim Dunleavy <jim.dunleavy@ehss.ie>
 * 2003-11-27
 */

set term !!;

create procedure bottles_beer(bottles integer)
  returns(text varchar(30)) as
begin
  if (bottles > 0) then
    text = bottles;
  else
    text = 'no more';
  text = text || ' bottle';
  if (bottles <> 1) then
    text = text || 's';
  text = text || ' of beer';
  suspend;
end!!

create procedure beer_song
  returns(line varchar(60)) as
declare variable bottles integer;
declare variable bottles_beer varchar(30);
begin
  bottles = 99;
  select text from bottles_beer(:bottles) into :bottles_beer;
  while (bottles > 0) do
  begin
    line = bottles_beer || ' on the wall, ' || bottles_beer || ',';
    suspend;
    line = 'Take one down, pass it around,';
    suspend;
    bottles = bottles - 1;
    select text from bottles_beer(:bottles) into :bottles_beer;
    line = bottles_beer || ' on the wall.';
    suspend;
  end
end!!

set term ;!!

/* Print it out */
select line from beer_song;

/* cleanup */
drop procedure beer_song;
drop procedure bottles_beer;```