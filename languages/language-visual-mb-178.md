
## Language Visual MB ##
---
- Author: Michael B�hme
- Date: 04/20/05
- Info: http
- Score:  (2.69 in 13 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-visual-mb-178.html
---

```code:
// Visual MB - http://www.visual-mb.de
// 99 Bottles - by Michael B�hme
//99 Bottles of Beer
[Main].Hide
$Define [Bottles] = "100"
ConsoleCreate
%again%
[Bottles]--
If [Bottles] > "1" then
ConsoleWrite [Bottles] + " bottles of beer on the wall, "
ConsoleWriteln [Bottles] + " bottles of beer."
ConsoleWriteln "Take one down, pass it around, "
Goto %again%
IfEnd

ConsoleWriteln "1 bottle of beer on the wall, 1 bottle of beer."
ConsoleWriteln "Take one down, pass it around, no more bottles of beer on the wall!"```