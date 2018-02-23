
## Language Simula ##
---
- Author: Jack Leunissen
- Date: 03/10/07
- Info: n/a
- Score:  (2.75 in 4 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-simula-1415.html
---

```BEGIN
  COMMENT
     Simula version of 99 beers
     Maciej Macowicz (mm@cpe.ipl.fr)
     Status: UNTESTED :)

     Amended 2007-03-10 by Jack Leunissen (jack.leunissen@wur.nl)
     Status: WORKING (at least it prints and counts correctly)
  ;
  INTEGER bottles;
  INTEGER num;

  num := 2;
  FOR bottles:= 99 STEP -1 UNTIL 1 DO 
  BEGIN
    IF (bottles < 10) THEN num := 1;
    OutInt(bottles,num);
    OutText(" bottle(s) of beer on the wall, ");
    OutInt(bottles,num);
    OutText(" bottle(s) of beer");
    OutImage;
    Outtext("Take one down, pass it around, ");
    OutInt(bottles - 1,num);
    OutText(" bottle(s) of beer on the wall. ");
    OutImage;
    OutImage;
  END;
  OutText("1 bottle of beer on the wall, one bottle of beer."); 
  OutImage;
  OutText("Take one down, pass it around, ");
  OutText("no more bottles of beer on the wall");
  OutImage
END```