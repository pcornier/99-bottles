
## Language Phrogram ##
---
- Author: Joe Maffei
- Date: 10/06/06
- Info: http
- Score:  (2.67 in 3 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-phrogram-1291.html
---

```// 99 Bottles of Beer in Phrogram

Program BottlesOfBeer

  Method Main()

    Define word As String = " bottles"
    Define B As String = "99"
    Define n As Int = 99

    ShowConsole()

    While n >= 1

      ConsoleWriteLine(n+word+" of beer on the wall, "+n+word+" of beer.")
      n = n - 1
      B = ConvertToString(n)
      If n = 1 Then
        word = " bottle"
      End If
      If n = 0 Then
        B = "no more"
        word = " bottles"
      End If
      ConsoleWriteLine("Take one down and pass it around, "+B+word+" of beer on the wall.")
      ConsoleWriteLine("")

    End While

    ConsoleWriteLine("No more bottles of beer on the wall, no more bottles of beer.")
    ConsoleWriteLine("Go to the store and buy some more. 99 bottles of beer on the wall.")

  End Method

End Program```