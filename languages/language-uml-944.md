
## Language UML ##
---
- Author: Bernd Binder
- Date: 11/17/05
- Info: http
- Score:  (3.20 in 112 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-uml-944.html
---

```UML Sequence Diagram "Lyrics of the song 99 Bottles of Beer"
(x=99)

+--------+                +-----------------------+       +-----------+ 
| Object |                | this : GenerateLyrics |       | SysOutput | 
+--------+                +-----------------------+       +-----------+ 
    :                                :                           :
    :                                :                           :
   +-+                               :                           :
   | |                     1. SetTotalBeers(x)                   :
   | |----------------------------->+-+                          :
   | |                              | | 2. TotalBeers=x          :
   | |                              | |-----+                    :
   | |                              | |     |                    :
   | |                              | |<----|                    :
   | |                              +-+                          :
   | |                               :                           :
   | |                               :                           :
   | |                     3. TakeThemDown()                     :
   | |----------------------------->+-+                          :
   | |                              | |                          :
   | |                              | |4. beers=TotalBeers       :
   | |                              | |   *[beers>1]             : 
   | |                              | |                          :
   | |                              | |-----+                    :
   | |                              | |     |                    :
   | |                              | |     |                    :
   | |                              | +-+<--+                    :
   | |                              |   |                        :
   | |                              |   | <<for>>                :
   | |                              |   |                        :
   | |                              |   |                        :
   | |                              |   | 5. Print(beers + " bottles of
   | |                              |   | beer on the wall, " + beers 
   | |                              |   | + " bottles of beer.\n")
   | |                              |   |---------------------->+-+ 
   | |                              |   |                       | | 
   | |                              |   |                       | | 
   | |                              |   |                       +-+ 
   | |                              |   |                        :
   | |                              |   |                        :
   | |                              |   | 6. Print("Take one down 
   | |                              |   | and pass it around, ") : 
   | |                              |   |---------------------->+-+ 
   | |                              |   |                       | | 
   | |                              |   |                       | | 
   | |                              |   |                       +-+ 
   | |                              |   |                        :
   | |                              |   |                        :
   | |                              |   | 7. Print("beers-1+" bottle
   | |                              |   | of beer on the wall.\n\n") 
   | |                              |   |---------------------->+-+ 
   | |                              |   |                       | | 
   | |                              |   |                       | | 
   | |                              |   |                       +-+ 
   | |                              |   | 8. beers=beers-1       : 
   | |                              |   |-----+                  :
   | |                              |   |     |                  :
   | |                              |   |     |                  :
   | |                              |   +<----+                  :
   | |                              |   |                        :
   | |                              | +-+                        :
   | |                              | |                          :
   | |                              +-+                          :
   | |                               :                           :
   | |                               :                           :
   | |                               :                           :
   | |                9. TakeLastDownAndGoToTheStore()           :
   | |----------------------------->+-+                          :
   | |                              | |                          :
   | |                              | | 10. Print("1 bottle of beer on
   | |                              | | the wall, 1 bottle of beer.\n")
   | |                              | |------------------------>+-+
   +-+                              | |                         | |
                                    | |                         | |
                                    | |                         +-+
                                    | |                          :
                                    | |                          :
                                    | | 11. Print("Take one down and
                                    | | pass it around, no more bottles
                                    | | of beer on the wall.\n\n")
                                    | |------------------------>+-+ 
                                    | |                         | | 
                                    | |                         | | 
                                    | |                         +-+ 
                                    | |                          :
                                    | |                          :
                                    | |                          :
                                    | | 12. Print("No more bottles 
                                    | | of beer on the wall,
                                    | | no more bottles of beer.\n")
                                    | |------------------------>+-+ 
                                    | |                         | | 
                                    | |                         | | 
                                    | |                         +-+ 
                                    | |                          :
                                    | |                          :
                                    | |                          :
                                    | | 13. Print("Go to the store
                                    | | and buy some more, " 
                                    | | + TotalBeers + " bottles of
                                    | | beers on the wall.\n\n)"
                                    | |------------------------>+-+ 
                                    | |                         | | 
                                    | |                         | | 
                                    | |                         +-+ 
                                    | |                          
                                    +-+```