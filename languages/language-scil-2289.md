
## Language SCIL ##
---
- Author: Ruben Scheja
- Date: 01/07/10
- Info: search for 1MRS751849-MEN on http
- Score:  (4.33 in 3 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-scil-2289.html
---

```; ----------------------------------
; SCIL version of 99 Bottles of beer
; by Ruben Scheja
; email: 'myfirstname'(at)scram.de
;
; SCIL is an Application Programming Language for ABB MicroSCADA system
; The technical description can be found at http://search.abb.com/
; document id: 1MRS751849-MEN
;
; The text is printed to the Notification window
; ----------------------------------


#LOCAL out_return
#LOCAL no_of_bottles
#LOCAL bottle_string

no_of_bottles = 99
bottle_string = "'no_of_bottles' bottles"

#LOOP no_of_bottles > -1
  
   out_return = Console_Output("'bottle_string' of beer on the wall,")
   out_return = Console_Output("'bottle_string' of beer.")
 
   
   no_of_bottles = no_of_bottles - 1

   #CASE no_of_bottles
      #WHEN 2..99 bottle_string = "'no_of_bottles' bottles"
      #WHEN 1 bottle_string = "1 bottle"
      #WHEN 0 bottle_string = "no more bottles"
      #WHEN -1 #BLOCK
                  no_of_bottles = 99
                  bottle_string = "'no_of_bottles' bottles"
                  #LOOP_EXIT
               #BLOCK_END
   #CASE_END
   
   out_return = Console_Output("Take one down and pass it around,") 
   out_return = Console_Output("'bottle_string' of beer on the wall.")

#LOOP_END

out_return = Console_Output("Go to the store and buy some more,")
out_return = Console_Output("'bottle_string' of beer on the wall.")```