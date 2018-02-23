
## Language Transact-SQL ##
---
- Author: Robert Bruce
- Date: 04/25/06
- Info: n/a
- Score:  (1.00 in 1 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-transact-sql-1138.html
---

```/*
	Transact - SQL version of 99 bottles of beer song
	25/04/2006

	Robert Bruce
	rob@robert-bruce.co.uk
	http://www.robert-bruce.co.uk
*/

SELECT 
REPLACE(
	BottleScript.BottleLine, '$BOTTLE', CONVERT(
		VARCHAR(2),
		Bottles.BottleValue - BottleScript.Take
	)
) As Song
FROM (
	SELECT (N1.NUM * 10) + N2.NUM AS BottleValue
	FROM (
		SELECT 0 NUM UNION ALL
		SELECT 1 UNION ALL
		SELECT 2 UNION ALL
		SELECT 3 UNION ALL
		SELECT 4 UNION ALL
		SELECT 5 UNION ALL
		SELECT 6 UNION ALL
		SELECT 7 UNION ALL
		SELECT 8 UNION ALL
		SELECT 9
	) AS N1, (
		SELECT 1 NUM UNION ALL
		SELECT 2 UNION ALL
		SELECT 3 UNION ALL
		SELECT 4 UNION ALL
		SELECT 5 UNION ALL
		SELECT 6 UNION ALL
		SELECT 7 UNION ALL
		SELECT 8 UNION ALL
		SELECT 9
	) AS N2
) AS Bottles
INNER JOIN
(
	SELECT	'$BOTTLE bottles of beer on the wall, $BOTTLE bottles of beer,' BottleLine,
		0 Take,
		0 LineNumber,
		99 MaxBottleCount,
		2 MinBottleCount
	UNION ALL
	SELECT 'Take one down and pass it around, $BOTTLE bottles of beer on the wall.',
		1,
		1,
		99,
		2
	UNION
	SELECT	'$BOTTLE bottle of beer on the wall, $BOTTLE bottle of beer,',
		0,
		0,
		1,
		1
	UNION
	SELECT	'Take one down and pass it around, $BOTTLE bottle of beer on the wall.',
		1,
		1,
		1,
		1
	UNION
	SELECT	'Take one down and pass it around, no more bottles of beer on the wall.',
		1,
		1,
		0,
		0
	UNION
	SELECT	'No more bottles of beer on the wall, No more bottle of beer,',
		0,
		2,
		0,
		0
	UNION
	SELECT	'Goto the store and buy some more, 99 bottles of beer on the wall.',
		1,
		3,
		0,
		0
) As BottleScript
	ON (Bottles.BottleValue - BottleScript.Take) BETWEEN
		BottleScript.MinBottleCount AND BottleScript.MaxBottleCount
 ORDER BY Bottles.BottleValue DESC, BottleScript.LineNumber```