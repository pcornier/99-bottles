
## Language AutoHotkey ##
---
- Author: Erik
- Date: 08/27/08
- Info: http
- Score:  (3.00 in 7 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-autohotkey-1857.html
---

```A=0
Loop,99
  B.=(F:=100-++A)(G:=" bottle")(Y:=F=1 ? "":"s")(X:=(Z:=" of beer ")"on the wall")",`n"F G Y Z
. ".`nTake one down and pass it around,`n"(H:=(Y ? F-1:"No more")(D:=G (F=2 ? "" :"s"))X)".`n`n"

B.=H ", no more"D Z ".`nGo to the store and buy some more, "A D X "."
Gui,Add,Edit,w600 h250,% B
Gui,Show
Return
GuiEscape:
GuiClose:
exitApp```