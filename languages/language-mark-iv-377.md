
## Language MARK IV ##
---
- Author: Michael Passer
- Date: 04/20/05
- Info: n/a
- Score:  (2.94 in 17 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-mark-iv-377.html
---

```BEER    RCDUMMYFD S U   S    T      R                                           
BEER    RFSUBFILE SM4SUBF1                                                      
BEER    ERDATE                                                                  
BEER    AA
BEER    AA   <a href http://www.cstp.umkc.edu/users/mpasser>Michael Passer</a>
BEER    AA
BEER    AA   This program requires one dummy record of input
BEER    AA   (the M4OLD DD) to trigger execution.  Output is
BEER    AA   sent to the first subfile (M4SUBF1 DD).
BEER    AA
BEER    TFBOTTLESZ  3Z      100
BEER    AA                  ----+----1----+- 
BEER    TFBOB      15C      BOTTLES OF BEER                                     
BEER    TFOTW      11C      ON THE WALL                                         
BEER    TFTOD      13C      TAKE ONE DOWN                                       
BEER    TFPIA      14C      PASS IT AROUND                                      
BEER    TFCOMMA     1C      ,                                                   
BEER    TFPERIOD    1C      .                                                   
BEER    TFBLANK     1C                                                          
BEER    PR              GO SUB SING                                             
SING    ERDATE                                         S          100           
SING    PR     TBOTTLESZEQD0                                                    
SING    PR              GS RETURN                                               
SING    PR              GO SUB CHORUS                                           
SING    PR              R TMINUS1Z                        TBOTTLESZ             
SING    PR              GO REQUEST SING                                         
CHORUS  ERDATE                                         S                        
CHORUS  TFMINUS1Z   3Z                                                          
CHORUS  TFBOTTLES   3C                                                          
CHORUS  TFMINUS1    2C                                                          
CHORUS  PR     TBOTTLESZ- D1                              TMINUS1Z              
CHORUS  PR              R TBOTTLESZ                       TBOTTLES              
CHORUS  PR              R TMINUS1Z                        TMINUS1               
CHORUS  E1                              NR SUBFILE     V                        
CHORUS  R1     TBOTTLES                                                         
CHORUS  R1     TBLANK                                                           
CHORUS  R1     TBOB                                                             
CHORUS  R1     TBLANK                                                           
CHORUS  R1     TOTW                                                             
CHORUS  R1     TCOMMA                                                           
CHORUS  E2                              NR SUBFILE     V                        
CHORUS  R2     TBOTTLES                                                         
CHORUS  R2     TBLANK                                                           
CHORUS  R2     TBOB                                                             
CHORUS  R2     TCOMMA                                                           
CHORUS  E3                              NR SUBFILE     V                        
CHORUS  R3     TTOD                                                             
CHORUS  R3     TCOMMA                                                           
CHORUS  R3     TBLANK                                                           
CHORUS  R3     TPIA                                                             
CHORUS  R3     TCOMMA                                                           
CHORUS  E4                              NR SUBFILE     V                        
CHORUS  R4     TMINUS1                                                          
CHORUS  R4     TBLANK                                                           
CHORUS  R4     TBOB                                                             
CHORUS  R4     TBLANK                                                           
CHORUS  R4     TOTW                                                             
CHORUS  R4     TPERIOD                                                          
CHORUS  E5                              NR SUBFILE     V                        
CHORUS  R5     TBLANK```