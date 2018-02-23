
## Language Small Basic ##
---
- Author: David J Dunmore
- Date: 01/31/09
- Info: http
- Score:  (2.50 in 6 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-small-basic-1970.html
---

```'Define Variables - this appears to bey very loosely typed?
bottles = 99
next_bottles = 0
bottle_text = " bottle"
bottles_text = " bottles"
text1 = " of beer"
text2 = " on the wall"
text3 = "Take one down, pass it around"
text4 = "No more"
text5 = "Go to the store and buy some more, 99 "
text_line = " "
full_stop = ". "
comma = ", "

'Loop - 1 iteration per count until we've done all.
For bottles = 99 To 1 Step -1
  next_bottles = bottles - 1
  If bottles = 2 Then
    
     TextWindow.WriteLine(bottles + bottle_text + text1 + text2 + comma + bottles + bottles_text +
text1 + full_stop)
     TextWindow.WriteLine(text3+ " " + next_bottles + bottle_text + text1 + text2 + full_stop)
  Else  
    If bottles = 1 Then
     ' TextWindow.WriteLine(bottles)
     TextWindow.WriteLine(bottles + bottle_text + text1 + text2 + comma + bottles + text1 +
full_stop)
     TextWindow.WriteLine(text3 + comma + text4 + bottles_text + text1 + text2 + full_stop)
     TextWindow.WriteLine(text4 + bottles_text + text1 + text2 + comma + text4 + bottles_text +
text1 + full_stop)
     TextWindow.WriteLine(text5 + bottles_text + text1 + text2 + full_stop)  
   Else 
     'TextWindow.WriteLine(bottles)
     TextWindow.WriteLine(bottles + bottles_text + text1 + text2 + comma + bottles + bottles_text +
text1 + full_stop)
     TextWindow.WriteLine(text3 + " " + next_bottles + bottles_text + text1 + text2 + full_stop)
     EndIf
     EndIf
 EndFor```