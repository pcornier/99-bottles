
## Language Modula 3 ##
---
- Author: Anonymous
- Date: 04/20/05
- Info: n/a
- Score:  (2.96 in 27 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-modula-3-402.html
---

```MODULE BottlesOfBeer EXPORTS Main;
 
FROM IO  IMPORT Put ;
FROM Fmt IMPORT Int ;
 
VAR bottles := 99 ;
 
BEGIN
  WHILE (bottles > 0) DO
    Put(Int(bottles) & " bottle(s) of beer on the wall,\n") ;
    Put(Int(bottles) & " bottle(s) of beer. \n") ;
    Put("Take one down, and pass it around,\n");
    DEC(bottles);
    Put(Int(bottles) & " bottle(s) of beer on the wall.\n");
  END ;
 
END BottlesOfBeer.```