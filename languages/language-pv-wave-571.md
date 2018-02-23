
## Language PV Wave ##
---
- Author: Anonymous
- Date: 04/20/05
- Info: n/a
- Score:  (1.25 in 4 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-pv-wave-571.html
---

```PV-Wave, also known as IDL, is a language designed for visual data analysis.
;
; 99 bottles of beer
; V1
; Author: George M.Sigut  (sigut@bs.id.ethz.ch)
;
; yes, I DO know the second loop could be unrolled
;
ninety_nine = 99
texta = ' bottles of beer'
textb = ' bottle of beer'
textf = ' no more'
;
number1 = strcompress(string(ninety_nine))
text1   = texta
number2 = strcompress(string(ninety_nine-1))
text2   = texta
for i=ninety_nine,3,-1 do begin &$
  print,number1,text1,' on the wall' &$
  print,number1,text1 &$
  print,' you take one down & pass it around' &$
  print,number2,text2 &$
  print &$
  number1 = number2 &$
  number2 = strcompress(string(i-2)) &$
endfor
;
text1 = texta
text2 = textb
for i=2,1,-1 do begin &$
  print,number1,text1,' on the wall' &$
  print,number1,text1 &$
  print,' you take one down & pass it around' &$
  print,number2,text2 &$
  print &$
  number1 = number2 &$
  text1   = textb &$
  number2 = textf &$
  text2   = texta &$
endfor
;```