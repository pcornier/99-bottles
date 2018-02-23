
## Language Dialog ##
---
- Author: Mark Gray
- Date: 04/20/05
- Info: n/a
- Score:  (2.00 in 2 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-dialog-213.html
---

```'Dialog System', a system for developing graphical applications.

# Programmer: Mark Gray - mvg@mfltd.co.uk
# http://www.mfltd.co.uk/
#
# Note: requires version 2.5 of Dialog System.

Form BEER
   Screenset Details
       First-Window WIN1
   End Details

   Form Data
       Group BOTTLE-TEXT-GROUP-1 Vertical Occurs 1
           NUMBER-OF-BOTTLES-1 Integer(2)
           BOTTLE-TEXT-1 Character(28)
           BOTTLE-PUNCTUATION-1 Character(1)
       End Group # BOTTLE-TEXT-GROUP-1

       Group BOTTLE-TEXT-GROUP-2 Vertical Occurs 1
           NUMBER-OF-BOTTLES-2 Integer(2)
           BOTTLE-TEXT-2 Character(17)
       End Group # BOTTLE-TEXT-GROUP-2

           BOTTLE-TEXT-1A Character(31)
           BOTTLE-TEXT-2A Character(19)
           BOTTLE-TEXT-3 Character(30)
           BOTTLE-TEXT-4 Character(34)
   End Data

   Object WIN1
       Type DIALOG-BOX
       Parent DESKTOP
       Start (492,720)
       Size  (1208,1150)
       Display "99 Bottles of Beer"
       Style MODELESS TITLEBAR SYSTEM-MENU
   End Object  #WIN1

   Object BEER-LIST
       Type LIST-BOX
       Parent WIN1
       Start (64,100)
       Size  (1088,800)
       Style DISABLE-HORIZONTAL
   End Object  #BEER-LIST

   Object PB1
       Type PUSH-BUTTON
       Parent WIN1
       Start (416,1040)
       Size  (372,96)
       Display "Close"
   End Object  #PB1

   Global Dialog CASE(OFF)
       Event ESC
           SET-EXIT-FLAG ;
           TERMINATE ;
       End Event # ESC
       Event CLOSED-WINDOW
           SET-EXIT-FLAG ;
           TERMINATE ;
       End Event # CLOSED-WINDOW
       Event BUTTON-SELECTED
           SET-EXIT-FLAG ;
           TERMINATE ;
       End Event # BUTTON-SELECTED
       Event SCREENSET-INITIALIZED
           MOVE " bottles of beer on the wall" BOTTLE-TEXT-1(1) ;
           MOVE " bottles of beer," BOTTLE-TEXT-2(1) ;
           MOVE "Take one down, pass it around," BOTTLE-TEXT-3 ;
           MOVE "Go to the store and buy some more," BOTTLE-TEXT-4 ;
           MOVE 99 NUMBER-OF-BOTTLES-1(1) ;
           BRANCH-TO-PROCEDURE COUNT-BOTTLES ;
       End Event # SCREENSET-INITIALIZED
       Procedure COUNT-BOTTLES
           MOVE NUMBER-OF-BOTTLES-1(1) NUMBER-OF-BOTTLES-2(1) ;
           MOVE "," BOTTLE-PUNCTUATION-1(1) ;
           MOVE BOTTLE-TEXT-GROUP-1 BOTTLE-TEXT-1A ;
           MOVE BOTTLE-TEXT-GROUP-2 BOTTLE-TEXT-2A ;
           INSERT-LIST-ITEM BEER-LIST BOTTLE-TEXT-1A 0 ;
           INSERT-LIST-ITEM BEER-LIST BOTTLE-TEXT-2A 0 ;
           MOVE "." BOTTLE-PUNCTUATION-1(1) ;
           IF= NUMBER-OF-BOTTLES-1(1) 0 END-BOTTLES ;
           INSERT-LIST-ITEM BEER-LIST BOTTLE-TEXT-3 0 ;
           DECREMENT NUMBER-OF-BOTTLES-1(1) ;
           MOVE BOTTLE-TEXT-GROUP-1 BOTTLE-TEXT-1A ;
           INSERT-LIST-ITEM BEER-LIST BOTTLE-TEXT-1A 0 ;
           BRANCH-TO-PROCEDURE COUNT-BOTTLES ;
       End Procedure # COUNT-BOTTLES
       Procedure END-BOTTLES
           MOVE 99 NUMBER-OF-BOTTLES-1(1) ;
           MOVE BOTTLE-TEXT-GROUP-1 BOTTLE-TEXT-1A ;
           INSERT-LIST-ITEM BEER-LIST BOTTLE-TEXT-4 0 ;
           INSERT-LIST-ITEM BEER-LIST BOTTLE-TEXT-1A 0 ;
       End Procedure # END-BOTTLES
   End Dialog
End Form```