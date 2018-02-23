
## Language PV Wave ##
---
- Author: Anonymous
- Date: 04/20/05
- Info: n/a
- Score:  (1.80 in 5 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-pv-wave-570.html
---

```;
; 99 bottles of beer
; V2
;
ninety_nine = 99
texta = ' bottles of beer'
textb = ' bottle of beer'
textf = ' no more'
;
full_text = strarr(1,4,ninety_nine)
;
full_text(0,1,*) = strcompress(string(ninety_nine-indgen(ninety_nine))) + texta
full_text(0,0,*) = full_text(0,1,*) + ' on the wall'
full_text(0,2,*) = ' you take one down & pass it around'
full_text(0,3,0:ninety_nine-2)=full_text(0,1,1:ninety_nine-1)
;
full_text(0,3,ninety_nine-2) = strcompress(1)+textb
full_text(0,0,ninety_nine-1) = full_text(0,3,ninety_nine-2)+' on the wall'
full_text(0,1,ninety_nine-1) = full_text(0,3,ninety_nine-2)
full_text(0,3,ninety_nine-1) = textf+texta
;
print,full_text
;```