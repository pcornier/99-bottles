
## Language BBx ##
---
- Author: Stephan Wald
- Date: 01/03/11
- Info: http
- Score:  (3.33 in 3 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-bbx-2580.html
---

```0010 REM "99 Bottles of Beer"                                                 
0020 REM "BBx / (Visual) PRO/5 Version - www.basis.com, www.basis-europe.eu"  
0030 FOR BOTTLES=99 TO 2 STEP -1                                              
0040 PRINT BOTTLES," bottles of beer on the wall, ",BOTTLES," bottles of beer."                     
                                                  
0050 PRINT "Take one down and pass it around, ",                              
0060 PRINT BOTTLES-1," bottle",                                               
0070 IF BOTTLES>1 THEN PRINT "s",                                             
0080 PRINT " of beer on the wall."                                            
0090 PRINT 'LF',                                                              
0100 NEXT BOTTLES                                                             
0110 PRINT " 1 bottle of beer on the wall, 1 bottle of beer."                 
0120 PRINT "Take one down, pass it around, no more bottles of beer on the wall."                    
                                                  
0130 PRINT 'LF',                                                              
0140 PRINT "No more bottles of beer on the wall, no more bottles of beer. "   
0150 PRINT "Go to the store and buy some more, 99 bottles of beer on the wall."```