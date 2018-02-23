
## Language CLIST ##
---
- Author: Alex V. Flinsch
- Date: 04/20/05
- Info: n/a
- Score:  (3.00 in 10 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-clist-131.html
---

```/* THIS IS WRITTEN IN CLIST - A IBM MVS/TSO BATCH LANGUAGE     
/* THIS LINE IS A COMMENT                                      
/* ALEX V FLINSCH SPARROWHAWK@WORLDNET.ATT.NET 
PROC 0                                                         
   SET BEER=99                                                 
A: WRITE &BEER BOTTLES OF BEER ON THE WALL                     
   WRITE &BEER BOTTLES OF BEER                                 
   WRITE TAKE ONE DOWN AND PASS IT AROUND                      
   SET BEER=&EVAL(&BEER-1)                                     
   IF &BEER ,= 0 THEN GOTO A                                   
   WRITE NO MORE BOTTLES OF BEER ON THE WALL                   
   WRITE NO MORE BOTTLES OF BEER```