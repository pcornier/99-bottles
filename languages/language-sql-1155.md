
## Language SQL ##
---
- Author: Joachim Banzhaf
- Date: 05/17/06
- Info: http
- Score:  (2.33 in 3 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-sql-1155.html
---

```with maxbottles( num ) as
(
        values 99
),
strings( bottle, ofbeer, onthewall, comma, period, newline ) as
(
        values (' bottle', ' of beer', ' on the wall', ', ', '.', X'0A0D') 
),
count( num ) as 
(
        select num from maxbottles

        union all

        select num - 1 from count where num > 0
),
zero( num, bign, smalln, omore, store ) as
(
        values (0, 'N', 'n', 'o more', 'Go to the store and buy some more')
),
one( num, singular ) as
(
        values (1, '')
),
bottles( num, bign, smalln, omore, store, singular ) as
(
        select
                count.num, bign, smalln, omore, store, singular
        from
                count
                left outer join zero on count.num = zero.num
                left outer join one on count.num = one.num
)
select
        coalesce(bottles1.bign concat bottles1.omore, rtrim(char(bottles1.num)))
        concat bottle
        concat coalesce(bottles1.singular, 's')
        concat ofbeer
        concat onthewall
        concat comma 
        concat coalesce(bottles1.smalln concat bottles1.omore, 
                        rtrim(char(bottles1.num)))
        concat bottle
        concat coalesce(bottles1.singular, 's')
        concat ofbeer 
        concat period 
        concat newline
        concat coalesce(bottles1.store, 'Take one down and pass it around')
        concat comma
        concat coalesce(bottles2.smalln concat bottles2.omore, 
                        rtrim(char(coalesce(bottles2.num, 
                                            (select num from maxbottles)))))
        concat bottle 
        concat coalesce(bottles2.singular, 's')
        concat ofbeer
        concat onthewall
        concat period 
        concat newline as "Lyrics of ""99 Bottles of Beer"""
from 
        strings,
        bottles as bottles1
        left outer join bottles as bottles2 on bottles1.num = bottles2.num + 1
order by
        bottles1.num desc
;```