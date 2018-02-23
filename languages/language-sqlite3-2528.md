
## Language SQLite3 ##
---
- Author: Mateusz Adamowski
- Date: 10/24/10
- Info: http
- Score:  (3.20 in 5 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-sqlite3-2528.html
---

```-- 
-- sqlite3 < beer.sql
-- 
SELECT
	CASE WHEN n.p = 0 THEN
		CASE WHEN n.n > 0 THEN n.n ELSE 'No more' END || ' ' ||
		CASE WHEN n.n = 1 THEN 'bottle' ELSE 'bottles' END ||
		' of beer on the wall, ' ||
		CASE WHEN n.n > 0 THEN n.n ELSE 'no more' END || ' ' ||
		CASE WHEN n.n = 1 THEN 'bottle' ELSE 'bottles' END ||
		' of beer. '
	ELSE 
		CASE WHEN n.n = 0 THEN 'Go to the store and buy some more,'
		ELSE 'Take one down and pass it around,' END || ' ' ||

		CASE WHEN n.n = 0 THEN 99 WHEN n.n = 1 THEN 'no more' ELSE n.n-1 END || ' ' ||
		CASE WHEN n.n-1 = 1 THEN 'bottle' ELSE 'bottles' END ||
		' of beer on the wall.'
	END
FROM
(
	SELECT 10 * t.x + o.x AS n, pa.p AS p
	FROM (
		SELECT 0 AS x UNION SELECT 1 UNION SELECT 2
		UNION SELECT 3 UNION SELECT 4 UNION SELECT 5
		UNION SELECT 6 UNION SELECT 7 UNION SELECT 8
		UNION SELECT 9 ORDER BY x
	) AS t
	CROSS JOIN (
		SELECT 0 AS x UNION SELECT 1 UNION SELECT 2
		UNION SELECT 3 UNION SELECT 4 UNION SELECT 5
		UNION SELECT 6 UNION SELECT 7 UNION SELECT 8
		UNION SELECT 9 ORDER BY x
	) AS o
	CROSS JOIN (
		SELECT 0 AS p UNION SELECT 1
	) AS pa
) AS n
ORDER BY n.n DESC, n.p;```