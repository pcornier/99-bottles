
## Language Mimer PG ##
---
- Author: Anonymous
- Date: 04/20/05
- Info: n/a
- Score:  (1.00 in 1 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-mimer-pg-392.html
---

```PROGRAM BEER;
BEGIN

 I := 100;
 S := "s";
 Bottle := " bottle";
 Punkt := ".";
 Komma := ",";
 Line1  := "                            "; 
 Line2  := "                            "; 
 Line1a := " of beer on the wall";
 Line2a := " of beeeeer . . . ,";
 Line3 := "Take one down, pass it around,"; 
 Line4 := "No more bottles of beer on the wall.";
 Line5 := "Time to buy more beer!";

 LOOP
 < 
  I := I-1;
  If I LT 10 Then
  <
    Line1 := Bottle + Line1a;
    Line2 := Bottle + Line2a;
  >
  ELSE
  <
    Line1 := Bottle + s + Line1a;
    Line2 := Bottle + s + Line2a;
  >;
  Writeln(I,TRIM(Line1),Komma);
  Writeln(I,TRIM(Line2));
  Writeln(Line3);
  If I EQ 1 Then
  <
    Writeln(Line4);
    Writeln(" ");
    Writeln(Line5);
    EXIT;
  >
  ELSE
  <
    If I EQ 10 Then
    <
      Line1 := Bottle + Line1a;
    >;
    Writeln(I-1,TRIM(Line1),Punkt);
    Writeln(" ");
  >; 
 >; /* End LOOP */
  
END;```