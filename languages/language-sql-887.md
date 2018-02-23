
## Language SQL ##
---
- Author: Ernst Madsen
- Date: 09/23/05
- Info: n/a
- Score:  (1.67 in 3 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-sql-887.html
---

```/*
  Made for Oracle SQL.
  To be executed at SQL-prompt.
  Replace "your_table" with name of table or view holding at least 100 rows
*/
 set pagesize 310
 set heading off
 set feedback off
 
 select decode(rownum,100,'No more',to_char(100-rownum))||
        'bottle'||decode(rownum,99,'','s')||
        ' of beer on the wall, '||
        decode(rownum,100,'no more',to_char(100-rownum))||
        ' bottle'||decode(rownum,99,'','s')||
        ' of beer.'||chr(10)||
        decode(rownum,100,'Go to the store and buy some more, ',
                          'Take one down and pass it around, ')||
        decode(rownum,99,'no more',to_char(decode(rownum,100,99,99-rownum)))||
        ' bottles of beer on the wall.'
 from your_table
 where rownum<=100;```