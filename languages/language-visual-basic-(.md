
## Language Visual Basic (.NET) ##
---
- Author: Anonymous
- Date: 04/20/05
- Info: n/a
- Score:  (2.26 in 100 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-visual-basic-(.net)-173.html
---

```Step 1: Create a New Console Application and then, add the following code in
the principal Module:

Module Bottles
    Sub Main()
    ' Visual Basic.NET version of 99 Bottles of beer (Bottles.vb)
    ' Fabr�cio Costa, fabricio_costa@msn.com
        Dim Count As Int32
        For Count = 99 To 1 Step -1
            Console.WriteLine(Count & " bottle(s) of beer on the wall, " & Count & " bottle(s) of
beer.")
            Console.WriteLine("Take one down, pass it around, " & (Count - 1) & " bottle(s) of beer
on the wall.")
        Next
    End Sub
End Module```