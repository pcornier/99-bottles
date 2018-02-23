
## Language SQL ##
---
- Author: Chris Farmer
- Date: 11/10/05
- Info: n/a
- Score:  (2.89 in 27 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-sql-935.html
---

```select
    CASE (a.aa * 10 + b.bb)
        WHEN 0 THEN 'No more bottle of beer on the wall, no more bottles of beer. ' ||
                   'Go to the store and buy some more, 99 bottles of beer on the wall.'
        WHEN 1 THEN '1 bottle of beer on the wall, 1 bottle of beer. ' ||
                    'Take one down and pass it around, no more bottles of beer on the wall.'
        WHEN 2 THEN '2 bottles of beer on the wall, 2 bottles of beer. ' ||
                    'Take one down and pass it around, 1 bottle of beer on the wall.'
        ELSE
            to_char(a.aa * 10 + b.bb) || ' bottles of beer on the wall, ' ||
            to_char(a.aa * 10 + b.bb) || ' bottles of beer. ' ||
            'Take one down and pass it around, ' ||
            to_char((a.aa * 10 + b.bb)-1) || ' bottles of beer on the wall.'
    END
from
    (select 0 aa from dual 
	union select 1 from dual 
	union select 2 from dual 
	union select 3 from dual 
	union select 4 from dual 
	union select 5 from dual 
	union select 6 from dual 
	union select 7 from dual
	union select 8 from dual 
	union select 9 from dual ) a,
    (select 0 bb from dual 
	union select 1 from dual  
	union select 2 from dual  
	union select 3 from dual 
	union select 4 from dual 
    	union select 5 from dual 
	union select 6 from dual 
	union select 7 from dual 
	union select 8 from dual 
	union select 9 from dual ) b
order by a.aa desc, b.bb desc
/```