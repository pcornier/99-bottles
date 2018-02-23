
## Language SQL ##
---
- Author: Thomas Rein
- Date: 02/03/07
- Info: n/a
- Score:  (2.50 in 4 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-sql-1389.html
---

```SELECT
CASE bottels
WHEN 0 THEN
'No more bottle of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99
bottles of beer on the wall.'
ELSE
bottels || ' ' || thebar || ' ' || lessbottels
END
FROM
(SELECT rownum -1 bottels,
   decode(rownum,    1,    'bottle', 2, 'bottle',   'bottles') || ' of beer on the wall ' ||
to_char(rownum -1) thebar,
   decode(rownum,    1,    'bottle', 2, 'bottle',   'bottles') || ' of beer. Take one down and pass
it around, ' || decode(to_char(rownum -2),    0,    NULL,    to_char(rownum -2)) || ' ' ||
decode(rownum -2,    0,    'no more bottles', 1, 'bottle',   'bottles') || ' of beer on the wall.'
lessbottels
 FROM dba_objects
 WHERE rownum < 101
 ORDER BY 1 DESC)
/```