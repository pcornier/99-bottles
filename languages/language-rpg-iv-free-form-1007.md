
## Language RPG IV Free-Form ##
---
- Author: James Wall
- Date: 01/10/06
- Info: http
- Score:  (3.00 in 19 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-rpg-iv-free-form-1007.html
---

``` ********************************************************************              
 **  99 Bottles of Beer on the Wall *                                              
 * Example Code courtesy of ...                                                    
 * http://www.iseriesnetwork.com/Resources/ClubTech/TNT400/bo400ng/as400scmapi.htm 
 ********************************************************************              
H dftactgrp(*no)                                                                   
H actgrp(*caller)                                                                  
D                 DS                                                               
D idx                            2  0 inz(99)                                      
D idxAlpha                       2A   overlay(idx:1)                               
D F3              c                   x'33'                                        
D sa_norm         c                   x'20'                                        
D sa_highlight    c                   x'22'                                        
D BeerLine1       s             30    inz(' Bottles of beer on the wall, ')        
D BeerLine2       s             17    inz(' Bottles of beer ')                     
D BeerLine3       s             32    inz('Take one down and pass it +             
D                                     around')                                     
D ExitStr         s             43    inz('Press Enter to Continue or +            
D                                     Press F3 to Exit')                           
D txt             s            128                           
D txtlen          s              9b 0 inz(132)               
D err             s              8    inz(x'0000000000000000'
D aid             s              1                           
D lines           s              9b 0 inz(1)                 
D wf1             s              1                           
D wrtn            s              9b 0                        
D ClrScr          PR             9b 0 extproc('QsnClrScr')   
D  mode                          1    options(*nopass) const 
D  cmdbuf                        9b 0 options(*nopass) const 
D  env                           9b 0 options(*nopass) const 
D  error                         8    options(*nopass)       
D WrtDta          PR             9b 0 extproc('QsnWrtDta')   
D  data                        128                           
D  datalen                       9b 0                        
D  fldid                         9b 0 options(*nopass) const 
D  row                           9b 0 options(*nopass) const 
D  col                           9b 0 options(*nopass) const 
D  strmatr                       1    options(*nopass) const 
D  endmatr                       1    options(*nopass) const 
D  strcatr                       1    options(*nopass) const                            
D  endcatr                       1    options(*nopass) const                            
D  cmdbuf                        9b 0 options(*nopass) const                            
D  env                           9b 0 options(*nopass) const                            
D  error                         8    options(*nopass)                                  
D GetAID          PR             1    extproc('QsnGetAID')                              
D  aid                           1    options(*nopass)                                  
D  env                           9b 0 options(*nopass) const                            
D  error                         8    options(*nopass)                                  
D RollUp          PR             9b 0 extproc('QsnRollUp')                              
D  lines                         9b 0                  const                            
D  top                           9b 0                  const                            
D  bottom                        9b 0                  const                            
D  cmdbuf                        9b 0 options(*nopass) const                            
D  env                           9b 0 options(*nopass) const                            
D  error                         8    options(*nopass)                                  
 ************************************************************************************** 
 *                          Mainline                                                    
 ************************************************************************************** 
 /FREE                                                                                  
  wrtn = ClrScr('4' : 0 : 0 : err);                                 
  txt = ExitStr;                                                    
  txtlen = %Len(txt);                                               
  wrtn = WrtDta (txt : txtlen : 0 : 1 : 2 :                         
         sa_norm : sa_norm : sa_highlight : sa_highlight :          
         0 : 0 : err);                                              
  for idx = 99 Downto 1;                                            
    txt = idxAlpha + BeerLine1 + idxAlpha + BeerLine2 + BeerLine3;  
    txtlen = %Len(txt);                                             
    wrtn = WrtDta (txt : txtlen : 0 : 26 : 2 :                      
           sa_norm : sa_norm : sa_norm : sa_norm :                  
           0 : 0 : err);                                            
     wf1 = GetAID (aid : 0 : err);                                  
    If aid = F3;                                                    
      Leave;                                                        
    EndIf;                                                          
    wrtn = RollUp (lines : 2 : 27 : 0 : 0: err);                    
    endfor;                                                         
    *INLR = *ON;                                                    
 /END-FREE```