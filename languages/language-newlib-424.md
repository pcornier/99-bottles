
## Language NEWLIB ##
---
- Author: Anonymous
- Date: 04/20/05
- Info: n/a
- Score:  (1.86 in 14 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-newlib-424.html
---

```NEWLIB is a programming aid that operates as a command processor in 
the Time Sharing Option (TSO) environment. (Mostly based on PL/I, 
therefore the similarity.)  It is used at DESY/Hamburg and KEK/Tsukuba.

$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
$   21/02/96 602211216  MEMBER NAME  <<EDTCL  (SPECTRUM)    CLIST   
$ NEWLIB VERSION OF 99 BOTTLES OF BEER                              
$ R.P.HOFMANN F15RPH@DSYIBM.DESY.DE                                 
$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
STORE                                                                
ESC := '%'                                                           
DO N0 = 1 TO 99                                                      
  N1 := 100-%N0                                                      
  IF N1 > 1 THEN                                                     
    IF N0 > 1  SHOW N1||' BOTTLES OF BEER ON THE WALL'               
    SHOW N1||' BOTTLES OF BEER ON THE WALL'                          
    SHOW N1||' BOTTLES OF BEER'                                      
  ELSE                                                               
    SHOW '1 BOTTLE OF BEER ON THE WALL'                              
    SHOW '1 BOTTLE OF BEER ON THE WALL'                              
    SHOW '1 BOTTLE OF BEER'                                          
  ENDIF                                                              
  SHOW 'TAKE 1 DOWN AND PASS IT ALL AROUND'                          
END                                                                  
SHOW '0 BOTTLES OF BEER ON THE WALL'                                 
RESTORE```