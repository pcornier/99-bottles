
## Language Maple V3 ##
---
- Author: Hill and Burstall
- Date: 04/20/05
- Info: n/a
- Score:  (2.50 in 6 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-maple-v3-376.html
---

```#
# Vanilla (non-graphical) version of 99 Bottles as sung 
# reluctantly by Maple V3, and only under the agreement that it
# will be called on to perform the song properly, in color, and with 
# appropriate animation... someday
#
# Authors: Hill and Burstall (handb@ionet.net)
#
lyrics:=(` Bottle`,` of beer on the wall! ` ,` of beer!  Take`, 
         ` down, pass it around...`):  
for i from 99 by -1 to 3 do   
     print(cat ( i ,lyrics[1],`s`,lyrics[2]), 
           cat(i, lyrics[1],`s`,lyrics[3],` one`,lyrics[4]), 
           cat(i-1,lyrics[1],`s`,lyrics[2]))   
                        od;
print(cat ( i ,lyrics[1],`s`,lyrics[2]), cat(i, lyrics[1],`s`,lyrics[3],` one`,
      lyrics[4]), cat(i-1,lyrics[1],lyrics[2]));
print(cat ( `1` ,lyrics[1],lyrics[2]), cat(`1`, lyrics[1],lyrics[3],` it`,
      lyrics[4]), cat(`0`,lyrics[1],`s`,lyrics[2]));```