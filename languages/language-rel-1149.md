
## Language Rel ##
---
- Author: Dave Voorhis
- Date: 05/05/06
- Info: http
- Score:  (4.33 in 3 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-rel-1149.html
---

```/* 99 Bottles of Beer in Rel.  

   Rel implements an extended subset of Date and Darwen's "Tutorial D" 
   true relational database language.

   This example (unecessarily and inefficiently) creates a relation variable
   to hold the bottles, which provides an opportunity to demonstrate 
   some of the built-in relational operators. 

   See http://dbappbuilder.sourceforge.net

   Copyright (c) 2006 Dave Voorhis
*/

VAR bottles LOCAL RELATION {
   bottlecount INTEGER, 
   description CHAR
} KEY {bottlecount};

VAR i INTEGER;
DO i := 1 TO 99
   VAR descript CHAR;
   IF i > 1 THEN
      descript := "bottles of beer on the wall, " || i || 
                          " bottles of beer.  Take one down, pass it around,";
   ELSE
      descript := "bottle of beer on the wall, " || i || 
                          " bottle of beer.  Take it down, pass it around," || 
                          " no more bottles of beer on the wall.";
   END;
   bottles += TUPLE {bottlecount i, description descript};
END;

FOR bottles ORDER DESC bottlecount BEGIN
   WRITELN bottlecount || " " || description;
END;```