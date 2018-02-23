
## Language VScript ##
---
- Author: Anonymous
- Date: 04/20/05
- Info: n/a
- Score:  (3.00 in 16 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-vscript-181.html
---

```// BEER.VSC - Beer 1.0
// Developed under Visual IRC '96 1.00rc5a

Name Beer 1.0

// Aliases

Alias BEER
  @l $Bottle=99
  while ( $Bottle > 1 )
    TextOut clBlue $Bottle Bottles of beer on the wall,
    TextOut clBlue   $Bottle Bottles of beer.
    $Bottle--
    TextOut clBlue Take one down, pass it around,
    TextOut clBlue    $Bottle Bottles of beer on the wall.
    TextOut clBlue
  endwhile

  TextOut clRed 1 Bottle of Beer on the wall,
  TextOut clRed    1 Bottle of Beer.
  TextOut clRed Take One Down, Pass it around,
  TextOut clRed    No more bottles of Beer on the wall.

  -@ $Bottle
EndAlias```