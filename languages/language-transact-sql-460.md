
## Language Transact-SQL ##
---
- Author: Joseph Thoennes
- Date: 04/20/05
- Info: n/a
- Score:  (2.83 in 6 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-transact-sql-460.html
---

```/*	Microsoft Transact-SQL version of the beer song
**	Joseph Thoennes, thoennes@paranet.com
*/
set nocount on
create table #beer (bottle tinyint identity)
while (select isnull(max(bottle),0) from #beer) < 99 insert into #beer
default values
select ltrim(str(bottle)) + ' bottle' + case when bottle > 1 then 's' end
+ ' of beer on the wall, '
+ ltrim(str(bottle)) + ' bottle' + case when bottle > 1 then 's' end + '
of beer, take '
+ case when bottle > 1 then 'one' else 'it' end + ' down, pass it around,
'
+ case when bottle - 1 > 0 then ltrim(str(bottle - 1)) else 'no more' end
+ ' bottle' + case when bottle - 1 <> 1 then 's' end + ' of beer on the
wall.'
from #beer order by bottle desc
drop table #beer```