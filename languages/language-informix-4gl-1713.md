
## Language Informix 4gl ##
---
- Author: Andrew Hawkins
- Date: 03/04/08
- Info: http
- Score:  (2.33 in 3 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-informix-4gl-1713.html
---

```MAIN

DEFINE i_bottle      SMALLINT, 
       i_bottle_str  CHAR(20),
       i_bottle_temp SMALLINT,
       s_bottle      CHAR(15),
       i_start       SMALLINT
       
       
LET i_start = 99       

FOR i_bottle = i_start TO 1 STEP -1

   LET i_bottle_temp = i_bottle -1
   
   
   IF i_bottle = 1 THEN
      LET s_bottle = "bottle"
   ELSE
      LET s_bottle = "bottles"
   END IF 
   
   LET i_bottle_str = i_bottle USING "<<"


   IF i_bottle = 0 THEN
      LET i_bottle_str = "No more bottles"
   END IF 
      
   DISPLAY i_bottle USING "<<", " ", s_bottle CLIPPED, " of beer on the wall, ", i_bottle USING
"<<", " ", s_bottle CLIPPED, " of beer."
   
   CASE i_bottle_temp 
   
      WHEN 1
         LET s_bottle = "bottle"
      WHEN 0
         LET s_bottle = "no more bottles"
      OTHERWISE
         LET s_bottle = "bottles"
   END CASE 
   
   DISPLAY "Take one down and pass it around, ", i_bottle_temp USING "<<", " ", s_bottle CLIPPED, "
of beer on the wall."
   DISPLAY " "

END FOR

DISPLAY "No more bottles of beer on the wall, no more bottles of beer."
DISPLAY "Go to the store and buy some more, ", i_start USING "<<", " bottles of beer on the wall."


END MAIN```