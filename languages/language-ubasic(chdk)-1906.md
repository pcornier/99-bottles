
## Language uBASIC(CHDK) ##
---
- Author: Maximilian Laiacker
- Date: 11/06/08
- Info: http
- Score:  (2.30 in 10 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-ubasic(chdk)-1906.html
---

```rem uBASIC (CHDK) for Canon cameras version of 99 bottles of beer
rem author Maximilian Laiacker
rem tested on Ixus 40 with "allbest-ixus40_sd300-100k-51-fixSeries" firmware

rem after pressing the shoot button, the song text is printed on the lower left rem corner of the
camera display

@title 99 bottles of beer
@param a printing delay
@default a 500 

for x=99 to 1 step -1
  if x<>1 then print x,"bottles" else print "1 bottle"
  sleep a
  print " of beer on the wall,"
  if x<>1 then print x, "bottles of beer" else print "1 bottle of beer"
  print "Take one down and pass"
  if x<>2 then print " it around,", x-1,"bottles" else print " it around, 1 bottle"
  print " of beer on the wall"
  sleep a
next x```