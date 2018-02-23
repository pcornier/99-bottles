
## Language CLLE ##
---
- Author: Tony Cellana
- Date: 03/25/08
- Info: http
- Score:  (2.00 in 2 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-clle-1737.html
---

```/******************************************************************************/
/**  99 Bottles of Beer on the Wall.                                         **/
/**  Written by Tony Cellana                                                 **/
/******************************************************************************/
             PGM                                                                
                                                                                
/**  Declare Variables  **/                                                     
             DCL        VAR(&IDX)  TYPE(*DEC)  LEN(2 0) VALUE(99)               
             DCL        VAR(&IDXA) TYPE(*CHAR) LEN(2)                           
             DCL        VAR(&MSG1) TYPE(*CHAR) LEN(80)                          
             DCL        VAR(&MSG2) TYPE(*CHAR) LEN(80)                          
                                                                                
 LOOP:       DO                                                                 
/**  Convert Numeric to Alpha  **/                                              
             CHGVAR     VAR(&IDXA) VALUE(&IDX)                                  
                                                                                
/**  Load Verse Line 1  **/                                                     
             CHGVAR     VAR(&MSG1) VALUE(&IDXA || ' bottles of beer +           
                          on the wall, ' || &IDXA || ' bottles of +             
                          beer.')                                               
                                                                                
/**  Decrement Index  **/                                                       
             CHGVAR     VAR(&IDX) VALUE(&IDX - 1)                               
/**  Convert Numeric to Alpha  **/                                     
             CHGVAR     VAR(&IDXA) VALUE(&IDX)                         
                                                                       
/**  Load Verse Line 2  **/                                            
             CHGVAR     VAR(&MSG2) VALUE('   Take one down and pass +  
                          it around, ' || &IDXA || ' bottles of beer.')
                                                                       
/**  Send Verse to Display  **/                                        
             SNDPGMMSG  MSG(&MSG1) TOPGMQ(*EXT)                        
             SNDPGMMSG  MSG(&MSG2) TOPGMQ(*EXT)                        
             SNDPGMMSG  MSG(' ')   TOPGMQ(*EXT)                        
                                                                       
/**  Time to Leave?  **/                                               
             IF         COND(&IDX = 1) THEN(GOTO CMDLBL(LAST))         
                                                                       
/**  Do it again, WHEE, Do it again  **/                               
             GOTO       CMDLBL(LOOP)                                   
             ENDDO                                                     
                                                                       
/**  One Last Time  **/                                                
 LAST:       CHGVAR     VAR(&MSG1) VALUE('1 bottle of beer on the +    
                          wall, 1 bottle of beer.')                    
             CHGVAR     VAR(&MSG2) VALUE('   Take one down and pass +  
                          it around, no more bottles of beer on the +  
                          wall.')                                     
             SNDPGMMSG  MSG(&MSG1) TOPGMQ(*EXT)                       
             SNDPGMMSG  MSG(&MSG2) TOPGMQ(*EXT)                       
             SNDPGMMSG  MSG(' ')   TOPGMQ(*EXT)                       
                                                                      
             CHGVAR     VAR(&MSG1) VALUE('No more bottles of beer on +
                          the wall, no bottles of beer.')             
             CHGVAR     VAR(&MSG2) VALUE('   Go to the store and buy +
                          some more, 99 bottles of beer on the wall.')
             SNDPGMMSG  MSG(&MSG1) TOPGMQ(*EXT)                       
             SNDPGMMSG  MSG(&MSG2) TOPGMQ(*EXT)                       
                                                                      
/**  Bye, Y'all, See Ya Reall Soon  **/                               
 ENDPGM:     ENDPGM                                                   
             RETURN```