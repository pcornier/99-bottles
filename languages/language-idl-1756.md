
## Language IDL ##
---
- Author: R�diger Kupper
- Date: 04/08/08
- Info: http
- Score:  (2.00 in 1 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-idl-1756.html
---

```Pro beer
   
   ;; Demonstrate IDL's array mapping on the 99-bottles-of-beer lyrics.
   ;; usage:
   ;;   IDL> .compile beer.pro
   ;;   IDL> beer

   numbeer = 99-indgen(99)
   beers   = [strtrim(string(numbeer), 2), "No"]
   bottles = [replicate(" bottles", 98), " bottle", " bottles"]
   doaction= [replicate("Take one down and pass it around, ", 99), "Go to the store and buy some
more, "]
   
   newline = string(10b)+string(13b) 

   print, beers + bottles + " of beer on the wall, " +                                $
          strlowcase(beers) + bottles +" of beer." +                                  $
          newline +                                                                   $
          doaction +                                                                  $
          strlowcase(shift(beers,-1)) + shift(bottles,-1) + " of beer on the wall." + $
          newline
 
   ;; Note the most elegent use of the
   ;; beer-consuming, auto-buying shift function.

End```