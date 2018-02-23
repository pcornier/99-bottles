
## Language pBasic ##
---
- Author: Wyatt Sheffield
- Date: 07/29/09
- Info: http
- Score:  (3.00 in 12 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-pbasic-2153.html
---

```' {$STAMP BS2}
' {$PBASIC 2.5}
' +----------------------------------------+
' | "99 Bottles of Beer" lyrics generator  |
' | written in PBasic language 2.5 for the |
' | Basic Stamp 2 microcontroller.         |
' | Written by Wyatt Sheffield             |
' +----------------------------------------+

'-----------[Variables]---------------------
counter     VAR Byte                        'general purpose counter
wall        VAR Byte                        'Counts down number of bottles
around      VAR Byte                        'Counts down number of bottles
                                            ' (The names of the variables are
                                            ' as such because wen asked TO print a
                                            ' value, the microcontroller gives
                                            ' the variable name, THEN the value.)
'--------------[Body]-----------------------
Reset:

wall = 99
around = 99

DEBUG "99 bottles of beer on the wall,",
      "99 bottles of beer!", CR,
      "Take one down, pass it "

Main:

FOR counter = 1 TO 97 STEP 1                'loops 97 times before exiting.
     wall = wall - 1                        'subtracts 1 from the previous value each loop.
     around = around - 1
     DEBUG ? around, " bottles of beer on the "
     DEBUG ? wall, "bottles of beer!  Take one down, pass it "
NEXT

DEBUG "around, 1 bottle of beer on the wall.", CR,
      "1 bottle of beer ON the wall, ",
      "1 bottle of beer!  Take it down, pass it around,",
      "No more bottles of beer on the wall!"

END```