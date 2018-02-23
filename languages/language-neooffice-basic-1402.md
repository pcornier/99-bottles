
## Language NeoOffice Basic ##
---
- Author: Fred Sullivan
- Date: 02/22/07
- Info: http
- Score:  (1.33 in 3 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-neooffice-basic-1402.html
---

```Sub Main
  document   = ThisComponent.CurrentController.Frame
  dispatcher = createUnoService("com.sun.star.frame.DispatchHelper")
  dim arg(0) as new com.sun.star.beans.PropertyValue	
  arg(0).Name = "Text"
  for i = 99 to 1 step -1
    s = ""
    if i > 2 then
      bottles1 = "bottles"
      bottles2 = "bottles"
      j = i - 1
    elseif i > 1 then
      bottles1 = "bottles"
      bottles2 = "bottle"
      j = i - 1
    else
      bottles1 = "bottle"
      bottles2 = "bottles"
      j = "No"
    end if
    s = s + i + " " + bottles1 + " of beer on the wall," + chr(10)
    s = s + i + " " + bottles1 + " of beer." + chr(10)
    s = s + "Take one down, pass it around," + chr(10)
    s = s + j + " " + bottles2 + " of beer on the wall." + chr(10)+chr(10)
    arg(0).Value = s
    dispatcher.executeDispatch(document, ".uno:InsertText", "", 0, arg())
  next i
End Sub```