
## Language Oracle 9i SQL ##
---
- Author: Albert Indeev
- Date: 04/20/05
- Info: n/a
- Score:  (3.00 in 37 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-oracle-9i-sql-522.html
---

``` -- SQL (Oracle9i)
-- history from Albert Indeev
-- assa@ykt.ru
-- 29.01.2004 6:00+GMT9
-- tested on Oracle 9.2.0.4
-- used only one table - "dual" :)

select case
when  1 < 100-rownum then
  to_char(100-rownum) || ' bottles of beer on the wall,' || chr(10) ||
  to_char(100-rownum) || ' bottles of beer.' || chr(10) ||
  'Take one down, pass it around,' || chr(10) ||
  to_char( 99-rownum) || ' bottles of beer on the wall.'
when  1 = 100-rownum then
  to_char(100-rownum) || ' bottle of beer on the wall,' || chr(10) ||
  to_char(100-rownum) || ' bottle of beer.' || chr(10) ||
  'Take one down, pass it around,' || chr(10) ||
  'No more beers.'
end history
from (select 1 from dual group by cube (1,1,1,1,1,1,1)) where rownum+28 < 128;```