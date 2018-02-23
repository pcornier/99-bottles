
## Language REXX ##
---
- Author: Laurent KUPERBERG
- Date: 11/26/09
- Info: http
- Score:  (3.00 in 29 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-rexx-2247.html
---

```/* REXX VERSION OF THE BOTTLES PROGRAM */                              
/* BY L Kuperberg  laurent.kuperberg@halcom.fr */                      
i = 99                                                                 
Call Chante                                                            
SAY 'TAKE ONE DOWN, PASS IT AROUND, NO MORE BOTTLES ',                 
    'OF BEER ON THE WALL'                                              
SAY ' '                                                                
SAY 'NO MORE BOTTLES OF BEER ON THE WALL, NO MORE BOTTLES OF BEER'     
SAY 'GO TO THE STORE AND BUY SOME MORE' , 
     '99 BOTTLES OF BEER ON THE WALL. '
   
Return                                                                 

CHANTE:                                                                
  SAY I BOTTLES 'OF BEER ON THE WALL, ' BOTTLES 'OF BEER'              
  i = i - 1                                                            
  select                                                               
    when i = 0 then RETURN                                             
    when i = 1 then BOTTLES = BOTTLE                                   
    otherwise                                                          
       nop                                                             
  end                                                                  
  SAY 'TAKE ONE DOWN, PASS IT AROUND,' I BOTTLES  'OF BEER ON THE WALL'
  SAY ' '                                                              
  CALL CHANTE                                                          
Return```