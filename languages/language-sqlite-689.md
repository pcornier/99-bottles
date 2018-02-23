
## Language SQLite ##
---
- Author: Didier Jacquemart
- Date: 05/25/05
- Info: n/a
- Score:  (3.00 in 9 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-sqlite-689.html
---

```/*********************   BEER / SQLITE   ****************************/
/* beerproc.sql */

/*
type in the following commands :
sqlite.exe beer
.read beerporc.sql
*/

/*   generate numbers from 1 to 10   */
drop table beer1;
create table beer1 (num int);
insert into beer1 values(1);
insert into beer1 select 2;
insert into beer1 select 3;
insert into beer1 select 4;
insert into beer1 select 5;
insert into beer1 select 6;
insert into beer1 select 7;
insert into beer1 select 8;
insert into beer1 select 9;
insert into beer1 select 10;

/*   generate numbers from 0 to 99   */
drop table beer2;
create table beer2 (num int);
insert into beer2 
    select (a.num-1)*10+b.num-1 from beer1 a, beer1 b;

/*   generate text for each number of bottles   */
drop table beer3;
create table beer3 (num int, num1 int, txbtl varchar(10), txbtl1 varchar(10));
insert into beer3 
    select num, num-1, 
           case when num=1 then "1 bottle"
	   else
	     case when num = 0 then "no more bottle"
	     else
	       num || " bottles"
	     end
	   end ,
	   case when num=2 then "1 bottle"
	   else
	     case when num=1 then "no more bottles"
	     else
	       (num-1) || " bottles"
	     end
	   end
    from beer2;

/*   generate two lines for each count of bottles   */
drop table beer4;
create table beer4 (num int, seq int, txt varchar(50));
insert into beer4
   select num, 1, txbtl || " of beer on the wall, " ||
          txbtl || " of beer." 
	  from beer3

	  union 

   select num, 2, "Take one down and pass it around, " ||
       txbtl1 || " of beer on the wall."
       from beer3
   ;
   
/*   change text for last count (0)   */
update beer4 set txt="Go to the store and buy some more...99 bottles of beer."
       where num = 0 and seq=2; 
   
/*   create and display ordered lines   */
drop table beer5;
create table beer5 as select * from beer4 order by num desc, seq;
select txt from beer5;```