
## Language PostgreSQL ##
---
- Author: David Eddyshaw
- Date: 04/20/05
- Info: n/a
- Score:  (2.83 in 18 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-postgresql-556.html
---

```-- PostgreSQL Version of "99 Bottles of Beer".
-- by David Eddyshaw, david@jeddyshaw.freeserve.co.uk

-- Uncomment the C-style comments if the database
-- you're using doesn't include PL/pgSQL: it's
-- wanted for the shelf-stacking function fill().

-- See http://www.postgresql.org/

\set QUIET
\pset format unaligned

/*
create function plpgsql_call_handler()
returns opaque
as '/usr/lib/pgsql/plpgsql.so' -- path depends on your setup
language 'C';

create trusted procedural language 'plpgsql'
  handler plpgsql_call_handler
  lancompiler 'PL/pgSQL';
*/

create table Bottles (rownum integer);

create function fill()
returns text
as 'begin
      for i in 1 .. 100 loop
         insert into Bottles values (i);
      end loop;
      return ''Filled the shelf.'';
    end;'
language 'plpgsql';

select fill();

create function bob(integer)
returns text
as 'select
      case when $1 = 1 then ''1 bottle of beer''
           when $1 = 0 then ''No more bottles of beer''
           else $1 || '' bottles of beer''
      end
    as result'
language 'sql';

\pset title '\n99 Bottles of Beer.\n'
select bob(100-rownum)||' on the wall,\n'||
       bob(100-rownum)||';\nTake one down and pass it around:\n'||
       bob(99-rownum) ||' on the wall.\n'
as   sing
from Bottles
where rownum < 100;

-- Be tidy: clean up
/*
drop procedural language 'plpgsql';
drop function plpgsql_call_handler();
*/
drop function bob(integer);
drop function fill();
drop table Bottles;```