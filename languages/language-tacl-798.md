
## Language TACL ##
---
- Author: Rick Bielawski
- Date: 07/16/05
- Info: http
- Score:  (2.40 in 10 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-tacl-798.html
---

```?tacl routine
== The classic beer song in TACL as implemented by Rick Bielawski 
== Tandem Advanced Command Language is proprietary to 
== Tandem Guardian/NSK systems aka HP NonStop servers.
{ You used to be able do this at the Tandem office on Beer Bash night }
#frame
  #push :bottles
  [#if [#argument/value :bottles/number/minimum 1,maximum 999/ end] = 2
    |then| #set :bottles 99  { default to 99 bottles }
  ]
  [#def :to_text routine |body|
    #frame
      #push :num :tens :hundreds :part0 :part1 :part2 :result
      [#if [#argument/value :num/number/minimum 0,maximum 999/
                                 otherwise] = 1
        |then|
          #set :hundreds [#compute :num / 100]
          #set :num [#compute :num - (:hundreds * 100)]
          #set :tens [#compute :num / 10]
          #set :num [#compute :num - (:tens * 10)]
          #set :part0 [#case [:hundreds]
                        |0|
                        |Otherwise|[:to_text [:hundreds]] hundred
                      ]
          #set :part1 [#case [:tens]
                        |0|
                        |1|[#set num [#compute :num + 10]]
                        |2|twenty
                        |3|thirty
                        |4|forty
                        |5|fifty
                        |8|eighty
                        |Otherwise|[:to_text [:tens]]ty
                      ]
          #set :part2 [#case [:num]
                        |0|         |8|eight    
                        |1|one      |9|nine     
                        |2|two      |10|ten     
                        |3|three    |11|eleven  
                        |4|four     |12|twelve  
                        |5|five     |13|thirteen
                        |6|six      |15|fifteen 
                        |7|seven    |18|eighteen
                        |otherwise|[:to_text [#compute :num - 10]]teen
                      ]
          #set :result [:part0] [:part1]  == double #set prevents double
          #set :result [:result] [:part2] == space when part1 is empty
        |else|
          #set :result [[#rest]]
      ]
      #set :part1 [#shiftstring/up/[#charget :result 1 for 1]]
      #chardel :result 1
      #result [:part1][#shiftstring/down/[:result]]
    #unframe
  ]
  [#loop
    |while|:bottles > 1
    |do|
      #output [:to_text :bottles] bottles of beer on the wall.
      #output [:to_text :bottles] bottles of beer.
      #output Take one down.  Pass it around.
      #set :bottles [#compute :bottles - 1]
      [#if :bottles = 1
        |then|#output [:to_text :bottles] more bottle of beer on the wall.
        |else|#output [:to_text :bottles] bottles of beer on the wall.
      ]
      #output
  ]
  [#if :bottles = 1
    |then|
     #output [:to_text :bottles] bottle of beer on the wall.
     #output [:to_text :bottles] bottle of beer.
     #output Take it down.  Pass it around.
     #set :bottles [#compute :bottles - 1]
  ]
  #output No more bottles of beer on the wall.
#unframe```