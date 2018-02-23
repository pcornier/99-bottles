
## Language Mapper (now known as BIS) ##
---
- Author: Peter Alderton
- Date: 08/31/05
- Info: http
- Score:  (3.01 in 88 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-mapper-(now-known-as-bis)-854.html
---

```.bottles of beer                                                                
*===============================================================================
@ldv <bottles>i2=99,<name>a7=bottles .                                          
@brk .                                                                          
@0010: .                                                                        
<bottles>(p) <name>(p) of beer on the wall, <bottles>(p) <name>(p) of beer,     
@if <bottles> > 0 . ;gto 0020 ;.                                                
@dec <bottles> if <bottles> = 0,(0020) ;if <bottles> = 1 ldv <name>=bottle ;.   
Take 1 down, pass it around, <bottles>(p) <name>(p) of beer on the wall.        
                                                                                
@gto 0010 .                                                                     
@0020: .                                                                        
Take 1 down, pass it around, no more bottles of beer on the wall.               
@gto end .```