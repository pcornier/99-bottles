
## Language SASL - St Andrews Static Lang. ##
---
- Author: Ian Fowler
- Date: 02/06/08
- Info: n/a
- Score:  (3.00 in 10 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-sasl---st-andrews-static-lang.-1687.html
---

```song 99
where 
   song x =
      bott x 'N'  , otw , ", " ,
      bott x 'n'  , '.' , NL ,
      (x>0)->
          ("Take one down and pass it around, ",
           bott (x-1) 'n'  , otw , ".", 
           NL , NL, 
           song (x-1)  ) 
      ;
           ("Go to the store and buy some more, " ,
            bott 99 'n'  , otw , "." , NL ) 
and  
   bott n opt= 
      (((n=0)->(opt,"o more") ; n ), 
       " bottle", ( (n=1)->();'s' ) , " of beer")
and 
   otw = " on the wall"
?```