
## Language PiXCEL ##
---
- Author: Mike Phillips
- Date: 04/20/05
- Info: n/a
- Score:  (1.50 in 4 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-pixcel-547.html
---

```This is written in the PiXCEL programming language 
available from www.vysor.com

{Pixcl version of 99 bottles of beer}

Initialize:

SetColorPalette(GENERATE)

WinGetActive(Win$)

UseCoordinates(PIXEL)

UseBackGround(OPAQUE,192,192,192)

DrawBackGround

WinLocate(Win$,100,100,520,360,Res)

Title$ = "100 Bottles"

WinTitle(Win$, Title$)

Start:

x = 100

Str(x,x$)

while x <> 1

DrawText(20,90,"Bottles of beer on the wall, bottles of beer ")

Drawtext(192,90,x$)

Drawtext(20,120,"Take one down and pass it around,")

x = x -1

Str(x,x$)

Drawtext(20,150,x$)

Drawtext(40,150,"Bottles of beer on the wall")

Waitinput(100)

Drawtext(387,90," ")

endwhile

Waitinput()

 

Regards  Mike Phillips```