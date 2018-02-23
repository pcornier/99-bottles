
## Language Easytrieve ##
---
- Author: R. Heemskerk
- Date: 04/20/05
- Info: n/a
- Score:  (2.89 in 28 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-easytrieve-228.html
---

```* 99 bottles of beer
* Easytrieve programming language (Computer Associates)
* (c) R. Heemskerk, systeemprogrammeur@zonnet.nl

JOB INPUT(NULL) NAME BOTTLE-99
DEFINE BOTTLES W 2 N MASK 'Z9'
DEFINE BOTTLEWORD W 7 A
BOTTLES = 99
BOTTLEWORD = 'bottles'
DO WHILE BOTTLES > 0
   DISPLAY BOTTLES ' ' BOTTLEWORD ' of beer on the wall, ' +
      BOTTLES ' ' BOTTLEWORD ' of beer.'
   DISPLAY 'Take one down, pass it around.'
   BOTTLES = BOTTLES - 1
   IF BOTTLES = 1
      BOTTLEWORD = 'bottle'
   END-IF
END-DO
DISPLAY 'No more bottles of beer on the wall, no more bottles of beer.'
DISPLAY 'Go to the store and buy some more.'
STOP```