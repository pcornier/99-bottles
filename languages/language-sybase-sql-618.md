
## Language Sybase SQL ##
---
- Author: Christopher D. Bain
- Date: 04/20/05
- Info: n/a
- Score:  (3.00 in 3 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-sybase-sql-618.html
---

```-- Christopher D. Bain   April 2000
-- http://chris.bainland.net/
-- Sybase SQL version of 99 Bottles of Beer
-- Has been tested on Sybase 11.5 and 11.9.2

CREATE TABLE #BOTTLES (
   DIGIT  int,
   PL_TENS    char(1) null,
   PL_ONES char(1) null
)

CREATE TABLE #NOMORE (
   DIGIT  int,
   OUT    char(8)
)

insert into #BOTTLES values(0,null,'s')
insert into #BOTTLES values(1,'s',null)
insert into #BOTTLES values(2,'s','s')
insert into #BOTTLES values(3,'s','s')
insert into #BOTTLES values(4,'s','s')
insert into #BOTTLES values(5,'s','s')
insert into #BOTTLES values(6,'s','s')
insert into #BOTTLES values(7,'s','s')
insert into #BOTTLES values(8,'s','s')
insert into #BOTTLES values(9,'s','s')

insert into #NOMORE values(0,'No more')

select rtrim(convert(char(2),(tens.digit * 10) + ones.digit))
       + " bottle"
       + substring(tens.pl_tens + ones.pl_ones,1,1)
       + " of beer on the wall, "
       + rtrim(convert(char(2),(tens.digit * 10) + ones.digit))
       + " bottle"
       + substring(tens.pl_tens + ones.pl_ones,1,1)
       + " of beer,"
       + char(10)
       + "Take one down, pass it around,"
       + char(10)
       + substring(nm.out + rtrim(convert(char(2),((tens.digit * 10) +
ones.digit) - 1)),1,7)
       + " bottle"
       + ( select substring(tens2.pl_tens + ones2.pl_ones,1,1)
             from #BOTTLES ones2, #BOTTLES tens2
             where ones2.digit + tens2.digit * 10 = (ones.digit +
tens.digit * 10) - 1 )
       + " of beer on the wall."
       + char(10)
       as "Bottles of Beer"
from #BOTTLES tens, #BOTTLES ones, #NOMORE nm
where tens.digit * 10 + ones.digit > 0
and (tens.digit * 10 + ones.digit) - 1 *= nm.digit
order by tens.digit desc, ones.digit desc

drop table #BOTTLES
drop table #NOMORE```