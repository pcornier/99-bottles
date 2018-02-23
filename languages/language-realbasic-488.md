
## Language RealBasic ##
---
- Author: Anonymous
- Date: 04/20/05
- Info: http
- Score:  (2.54 in 26 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-realbasic-488.html
---

```// "99 Bottles of Beer on the Wall" for RealBasic (http://www.realsoftware.com/)
// Written by Uriah Carpenter
// To run add the below code to the "Open" event of a listbox
  
dim bottles as integer
dim plural as string
bottles = 99
plural = "s"
  
do
  me.addRow(str(bottles) + " bottle" + plural + " of beer on the wall, " +
str(bottles) + " bottle" + plural + " of beer.")
  bottles = bottles - 1
  if bottles = 1 then
    plural  = ""
  else
    plural = "s"
  end if
  me.addRow("Take one down, pass it around, " + str(bottles) + " bottle" +
plural + " of beer on the wall.")
loop until bottles = 0```