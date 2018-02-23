
## Language Run BASIC ##
---
- Author: Brent Thorn
- Date: 02/05/07
- Info: http
- Score:  (2.94 in 17 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-run-basic-1391.html
---

```'** 99 Bottles of Beer in Run BASIC
'** A Web development tool for Windows, Mac OS X, and Linux.
'** This example dynamically generates a Web page of lyrics.

' Define some constants.
q$ = Chr$(34)
BeerOnTheWall$ = " of beer on the wall"
Beer$ = " of beer!"

' Close the "monospaced" div.
Html "</div>";

' Let the lyrics scroll.
Html "<div style=";q$;"border:1px solid; height:25em; padding:.5em; overflow:auto;";q$;">";

' Generate the lyrics...
For bottle = 99 To 1 Step -1

  ' start paragraph
  Html "<p>";

    ' line 1
    Print Bottles$(bottle) ; BeerOnTheWall$ ; ". " ;
    Print Bottles$(bottle) ; Beer$

    ' line 2
    Print "Take one down and pass it around. " ;
    Print Bottles$(bottle-1) ; BeerOnTheWall$ ; "!" ;

  ' end paragraph
  Html "</p>";

Next bottle

' Last lines...
Html "<p>";
  Print Bottles$(0) ; BeerOnTheWall$ ; ". " ;
  Print Bottles$(0) ; Beer$
  Print "Go to the store and buy some more. " ;
  Print Bottles$(99) ; BeerOnTheWall$ ; "!" ;
Html "</p></div>";

End

' "Bottles$()" takes a number of bottles and 
' returns an appropriate description of them.
Function Bottles$( Bottles )
  Select Case Bottles
    Case    0: Bottles$ = "No more bottles"
    Case    1: Bottles$ = "1 bottle"
    Case Else: Bottles$ = Bottles ; " bottles"
  End Select
End Function```