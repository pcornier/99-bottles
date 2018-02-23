
## Language TACL ##
---
- Author: Dirk Grabenkamp
- Date: 04/20/05
- Info: n/a
- Score:  (2.00 in 7 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-tacl-435.html
---

```?TACL ROUTINE
== TACL (Tandem Advanced Command Language)
== This is one 'Shell' scripting language of HP/Compaq NonStop Systems
==   formerly known as Tandem
==
== Dirk Grabenkamp, 25. Sep 2002 (Dirk.Grabenkamp@GMX.DE)
== 
#FRAME
   #PUSH #OUTFORMAT
   #SET  #OUTFORMAT PRETTY
   
   #PUSH NrOfBottles Bottles
   #SET  NrOfBottles 99
   #SET  Bottles bottles
   
   [#LOOP |DO|
      #OUTPUT [NrOfBottles] [Bottles] of beer on the wall, [NrOfBottles] [Bottles] of beer
      #OUTPUT /HOLD/ Take one down and pass it around,
      
      #SET NrOfBottles [#COMPUTE NrOfBottles - 1]
      [#CASE [NrOfBottles]
         |1| #SET Bottles bottle
         |0| #SET Bottles bottles
             #SET NrOfBottles no more
         |OTHERWISE|
      ]
      
      #OUTPUT ~_[NrOfBottles] [Bottles] of beer on the wall.
      |UNTIL| (NrOfBottles '=' "no more")
   ]
#UNFRAME```