
## Language SQL ##
---
- Author: Christoph Linder
- Date: 11/21/07
- Info: http
- Score:  (3.00 in 1 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-sql-1633.html
---

```/*
  Made for Oracle 9i and upwards.
  Uses the "Hierarchical Query" feature to generate bottles onna wall.
  The pseudo-column "level" denotes the current recursion depth. 
  The maximum bottle count (a.k.a. recursion depth) is 255 (oracle 9i, iirc), so you better serve
some ale :)
*/
select 
 decode(wall.bottles, 0, 'No more bottles of beer on the wall, '||
                         'no more bottles of beer.'||chr(10)||
                         'Go to the store and buy some more, '||
                         '99 bottles of beer on the wall.',
                      replace(replace('$bottles of beer on the wall, '||
                                      '$bottles of beer.'||chr(10)||
                                      'Take one down and pass it around, '||
                                      '$remaining_bottles of beer on the wall.',
                           '$bottles', wall.bottles||' bottle'
                                       ||case 
                                         when wall.bottles > 1 then 's' 
                                         end ),
                           '$remaining_bottles', case wall.bottles-1 
                                                 when 0 then 'no more bottles'
                                                 when 1 then 'one more bottle'
                                                 else wall.bottles-1||' bottles' 
                                                 end ) 
 ) as beersong_stanza
from (
       select level-1 as bottles
       from dual -- system table containing exactly one row
       connect by level <= 100
       order by bottles desc
      ) wall```