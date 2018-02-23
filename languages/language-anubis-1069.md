
## Language Anubis ##
---
- Author: David RENE
- Date: 03/02/06
- Info: http
- Score:  (3.02 in 166 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-anubis-1069.html
---

```
 *Project*                             The Anubis Project
   
 *Title*                          99 bottles of beer lyric maker
   
 *Copyright*                          No copyright for that

   
 *Author* David RENE
   
 *Overview*  
   This is the Anubis version of 99 bottles of beer lyric generator. You find more information
   here http://www.99-bottles-of-beer.net/ .

define One showLyric( Int32 bottles ) =
  
  if bottles > 1 then 
    print(integer_to_string(bottles) + " bottles of beer on the wall, " + integer_to_string(bottles)
+ 
          " bottles of beer.\nTake one down and pass it around, " + integer_to_string(bottles - 1)
+
          " bottles of beer on the wall.\n\n") ; 
    showLyric( bottles - 1)
  else if bottles = 1 then 
    print("1 bottle of beer on the wall, 1 bottle of beer. \n" +"
          Take one down and pass it around, no more bottles of beer on the wall.\n\n");
    showLyric (bottles - 1)
  else print("No more bottles of beer on the wall, no more bottles of beer.\n" + 
             "Go to the store and buy some more, 99 bottles of beer on the wall.\n")
.

global define One _99_bottles_of_beer ( List(String) args) =
  if args is                   
  {
       [ ] then showLyric(99), 
       [_ . _] then unique
  }.```