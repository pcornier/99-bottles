
## Language PureBasic ##
---
- Author: Anonymous
- Date: 04/20/05
- Info: http
- Score:  (3.01 in 72 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-purebasic-568.html
---

```; Purebasic version of 99 bottles of beer
; GUI version
; See www.purebasic.com

#WindowID=0
#GadgetID=0

Procedure CreateWindow()
  If OpenWindow(#WindowID, 0, 0, 300, 300,
#PB_Window_ScreenCentered|#PB_Window_SystemMenu|#PB_Window_SizeGadget,
"99 Bottles Of Beer")
    If CreateGadgetList(WindowID())
      ListViewGadget(#GadgetId, 0, 0,
WindowWidth(),WindowHeight(), 0)
    EndIf
  EndIf
EndProcedure

Procedure.s bottle(n)
  If n = 0
      Ret.s =  "No more bottles"
  ElseIf n = 1
      Ret.s = "1 bottle"
  Else
      Ret.s = Str(n) + " bottles of beer"
  EndIf
  
  ProcedureReturn Ret
EndProcedure

CreateWindow()
For i = 99 To 1 Step -1
  AddGadgetItem(0, -1, bottle(i) + " on the wall, " +
bottle(i) + ",")
  AddGadgetItem(0, -1, "take one down, pass it around,
")
  AddGadgetItem(0, -1, bottle(i-1) + " on the wall.")
Next i

Repeat
Until WaitWindowEvent() = #PB_Event_CloseWindow```