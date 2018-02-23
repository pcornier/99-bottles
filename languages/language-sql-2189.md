
## Language SQL ##
---
- Author: Johan �hl�n
- Date: 09/28/09
- Info: n/a
- Score:  (2.87 in 15 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-sql-2189.html
---

```---------------------------------------------------------------
-- 99 BOTTLES OF BEER
-- SQL Server 2005 version. Using a CTE recursive query.
-- 
-- (C) Johan �hl�n, 2009
-- Blog: http://blogical.se/blogs/jahlen
-- This is BEERWARE. If you like it - send the author a beer! ;-)
---------------------------------------------------------------


WITH Song AS
(
	-- Start from the last verse...
	SELECT
		0 AS BeerCount,
		CAST('No more bottles' AS VARCHAR) AS WhatWeHave,
		CAST('Go to the store and buy some more, ' AS VARCHAR(50)) AS WhatToDo,
		CAST('99 bottles' AS VARCHAR) AS WhatWeHaveNext
		
	UNION ALL
	
	-- Continue with earlier verses
	SELECT
		BeerCount + 1,
		CAST(LTRIM(STR(BeerCount + 1)) + (CASE WHEN BeerCount > 0 
			THEN ' bottles' ELSE ' bottle' END) AS VARCHAR),
		CAST('Take one down and pass it around, ' AS VARCHAR(50)),
		LOWER(WhatWeHave)
	FROM Song
	WHERE BeerCount < 99 -- Recurse until we have 99 bottles...
)

SELECT (
	WhatWeHave + ' of beer on the wall, '
	+ 
	LOWER(WhatWeHave) + ' of beer. ' -- repeat in lower caps
	+ 
	WhatToDo
	+
	WhatWeHaveNext
	+ ' of beer on the wall.'
) AS Lyrics
FROM Song
ORDER BY BeerCount DESC -- Reverse the verses```