
## Language LANGuard Script ##
---
- Author: 3pixelBob
- Date: 04/20/05
- Info: n/a
- Score:  (2.09 in 11 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-languard-script-352.html
---

```# 99 Bottles of Beer on the Wall...
# by 3pixelBob

integer num_beers

num_beers = 99

while num_beers > 0

      echo( inttostr( num_beers ) + " bottles of beer on the wall," )
      echo( inttostr( num_beers ) + " bottles of beer," )
      echo( "Take one down and pass it around," )
      num_beers = num_beers - 1
      echo( inttostr( num_beers ) + " bottles of beer on the wall." )
      
end while

if num_beers = 0

   echo( "No more beer!", _color_red )

end if```