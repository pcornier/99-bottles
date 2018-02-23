
## Language CMS Pipelines ##
---
- Author: Karl  Schimanko
- Date: 07/01/05
- Info: http
- Score:  (3.00 in 6 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-cms-pipelines-775.html
---

```/*This example is intended to run as an REXX exec
and therefore enclosed in quotes. 
The last verse is in correct grammar :)*/

'PIPE literal bottles of beer!',
  'dup 99!',
  'spec recno from 0 1 1-* nw!',
  'change / 0 bottles/ No more bottles/!',
  'change / 1 bottles/ 1 bottle/!',
  'strip!',
  'instore reverse!',
  'outstore!',
  'spec /Take one down and pass it around,/ 1 ',
    '1-* nw /on the wall./ nw write write ',
    '1-* 1 /on the wall,/ nw 1-* nw /./ n!',
  'change 3.2 /b/B/!',
  'change 14.4 /es o/e o/!',
  'change 50-* /er./er.../!',
  'change /, N/, n/!',
  'drop 2!',
  'append literal Go to the store and buy some more...',
    '99 bottles of beer.!',
  'cons'```