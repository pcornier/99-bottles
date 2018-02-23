
## Language SQL ##
---
- Author: Kent Olsen
- Date: 11/29/05
- Info: n/a
- Score:  (2.95 in 21 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-sql-967.html
---

```SELECT 
  CASE (bottlecount)
    WHEN 0 THEN 'No more bottle of beer on the wall, no more bottles of beer. ' ||
                'Go to the store and buy some more, 99 bottles of beer on the wall.'
    WHEN 1 THEN '1 bottle of beer on the wall, 1 bottle of beer. ' ||
                'Take one down and pass it around, no more bottles of beer on the wall.'
    WHEN 2 THEN '2 bottles of beer on the wall, 2 bottles of beer. ' ||
                'Take one down and pass it around, 1 bottle of beer on the wall.'
    ELSE 
      rtrim (cast((BottleCount) as char(2))) || ' bottles of beer on the wall, ' ||
      rtrim (cast((BottleCount) as char(2))) || ' bottles of beer. ' ||
      'Take one down and pass it around, ' ||
      rtrim (cast((BottleCount)-1 as char(2))) || ' bottles of beer on the wall.'
  END
FROM
(
  SELECT avalue * 10 + bvalue as bottlecount
  FROM
    (VALUES (9), (8), (7), (6), (5), (4), (3), (2), (1), (0)) a(avalue),
    (VALUES (9), (8), (7), (6), (5), (4), (3), (2), (1), (0)) b(bvalue)
) as valuelist;```