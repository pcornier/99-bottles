
## Language Ratfor ##
---
- Author: Martyn Davies
- Date: 05/30/05
- Info: http
- Score:  (2.57 in 7 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-ratfor-714.html
---

```integer beers
integer part

beers=99
part=0

repeat
{
  if(part==0 || part==3)
  {
   if(beers==1)
    print *,'1 bottle of beer on the wall'
   else
     print *,beers,' bottles of beer on the wall'  
     
    if(part==3) 
      print *,'-' 
 }
 else if(part==1)
 {
   if(beers==1)
    print *,'1 bottle of beer'
   else
     print *,beers,' bottles of beer'  
 }
 else
 {
    print *,'take one down, pass it around'
    beers = beers - 1
 }
  part = Mod( part+1, 4 )
  
} until (beers==0 && part==0)

end```