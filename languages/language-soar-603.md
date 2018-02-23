
## Language Soar ##
---
- Author: Anonymous
- Date: 04/20/05
- Info: n/a
- Score:  (3.00 in 1 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-soar-603.html
---

```sp {99*bottles*init
     (state <s> ^superstate nil)
-->
     (<s> ^beer-bottles 99)
   }
    

sp {99*bottles*propose*countdown
     (state <s> ^beer-bottles <num>)
     -->
     (<s> ^operator <o> +)
     (<o> ^name countdown
             ^num-bottles <num>)
}

sp {99*bottles*apply*countdown
      (state <s>  ^beer-bottles { <num> > 0 }
                       ^operator <o>)
      (<o> ^name countdown
              ^num-bottles <num>)
      -->
      (write (crlf) <num> | bottles of beer on the wall;  
       | <num> | bottles of beer.  You take one down, you pass it around, 
       | (- <num> 1) | bottles of beer on the wall.|)
      (<s> ^beer-bottles <num> -
                ^beer-bottles (- <num> 1))
}

sp {99*bottles*stop-at-0
     (state <s> ^beer-bottles 0)
     -->
     (write (crlf) |Agent is on strike.  Need more beer.|)
     (halt)
}```