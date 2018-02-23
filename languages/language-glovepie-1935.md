
## Language GlovePIE ##
---
- Author: Miff Falden
- Date: 12/16/08
- Info: http
- Score:  (3.00 in 3 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-glovepie-1935.html
---

```// 99 Bottles of Beer
// Rendered painstakingly in GlovePIE
// by Miff Falden.  <http://www.furaffinity.net/user/miffthefox>
//
// Since GlovePIE is not a procederual language,
// this program abuses macros to get the job done.
//
// This program is licensed under a Creative Commons Attribution 3.0 Unported License
// http://creativecommons.org/licenses/by/3.0/
//


// This initial macro is used to print the welcome statement and
// initilize var.Bottles.
If True Then
DebugPrint ("")
DebugPrint ("")
DebugPrint ("99 Bottles of Beer")
DebugPrint ("Rendered painstakingly in GlovePIE")
DebugPrint ("___________________________________________")
var.Bottles = 99
// Wait 999 days so that this macro does not loop.
// (Within a reasonable timeframe)
Wait 999 Days
End If

// This is the start of a second macro
// that runs when var.Bottles > 0.
If var.Bottles > 0 Then

// Print a blank line every iteration.
DebugPrint ("")

// Inside a macro, If statments function as in other languages.
If var.Bottles > 2 Then
DebugPrint (var.Bottles + " bottles of beer on the wall, " + var.Bottles + " bottles of beer.")
Dec(var.Bottles) // Decrease var.Bottles by 1
DebugPrint ("Take one down and pass it around, " + var.Bottles + " bottles of beer on the wall.")
Else If var.Bottles = 2 Then
// The last three verses are so irregular, so they've just been printed here.
// (Yes, I know it's cheating, but they're fringe cases!)
DebugPrint("2 bottles of beer on the wall, 2 bottles of beer.")
DebugPrint("Take one down and pass it around, 1 bottle of beer on the wall.")
DebugPrint("")
DebugPrint("1 bottle of beer on the wall, 1 bottle of beer.")
DebugPrint("Take one down and pass it around, no more bottles of beer on the wall.")
DebugPrint("")
DebugPrint("No more bottles of beer on the wall, no more bottles of beer.")
DebugPrint("Go to the store and buy some more, 99 bottles of beer on the wall.")
DebugPrint("")
DebugPrint("")

ExitProgram // We're done here, terminate the script.
End If // End inner If

End If // End macro```