
## Language SQL ##
---
- Author: Rob van de Pol
- Date: 04/20/05
- Info: n/a
- Score:  (2.75 in 8 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-sql-609.html
---

```remark	99 bottles of beer with Oracle SQL*Plus
remark	R.vandePol@voeding.tno.nl	< Rob van de Pol>
remark
remark	assuming that YourTable contains at least 99 rows ;-)
remark
remark	RowNum is an Oracle psuedo column indicating the sequence the rows
remark	were selected.

SELECT 	TO_CHAR(100-rownum)||' bottles of beer on the wall, ' ||
		TO_CHAR(100-rownum)||' bottles of beer,' ,
	'take one down and pass it around, ' ,
	DECODE ( TO_CHAR(99-rownum) , '0' , 'No more' , TO_CHAR(99-rownum) )||
		' bottles of beer,'
FROM 	YourTable
WHERE 	rownum < 100```