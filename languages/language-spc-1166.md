
## Language SPC ##
---
- Author: Ronald S. Brown
- Date: 05/28/06
- Info: RonBrown@WeBeatDiabetes.com
- Score:  (3.00 in 2 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-spc-1166.html
---

```

                               SPC version

        Title: 99_bottles
     Filename: bottles.sud
      Version: 1.3
       Author: Ronald S. Brown
 Created-date: 27May2006
   Revised-by: Ronald S. Brown
Revision-date: 28May2006
      Purpose: To display the lyrics
               of the song "99 Bottles
               of Beer on the Wall".
     Category: Curiosity/Benchmark
        Needs: Minimal


DataDictionary:

         bottle_count     control counter for the program's single loop
         step             increment/decrement amount for loop control counter 
         bottle_of_beer   "bottle of beer"
         bottles_of_beer  "bottles of beer"
         on_the_wall      "on the wall."
         period           "."
         take_one_down    "Take one down and pass it around."
         take_it_down     "Take it down and pass it around."
         no_more          "No more"
         go_to_the_store  "Go to the store and buy some more."

Procedure:

         LOOP START WITH bottle_count EQUALS 99 and step EQUALS MINUS 1

             TEST bottle_count GREATER THAN 1
                TRUE
                   DISPLAY  bottle_count bottles_of_beer on_the_wall
                   DISPLAY  bottle_count bottles_of_beer period
                   DISPLAY  take_one_down
                   DISPLAY  bottle_count MINUS 1 bottles_of_beer on_the_wall

             TEST bottle_count EQUALS 1
                TRUE
                   DISPLAY  1 bottle_of_beer on_the_wall
                   DISPLAY  1 bottle_of_beer period
                   DISPLAY  take_it_down
                   DISPLAY  no_more bottles_of_beer on_the_wall


             TEST bottle_count LESS THAN 1
                TRUE
                   DISPLAY  no_more bottles_of_beer on_the_wall
                   DISPLAY  no_more bottles_of_beer period
                   DISPLAY  go_to_the_store
                   DISPLAY  99 bottles_of_beer on_the_wall

         END LOOP ON bottle_count LESS THAN 0

         COMMENT  'Standardized' PseudoCode is LOGIC without SYNTAX.```