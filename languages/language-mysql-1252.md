
## Language MySQL ##
---
- Author: Richard Selby
- Date: 08/29/06
- Info: n/a
- Score:  (2.76 in 21 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-mysql-1252.html
---

```--
-- 99 Bottles of Beer
-- MySQL version
-- Works in mysql query browser for MySQL 4.1 and above
---
-- Based on Chris Farmer's Oracle version
-- 
SELECT
    CASE (a.tens * 10 + b.units)
        WHEN 0 THEN
              CONCAT('No more bottles of beer on the wall, no more bottles of beer. ' ,
                     'Go to the store and buy some more, 99 bottles of beer on the wall.')
        ELSE
               CONCAT((a.tens * 10 + b.units) , 
                  ' bottle', IF((a.tens * 10 + b.units)!=1, 's', ''),
                  ' of beer on the wall, ' ,
                  (a.tens * 10 + b.units),   
                  ' bottle', IF((a.tens * 10 + b.units)!=1, 's', ''),' of beer. ' ,
                  'Take one down and pass it around, ' ,
                  ((a.tens * 10 + b.units)-1) , 
		' bottle', IF(((a.tens * 10 + b.units)-1)!=1, 's', ''), 
                  ' of beer on the wall.')
        END as verse
 FROM 
    (select 0 as tens
	union select 1  
	union select 2  
	union select 3  
	union select 4  
	union select 5  
	union select 6  
	union select 7 
	union select 8  
	union select 9  ) as a
CROSS JOIN
    (select 0 as units
	union select 1   
	union select 2   
	union select 3  
	union select 4  
    	union select 5  
	union select 6  
	union select 7  
	union select 8  
	union select 9  ) as b
ORDER BY a.tens DESC, b.units DESC;```