
## Language AML ##
---
- Author: Anonymous
- Date: 04/20/05
- Info: n/a
- Score:  (3.00 in 15 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-aml-29.html
---

```/* AML (Arc Macro Language) version of 99 bottles of beer on the wall
/* Author prefers anonymity B-)
/*
 
&do number = 9 &to 1 &by -1
   /* handle the one bottle cases
   &if %number% = 1 &then
      &set noun1 = bottle
   &else 
      &set noun1 = bottles
   &if %number% = 2 &then
      &set noun2 = bottle
   &else 
      &set noun2 = bottles
 
   &type \%number% %noun1% of beer on the wall,
   &type %number% %noun1% of beer,
   &type Take one down, pass it around,
   &type [calc %number% - 1] %noun2% of beer on the wall
&end
&return```