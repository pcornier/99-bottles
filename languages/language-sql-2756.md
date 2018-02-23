
## Language SQL ##
---
- Author: Nick Jacobsen
- Date: 09/18/11
- Info: n/a
- Score:  (2.86 in 7 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-sql-2756.html
---

```SELECT 
	CASE tens*10+unit 
		WHEN 1 THEN '1 bottle of beer on the wall, 1 bottle of beer. ' +
                    'Take one down and pass it around, no more bottles of beer on the wall.'
		WHEN  0 THEN 'No more bottle of beer on the wall, no more bottles of beer. ' +
                     'Go to the store and buy some more, 99 bottles of beer on the wall.'
		ELSE 
			convert(varchar(2),tens*10+unit )+ ' bottles of beer on the wall, ' + 
			convert(varchar(2),tens*10+unit ) + ' bottles of beer. Take one down pass it around. ' +
			convert(varchar(2),tens*10+unit -1)+ ' bottle' + 
				CASE WHEN convert(varchar(2),tens*10+unit -1) = 1 THEN 
						'' ELSE 
						's' END + ' of beer on the wall.' 
		END
	FROM 
	(SELECT  unit FROM 
		(SELECT  1 c1, 2 c2, 3 c3, 4 c4,5 c5,6 c6,7 c7,8 c8,9 c9, 0 c0) p
		UNPIVOT (unit FOR Number1 IN (c1,c2,c3,c4,c5,c6,c7,c8,c9,c0))AS unpvt) as unit
CROSS JOIN
	(SELECT  tens FROM 
		(SELECT  1 c1, 2 c2, 3 c3, 4 c4,5 c5,6 c6,7 c7,8 c8,9 c9, 0 c0) p
			UNPIVOT (tens FOR Number1 IN (c1,c2,c3,c4,c5,c6,c7,c8,c9,c0))AS unpvt) as tens
		ORDER BY tens*10+unit DESC```