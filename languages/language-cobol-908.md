
## Language Cobol ##
---
- Author: Sumanta Mukhopadhyay
- Date: 10/06/05
- Info: n/a
- Score:  (2.97 in 36 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-cobol-908.html
---

``` Id Division.                                                     
 Program-Id. BotBeer.                                             
 Data Division.                                                   
 Working-Storage Section.                                         
 01  strings.                                                     
     05  buffer                      pic x(80).                   
     05  bb1 value spaces            pic x(15).                   
     05  bb2 value 'bottles of beer' pic x(15).                   
     05  bb3 value 'on the wall'     pic x(11).                   
     05  bb4 value 'Take one down, pass it around, '  pic x(31).  
     05  bb6.                                                     
         10                          pic x(009) value spaces.     
         10                          pic x(117) value             
     'one      two      three    four     five     six      seven 
-    '   eight    nine     ten      eleven   twelve   thirteen'.  
         10                          pic x(054) value             
     'fourteen fifteen  sixteen  seventeeneighteen nineteen'.     
     05  redefines bb6.                                           
         10  bb7 occurs 20           pic x(09).                   
     05  value '              twenty thirty forty  fifty  sixty  s
-              'eventyeighty ninety '.                            
         10  bb8 occurs 10          pic x(07).                    
 01  integers                       binary.                       
     05  i                          pic s9(3).                    
     05  j                          pic s9(3).                    
     05  k                          pic s9(3).                    
     05  l                          pic s9(3).                    
 Procedure Division.                                              
 0.                                                               
     perform varying i from 99 by -1 until i = 1                  
        move spaces to buffer bb1                                 
        move 1 to j                                               
        divide i by 10 giving k remainder l                       
        string bb8(k + 1) delimited space into bb1 pointer j      
        if j > 1                                                  
           then move bb7(l + 1) to bb1(j + 1:)                    
           else move bb7(i + 1) to bb1                            
        end-if                                                    
        move 1 to j                                               
        string bb1 ' ' bb2 ' ' bb3 delimited '  '                 
           into buffer pointer j                                  
        if i < 99                                                 
           move '!' to buffer(j:)                                 
           display bb4 buffer                                     
           display ' '                                            
        end-if                                                    
        string ', ' bb1 ' ' bb2 '!'                               
           delimited '  ' into buffer pointer j                   
        display function upper-case(buffer(1:1)) buffer(2:)       
     end-perform                                                  
     display bb4 'one bottle of beer on the wall!'                
     display ' '                                                  
     display 'One bottle of beer on the wall, one bottle of beer!'
     display 'Take that down, pass it around, '                   
             'no more bottles of beer on the wall!'               
     display ' '                                                  
     display 'No bottle of beer on the wall, '                
             'no more bottles of beer!'                       
     display 'Go to the store and buy some more, '            
             'ninety nine bottles of beer on the wall!'       
     stop run                                                 
     .                                                        
 end program BotBeer.```