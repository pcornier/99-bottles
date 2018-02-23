
## Language PLZ ##
---
- Author: Kari Kieloaho
- Date: 01/02/08
- Info: http
- Score:  (2.00 in 1 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-plz-1657.html
---

```BEER module

! plz version of http://99-bottles-of-beer.net
  author: kari kieloaho
  version: 2
  status: tested and works perfectly
!

constant
    CONOUT := 2       ! Console output device !

external
    PUTINTEGER   procedure (unit byte, num integer)
    PUTSTRING    procedure (unit byte, ptr ^byte) 
    NUMFIELDSIZE byte

internal
   putline procedure (num1 integer, str1 ^byte, num2 integer, str2 ^byte)
   entry
      NUMFIELDSIZE := 0   ! No padding with spaces !

      if num1 > 0 then
        PUTINTEGER (CONOUT, num1)
      fi
      PUTSTRING (CONOUT, str1)
      if num2 > 0 then
        PUTINTEGER (CONOUT, num2)
      fi
      PUTSTRING (CONOUT, str2)
   end putline

        
global
    main procedure
    local  beers integer

    entry
       beers := 99
       do
         if beers = 0 then
           putline (-1,  #'No more bottles of beer on the wall, /', 
                    (-1), #' no more bottles of beer.%r/')
           putline (-1, #'Go to the store and buy some more, /', 
                    99, #' bottles of beer on the wall.%r/')
           exit
         else
           if beers = 1 then
             putline (beers,  #' bottle of beer on the wall, /', 
                      beers, #' bottle of beer.%r/')
             putline (-1, #'Take one down and pass it around, /', 
                      (-1), #'no more bottles of beer on the wall.%r%r/')
           else
             if beers = 2 then
               putline (beers,  #' bottles of beer on the wall, /', 
                        beers, #' bottles of beer.%r/')
               putline (-1, #'Take one down and pass it around, /', 
                        beers-1, #' bottle of beer on the wall.%r%r/')
             else
               putline (beers,  #' bottles of beer on the wall, /', 
                        beers, #' bottles of beer.%r/')
               putline (-1, #'Take one down and pass it around, /', 
                        beers-1, #' bottles of beer on the wall.%r%r/')
             fi
           fi
         fi

         beers := beers-1
       od
    end main

end BEER```