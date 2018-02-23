
## Language Sbasic ##
---
- Author: Bob Hansen
- Date: 11/18/05
- Info: http
- Score:  (2.91 in 11 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-sbasic-946.html
---

```var n as Int
var t as Int		//Time delay between line prints (1000 = 1 second)
var vBottle as String

t=20

For n = 99 downto 1
    If n=1 Then vBottle = " bottle" else vBottle = " bottles" 
    WriteLn(n + vBottle  + " of beer on the wall,")
    Loiter(t)
    WriteLn(n + vBottle  + " of beer,")
    Loiter(t)
    WriteLn("Take one down and pass it around,")
    Loiter(t)
    WriteLn(n + vBottle  + " of beer on the wall." + @NewLine() )
    Loiter(t)
Next

WriteLn("......hic.........hic, hic..........hic")
WriteLn("Set 'em up again, Sam")```