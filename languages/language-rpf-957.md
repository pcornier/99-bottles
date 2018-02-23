
## Language RPF ##
---
- Author: Guenter Laudenklos
- Date: 11/24/05
- Info: http
- Score:  (2.67 in 9 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-rpf-957.html
---

```<<99bottles>>                                                           
                                                                        
   trap                                                                 
   delete                                                               
                                                                        
   let l1 = 99                                                          
   let l2 = ' bottles'                                                  
                                                                        
   loop 99 times                                                        
                                                                        
        write aws * l1 | l2 | ' of beer on the wall,' | l2 | ' of beer' 
        let l1 = l1 - 1                                                 
                                                                        
        select any                                                      
        when l2 eq 9                                                    
             let l2 = 'bottle'                                          
        when l2 gt 0                                                    
             write aws * 'Take one down and pass it around,'            
        when none                                                       
             let l2 = 'No more ' | l2                                   
             write aws * l2 | ' of beer on the wall,' | l2 | 's of beer'
        endsel                                                          
                                                                        
   endloop                                                              

   return
      
: RPF version of 99 bottles of beer     
: programmer: G�nter Laudenklos         
:
: Roscoe Programming Facility is a high-level interactive structured
: programming language of CA-Roscoe a MVS program development system
: Links for more Infos about this Product:
:               
: http://www.ca.com/products/roscoe.htm
: http://www.purdue.edu/sas/sasdoc/Roscoe/ros60UserGuide.pdf```