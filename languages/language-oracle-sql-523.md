
## Language Oracle SQL ##
---
- Author: Anonymous
- Date: 04/20/05
- Info: n/a
- Score:  (2.89 in 9 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-oracle-sql-523.html
---

```select 
to_char(nums)||' bottle'||decode(nums,1,' ','s ')||'of beer on the
wall,'||chr(10)|| 
to_char(nums)||' bottle'||decode(nums,1,' ','s ')||'of beer on the
wall,'||chr(10)|| 
'Take one down and pass it around,'||chr(10)||
decode(nums,1,
'no more bottles on the wall.', 
to_char(nums-1)||' bottle'||decode(nums-1,1,' ','s ')||'of beer on the
wall.') verse
from
(select (((((A*2+b)*2+c)*2+d)*2+e)*2+f)*2+g nums
from 
(select 0 a  from dual
union all
select 1 a from dual)
,
(select 0 b  from dual
union all
select 1 b from dual)
,
(select 0 c  from dual
union all
select 1 c from dual)
,
(select 0 d  from dual
union all
select 1 d from dual)
,
(select 0 e  from dual
union all
select 1 e from dual)
,
(select 0 f  from dual
union all
select 1 f from dual)
,
(select 0 g  from dual
union all
select 1 g from dual)
where (a<1 or b<1) or ( c=0 and d=0 and e=0 )
) 
where nums>0
order by nums desc
/```