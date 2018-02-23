
## Language OCL ##
---
- Author: Anonymous
- Date: 04/20/05
- Info: n/a
- Score:  (3.00 in 16 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-ocl-513.html
---

```Operation Control Language is the JCL/batch/scripting language for 
the IBM System 32/34/36 computer series.

** 99 Bottles of Beer on the Wall
// EVALUATE P1=99 P2='s'
// TAG MOREBEER
// * '?1? bottle?2? of beer on the wall,'
// * '?1? bottle?2? of beer,'
// IFF '?1?'='No more' * 'Take one down and pass it around,' 
// ELSE * 'Go to the store and get some more,'
// IFF '?1?'='No more' EVALUATE P1=?1?-1  * decrement the counter
// ELSE EVALUATE P1=99 * reseed counter
// IF ?1?>1 EVALUATE  * leave P2='s' (for efficiency - OCL is interpreted)
// ELSE IF ?1?=1 EVALUATE P2=''
// ELSE IF ?1?=0 EVALUATE P1='No more' P2='s'
// * '?1? bottle?2? of beer on the wall.'
// GOTO MOREBEER * ad infinitum```