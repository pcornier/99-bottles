
## Language Profan ##
---
- Author: Rohit Vishal Kumar
- Date: 04/20/05
- Info: n/a
- Score:  (3.02 in 206 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-profan-564.html
---

```'--------------------------------------------------------------------
'SOURCE CODE TITLE:  99 Bottles of beer on the wall
'--------------------------------------------------------------------
'AUTHOR NAME:        Rohit Vishal Kumar
'--------------------------------------------------------------------
'WEB ADDRESS:        http://www.angelfire.com/nb/neeraja-rohit/
'--------------------------------------------------------------------
'EMAIL ADDRESS:      rohitvk"AT"lycos"DOT"com
'--------------------------------------------------------------------
'SOURCE DATED:       26 January 2002
'--------------------------------------------------------------------
'SOURCE STATUS:      Public Domain
'--------------------------------------------------------------------
'DESCRIPTION:        This source code was developed as my first
'                    learning attempt at ProFan 3.3.
'                    Use it to learn ProFan 3.3.
'                    You might start liking the language :-)
'--------------------------------------------------------------------
'REQUIREMENTS:       Nothing Specific
'--------------------------------------------------------------------
'CREDITS:            Developers of Profan - It certainly makes prog-
'                    ramming a lot of fun
'--------------------------------------------------------------------

' Defining the counter to be used in the Program
DECLARE X%, Y%

' Creating the window
WINDOW 20,20 - 400,400

' Assigning the Title of the Windows
WINDOWTITLE "99 Bottles of Beer on the Wall"

' Printing the Welcome Message on the Screen
PRINT "Welcome to 99 Bottles of Beer..."
PRINT
PRINT "Programmed By - "
PRINT "Rohit Vishal Kumar"
PRINT "Flat No: B-21/11"
PRINT "E.C.T.P. Phase - IV, Type - B"
PRINT "Calcutta - India"
PRINT "Pin : 700 107"
PRINT "Phone : (91-33) 443-5858"
PRINT "Email: rohitvkAThotmailDOTcom"
PRINT
PRINT "Please Press Any Key to Run the Program..."

'Wait for the User to Press Any Key
WAITKEY

' Initialize the variables to be used
LET X% = 1
LET Y% = 99

' Use the While Loop - While X is less than 101
' Note: 101 is used to make the counter go down to zero and print 
' going to store message

WHILE @LT(X%, 101)

  ' Write the Lyrics
  PRINT Y%," bottles of beer on the wall"
  PRINT Y%," bottles of beer..."
  PRINT "Take one down and pass it around..."

  ' Subtract X from 100
  LET Y%=@SUB(100,X%)

  ' The IF Loop - 1. If Y = 1 then say bottle instead of bottles
  ' The IF Loop - 2. If Y = 0 then go to the store
  ' The IF Loop - 3. ELSE Print the message
  IF @EQU(Y%,1)
    PRINT Y%," beer bottle on the wall."
  ELSEIF @EQU(Y%,0)
    PRINT
    PRINT "Now there are none....."
    PRINT "I need some more ......."
    PRINT "I am going to the store ... hic :-)"
  ELSE
    PRINT Y%," beer bottles on the wall."
  ENDIF
  PRINT

  'Increment X by One
  LET X%=@ADD(X%,1)
WEND

'Wait for a key press from the user
WAITKEY

'Show the message box with Okay Button
MESSAGEBOX "Thank you very much for Drinking Along with Me...",\
           "Shoot...Hic...Shut Program",64

'Finally End the Program
END```