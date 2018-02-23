
## Language StarBasic ##
---
- Author: Daniel Hanke
- Date: 04/20/05
- Info: n/a
- Score:  (1.83 in 6 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-starbasic-612.html
---

```sub Main
' Ninety-nine bottles of beer in StarBasic
' for usage in StarOffice/OpenOffice
'
' Daniel Hanke
' http://www2.hs-harz.de/~359/
' June 7, 2002
'

	oDesktop = createUnoService("com.sun.star.frame.Desktop")
	sUrl = "staroffice.factory:swriter"
	oDoc = oDesktop.LoadComponentFromURL(sURL,"_blank",0,mNoArgs)
	oText = oDoc.Text
	oCursor = oText.createTextCursor()

	dim bottles
	dim stext
	
	oCursor.CharHeight = 18
	p(oText,"99 bottles of beer")
	oCursor.CharHeight = 12
	for bottles = 99 to 1 step -1
		dim sbottle
		sbottle = cstr(bottles)+iif(bottles=1," bottle"," bottles")
		l(oText,sbottle+" of beer on the wall")
		l(oText,sbottle+" of beer ...")
		l(oText,"Take one down, pass it around,")
		l(oText,iif(bottles=1,"No more bottles",cstr(bottles-1)+_
			iif(bottles-1=1," bottle"," bottles"))+" of beer on the wall")
		p(oText,"")
	next bottles
	p(oText,"Time 2 go home")
end sub

sub l(otext as object,stext as string)
	otext.insertString(oCursor,stext,FALSE)
	otext.insertControlCharacter(oCursor,_
		com.sun.star.text.ControlCharacter.PARAGRAPH_BREAK,FALSE)
end sub

sub p(otext as object,stext as string)
	otext.insertString(oCursor,stext,FALSE)
	otext.insertControlCharacter(oCursor,_
		com.sun.star.text.ControlCharacter.PARAGRAPH_BREAK,FALSE)
end sub```