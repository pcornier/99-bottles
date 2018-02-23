
## Language Open Access IV ##
---
- Author: Alfred Unkrig
- Date: 04/20/05
- Info: n/a
- Score:  (2.93 in 14 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-open-access-iv-517.html
---

```!Open Access IV  Version of 99 Bottles of Beer
!Alfred Unkrig mail a.unkrig@sh-ekd.de 

int bottlesI=99 
str text1S="Cheers !!"
str text2S="Are you still allright, my friend ??" 
bool goOn=true 
window mainS     = size 80 by 24 at 0,0 framed
window mainST    = top 1 in mainS mode title
window mainSB    = bottom 1 in mainS mode prompt 
screen mainS
   put in mainST "Please do not get drunk before finishing all the Beer I spend!" filled
   put in mainSB at 0,0 text1S filled
   put in mainS
   if goOn=true 
      while bottlesI>0 
         put at 0,10 string(bottlesI)&" of Beer on the wall" filled 
         put at 0,11 "Please take one down" filled 
         bottlesI=bottlesI-1 
         get goOn  
         put do clear screen 
         if bottlesI=50 
            put in mainSB at 0,0 text2S filled 
            put in mainS
         end if 
         if bottlesI=0 
            put at 0,10 "No more bottles of beer on the wall" filled 
            put at 0,11 "Please go to the store and buy some more Bottles of Beer" filled 
            put at 0,12 "How many bottles would you like to buy?  " filled 
            get at 20,13 bottlesI 
            if bottlesI>0
               goOn=true
               put do clear screen 
               if bottlesI>50 
                  put in mainSB at 0,0 text1S filled
               else
                  put in mainSB at 0,0 text2S filled
               end if 
               put in mainS 
            else
               goOn=false
            end if 
         end if
      end while
   end if 
end screen 
mainS end
goOn end 
bottlesi end```