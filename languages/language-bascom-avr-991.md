
## Language BASCOM-AVR ##
---
- Author: CUBErt
- Date: 12/26/05
- Info: http
- Score:  (2.96 in 27 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-bascom-avr-991.html
---

```Dim beer as integer
beer = 99
Main:
Do
	Print beer ; " bottles of beer on the wall, "; beer ;" bottles of beer."
	beer = beer - 1
	print "Take one down and pass it around, "; beer ; " bottles of beer on the wall."
        wait 1
	if beer = 1 then
		print" 1 bottle of beer on the wall, 1 bottle of beer."
		print "Take one down and pass it around, no more bottles of beer on the wall."	
                wait 1
		print "No more bottles of beer on the wall, no more bottles of beer."
		print "Go to the store and buy some more, 99 bottles of beer on the wall."
		beer = 99
        wait 1
        end if
loop
end

'Tried this on the AtMega32 :)```