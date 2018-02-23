
## Language CONTROL-M/Analyzer ##
---
- Author: Ricardo Marin
- Date: 05/17/05
- Info: n/a
- Score:  (3.00 in 13 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-control-m-analyzer-652.html
---

```CONTROL-M/Analyzer is a component member of the INCONTROL by BMC Software
family of products (formerly Control-B - by New Dimension Software) is a
product designed to automate, manage and streamline operations on the
OS/390 or z/OS mainframe.
CONTROL-M/Analyzer performs in-stream validation, accuracy and
reasonability checks on information used by data center production tasks
(for example, reports, databases). It has a meta-language... and here is
the 99 BOTTLES...:


HEADER GROUP 'DM'     OWNER 'CTB'
       DATE  '070105' TIME  '112233'  CREATOR 'EUP4'
/* ------------------------------------------------------------------ */
/* 99 BOTTLES OF BEER ON THE WALL - CONTROL-M/Analyzer Version        */
/* Ricardo Marin - Buenos Aires - Argentina                           */
/* ricardo.marin@bancogalicia.com.ar                                  */
/* ------------------------------------------------------------------ */

EXECUTE 'BEER_1'
ON_DATA
ALWAYS
   DO SET  'T'        EVAL   '99'

LABEL 'BEER_1'
IF 'T       GT        0'
   DO PRINT DATA '%%T BOTTLES OF BEER ON THE WALL, %%T BOTTLES OF BEER'
   DO PRINT DATA 'TAKE ONE DOWN, PASS IT AROUND'
   DO SET  'T'        EVAL   'INT(T - 1)'
   DO GOTO 'BEER_1'

ALWAYS
   DO PRINT DATA
'NO MORE BOTTLES OF BEER ON THE WALL, NO MORE BOTTLES OF BEER'
   DO PRINT DATA
'GO TO THE STORE AND BUY SOME MORE'```