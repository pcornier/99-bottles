
## Language Clarion ##
---
- Author: Bruce Barrington?
- Date: 07/26/06
- Info: http
- Score:  (2.60 in 5 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-clarion-1220.html
---

```RealBeer  Program

  Include('Equates')

  Map.  !Ask Clarion to include it's own functions.

BigStr cstring(8192)
part1 string(' bottles of beer on the wall, ')
part2 string(' bottles of beer, take one down and pass it around, ')
part3 string(' bottles of beer,')
i     byte
last1 string(' bottle of beer on the wall, ')
last2 string(' bottle of beer, take one down and pass it around, ')
last3 string(' No more bottles of beer.')
cf    equate('<13,10>')

!-----------------------------------------------------------------
!The code below will create a window for the text to be displayed.
!-----------------------------------------------------------------
Window WINDOW('Beer on the Wall.'),AT(,,246,164),GRAY,RESIZE,SYSTEM
      TEXT,AT(0,0),USE(BigStr),FULL,COLOR(COLOR:Blue)
     END

!---------------------
!Start of main section.
!---------------------
  CODE
  open(window)
  accept
   case event()
   of event:openwindow
     do loadbeer
   end
  end

!-------------------------------------------
! Populate the textbox for display
!-------------------------------------------
LoadBeer Routine
  loop i = 99 to 1 by -1
    if i = 1
      BigStr = BigStr & i & part1 & i & part2 & part3 
    else
      BigStr = BigStr & i & part1 & i & part2 & i-1 & part3 & cf
    .
  .```