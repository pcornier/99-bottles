
## Language IBM HLASM Macro ##
---
- Author: John P. Rotten
- Date: 11/17/09
- Info: http
- Score:  (2.71 in 7 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-ibm-hlasm-macro-2228.html
---

```         MACRO                                         
         BEER                                          
.*       IBM High Level Assembler Macro Version        
         LCLA  &BEER                                   
&BEER    SETA  99                                      
.LOOP    ANOP                                          
         MNOTE '&BEER bottles of beer on the wall'     
         MNOTE '&BEER bottles of beer'                 
         MNOTE 'Take one down and pass it around'      
&BEER    SETA  &BEER-1                                 
         AIF   (&BEER EQ 0).NOMORE                     
         MNOTE '&BEER bottles of beer on the wall'     
         MNOTE ' '                                     
         AIF   (&BEER NE 0).LOOP                       
.NOMORE  ANOP                                          
         MNOTE 'No more bottles of beer on the wall'   
         MNOTE ' '                                     
         MNOTE 'No more bottles of beer on the wall'   
         MNOTE 'No more bottles of beer'               
         MNOTE 'Go to the store, buy some more,' 
         MNOTE '99 bottles of beer on the wall'  
         MEND```