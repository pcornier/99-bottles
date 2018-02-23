
## Language Assembler (S/390) ##
---
- Author: Anonymous
- Date: 04/20/05
- Info: n/a
- Score:  (2.90 in 31 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-assembler-(s-390)-47.html
---

```BEER     TITLE '99 BOTTLES OF BEER ON THE WALL'                         
*+--------------------------------------------------------------------+ 
*�                                                                    � 
*�MODULE NAME  :BEER                                                  � 
*�                                                                    � 
*�FUNCTION     :DISPLAY 99 BOTTLES OF BEER ON THE WALL ON THE         � 
*�             :SYSTEM CONSOLE.                                       � 
*�                                                                    � 
*�ENVIRONMENT  :Z900 SYSTEM (S/390) RUNNING ZOS.                      � 
*�                                                                    � 
*+--------------------------------------------------------------------+ 
                                                                        
*--------------------------------------------------------------*        
*        PROGRAM ENTRY POINT.                                  *        
*--------------------------------------------------------------*        
                                                                        
BEER     CSECT                                                          
                                                                        
*        *-----------------------------------------------------*        
*        * SAVE CALLER'S ENVIRONMENT.                          *        
*        *-----------------------------------------------------*        
                                                                        
         STM   R14,R12,12(R13)         SAVE CALLER'S REGS.              
                                                                        
*        *-----------------------------------------------------*        
*        * BUILD OUR EXECUTION ENVIRONMENT.                    *        
*        *-----------------------------------------------------*        
                                                                        
         LA    R12,0(,R15)             COPY OVER BASE REGISTER.         
         USING BEER,R12                ASSIGN BASE.                     
         LA    R3,RSA                  POINT TO OUR RSA.                
         ST    R3,8(,R13)              SAVE IN CALLER'S RSA.            
         ST    R13,4(,R3)              CHAIN CALLER'S TO OURS.          
         LR    R13,R3                  SET UP OUR RSA.                  

*--------------------------------------------------------------*        
*        NUMBER OF BEERS LOOP.                                 *        
*--------------------------------------------------------------*        
                                                                        
         LA    R4,99                   NUMBER OF BEERS.                 
                                                                        
BEERLOOP DS    0H                                                       
                                                                        
*        *-----------------------------------------------------*        
*        * CREATE A PRINTABLE NUMBER FROM INTEGER.             *        
*        *-----------------------------------------------------*        
                                                                        
         CVD   R4,DWORD                CONVERT FIXED TO DECIMAL.        
                                                                        
         MVI   WORK,C' '               PLACE SEED.                      
         MVC   WORK+1(L'WORK-1),WORK   PROPIGATE SEED.                  
         MVC   WORK(8),=X'4020202020202120'                             
         LA    R1,WORK+5               DEFAULT TO LAST BYTE.            
         EDMK  WORK(8),DWORD+4         UNPACK NUMBER.                   
                                                                        
*        *-----------------------------------------------------*        
*        * MODIFY MESSAGES WITH BEER NUMBER.                   *        
*        *-----------------------------------------------------*        
                                                                        
         MVC   MSG1+4(2),0(R1)         COPY OVER NUMBER OF BEERS.       
         MVC   MSG2+4(2),0(R1)         COPY OVER NUMBER OF BEERS.       
         MVC   MSG4+4(2),0(R1)         COPY OVER NUMBER OF BEERS.       
                                                                        
*        *-----------------------------------------------------*        
*        * ISSUE MESSAGE TO CONSOLE PRAISING THE NUMBER OF     *        
*        * BEERS.                                              *        
*        *-----------------------------------------------------*        
                                                                        
         WTO   MF=(E,MSG1)             ISSUE MESSAGE.                   
         WTO   MF=(E,MSG2)             ISSUE MESSAGE.                   
         WTO   MF=(E,MSG3)             ISSUE MESSAGE.                   
         WTO   MF=(E,MSG4)             ISSUE MESSAGE.                   
                                                                        
*        *-----------------------------------------------------*        
*        * DECRIMENT BEER COUNT AND LOOP UNTIL DONE.           *        
*        *-----------------------------------------------------*        
                                                                        
         BCT   R4,BEERLOOP             LOOP AROUND.                     
                                                                        
*--------------------------------------------------------------*        
*        EXIT PROGRAM SUCCESSFULLY.                            *        
*--------------------------------------------------------------*        
                                                                        
EXIT     DS    0H                                                       
         L     R13,4(,R13)             POINT TO CALLER'S RSA.           
         LM    R14,R12,12(R13)         RESTORE CALLER'S REGISTERS.      
         XR    R15,R15                 ZERO RETURN CODE.                
         BR    R14                     RETURN TO CALLER.                
                                                                        
*--------------------------------------------------------------*        
*        CONSTANTS AND LITERAL POOL.                           *        
*--------------------------------------------------------------*        
                                                                        
RSA      DC    18A(0)                  REGISTER SAVE AREA.              
DWORD    DC    D'0'                    DOUBLE WORD.                     

WORK     DC    XL256'00'               WORK AREA.                       
                                                                        
MSG1     WTO   'XX BOTTLES(S) OF BEER ON THE WALL,',MF=L                
MSG2     WTO   'XX BOTTLES(S) OF BEER.',MF=L                            
MSG3     WTO   'TAKE ONE DOWN, PASS IT AROUND,',MF=L                    
MSG4     WTO   'XX BOTTLE(S) OF BEER ON THE WALL.',MF=L                 
                                                                        
R0       EQU   0                                                        
R1       EQU   1                                                        
R2       EQU   2                                                        
R3       EQU   3                                                        
R4       EQU   4                                                        
R5       EQU   5                                                        
R6       EQU   6                                                        
R7       EQU   7                                                        
R8       EQU   8                                                        
R9       EQU   9                                                        
R10      EQU   10                                                       
R11      EQU   11                                                       
R12      EQU   12                                                       
R13      EQU   13   
R14      EQU   14   
R15      EQU   15   
         END   ,```