
## Language SQL ##
---
- Author: David Teviotdale
- Date: 09/07/05
- Info: n/a
- Score:  (2.93 in 28 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-sql-865.html
---

```select 
    CASE (a.aa * 10 + b.bb)
        WHEN 0 THEN 'No more bottle of beer on the wall, no more bottles of beer. ' +
                   'Go to the store and buy some more, 99 bottles of beer on the wall.'
        WHEN 1 THEN '1 bottle of beer on the wall, 1 bottle of beer. ' +
                    'Take one down and pass it around, no more bottles of beer on the wall.'
        WHEN 2 THEN '2 bottles of beer on the wall, 2 bottles of beer. ' +
                    'Take one down and pass it around, 1 bottle of beer on the wall.'
        ELSE 
            cast((a.aa * 10 + b.bb) as varchar(2)) + ' bottles of beer on the wall, ' +
            cast((a.aa * 10 + b.bb) as varchar(2)) + ' bottles of beer. ' +
            'Take one down and pass it around, ' +
            cast((a.aa * 10 + b.bb)-1 as varchar(2)) + ' bottles of beer on the wall.'
    END
from 
    (select 0 as aa union select 1 union select 2 union select 3 union select 4
    union select 5 union select 6 union select 7 union select 8 union select 9) a
cross join 
    (select 0 as bb union select 1 union select 2 union select 3 union select 4
    union select 5 union select 6 union select 7 union select 8 union select 9) b
order by a.aa desc, b.bb desc```