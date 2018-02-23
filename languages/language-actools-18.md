
## Language ACTools ##
---
- Author: Anonymous
- Date: 04/20/05
- Info: n/a
- Score:  (2.89 in 28 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-actools-18.html
---

```(* ACTools version of 99 bottles of beer *)

// AcTools, being a macro-language, doesn't have an output 
// area of it's own but relies on a "target" application 
// for this. So, for the purposes of this project, I'm using 
// Windows' Notepad to display the output of this program.

// ACTools only works in the Windows 9x/2k/XP environment. 
// To run this macro, you musthave a clean Notepad window 
// open (it does not have to have focus). From within ACTools,
// Press F2 to start the macro. Notepad will be given the 
// focus and the macro will run. Switching the focus away 
// from Notepad before the end will stop the macro.

SetActiveWindow Untitled - Notepad // Our output field

Constants
  Bottles   = 0
  Remain    = 0
  Wait      = 0
  Iteration = 0
End  
  
Procedure CountEm using Count
  Compute Bottles = 100 - $Count
  Compute Remain  =  99 - $Count
  Compute Wait    = $Count * 5

  // Press CTRL-A = select all in Notepad
  Keys ^a 
  If $Bottles > 1
    SayPaste $Bottles bottles of beer on the wall, $Bottles bottles of beer.
    SayPaste Take one down, pass it around, $Remain bottles of beer on the wall.
  Else
    Say 1 bottle of beer on the wall, 1 bottle of beer.
    Say Take one down, pass it around, no more bottles of beer on the wall.
    Say :(
  End
  Compute Iteration = ( {elapsedmsec} - $Iteration ) / 1000
  SayPaste Execution Time: Last Iteration ($Count): $Iteration seconds (Total: {elapsedmsec}
milliseconds).
  SetConst Iteration = {elapsedmsec}
  // Delay $Wait i
  // number of milliseconds to delay between counts (slows down as it counts bottles)
End

While {loopno} < 99 and {activewindow} = Untitled - Notepad
  Call CountEm {loopno}
End

Call CountEm 99```