
## Language PostgreSQL ##
---
- Author: gusC
- Date: 04/11/07
- Info: http
- Score:  (2.50 in 6 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-postgresql-1446.html
---

```SELECT
  CASE (bottlecount)
    WHEN 0 THEN 'No more bottle of beer on the wall,\n no more bottles of beer.\n ' ||
                'Go to the store and buy some more,\n 99 bottles of beer on the wall.\n'
    WHEN 1 THEN '1 bottle of beer on the wall,\n 1 bottle of beer.\n ' ||
                'Take one down and pass it around,\n no more bottles of beer on the wall.\n'
    WHEN 2 THEN '2 bottles of beer on the wall,\n 2 bottles of beer.\n ' ||
                'Take one down and pass it around,\n 1 bottle of beer on the wall.\n'
    ELSE
      rtrim (cast((BottleCount) as char(2))) || ' bottles of beer on the wall,\n ' ||
      rtrim (cast((BottleCount) as char(2))) || ' bottles of beer.\n ' ||
      'Take one down and pass it around,\n ' ||
      rtrim (cast((BottleCount)-1 as char(2))) || ' bottles of beer on the wall.\n'
  END
FROM
(
  SELECT avalue * 10 + bvalue AS bottlecount
  FROM generate_series(9,0,-1) AS avalue, generate_series(9,0,-1) AS bvalue
) as valuelist;```