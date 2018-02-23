
## Language DBase 2000 ##
---
- Author: Anonymous
- Date: 04/20/05
- Info: n/a
- Score:  (3.00 in 10 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-dbase-2000-201.html
---

```//
// Generated on 10/11/2002
//
parameter bModal
local f
f = new _9Form()
if (bModal)
   f.mdi = false // ensure not MDI
   f.readModal()
else
   f.open()
endif

class _9Form of FORM
   with (this)
      onClose = {;form.Release()}
      height = 22.1818
      left = -0.1429
      top = -0.0455
      width = 109.8571
      text = "99 Bottles of Beer"
   endwith

   this.EDITOR1 = new EDITOR(this)
   with (this.EDITOR1)
      height = 20
      left = 2
      top = 0.5
      width = 107
      value = ""
   endwith

   this.PUSHBUTTON1 = new PUSHBUTTON(this)
   with (this.PUSHBUTTON1)
      onClick = class::PUSHBUTTON1_ONCLICK
      height = 1.5
      left = 1
      top = 20.5
      width = 107
      text = "Start"
      borderStyle = 7	// Client
   endwith

function PUSHBUTTON1_onClick
form.Editor1.Value = ""
form.suffix = "s "
for i = 99 to 1 step -1
   if i = 1
      form.suffix = "  "
   endif
   form.num = transform(i,"999") + " "
   form.num2 = transform(i - 1,"999") + " "
   form.Editor1.Value = form.Editor1.Value + form.num + "bottle" +;
      form.suffix + "of beer on the wall, " +;
      form.num + "bottle" + form.suffix +;
      "of beer. Take one down and pass it around, "+;
      iif(i > 1,form.num2 + "bottle" + iif(i > 2,form.suffix," "),"No more bottles ") + ;
      "of beer on the wall." +;
      chr(13)
next
form.Editor1.Value = form.Editor1.Value + " No more bottles of beer on the wall, " + chr(13) + ;
   " no more bottles of beer. " + chr(13) +;
   " Go to the store and get some more." + chr(13) +;
   " 99 bottles of beer on the wall"
return
endclass```