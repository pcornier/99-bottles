
## Language NSIS ##
---
- Author: Mike Gogulski
- Date: 04/20/05
- Info: http
- Score:  (2.37 in 19 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-nsis-429.html
---

```; 99 bottles of beer for the Nullsoft Scriptable Install System (NSIS)
; By Mike Gogulski <mike@gogulski.com>
; See http://nsis.sourceforge.net/site/index.php 
;
; Save as "99Bottles.nsi", compile, execute, follow prompts

Name "99 Bottles of Beer"
OutFile "99Bottles.exe"

Page instfiles

Section "99 Bottles of Beer"
	StrCpy $R0 99
	loop:
		DetailPrint "$R0 bottles of beer on the wall,"
		DetailPrint "$R0 bottles of beer!"
		DetailPrint "Take one down, pass it around,"
		IntOp $R0 $R0 - 1
		IntCmp $R0 0 done
		DetailPrint "$R0 bottles of beer on the wall!"
	Goto loop
done:

	DetailPrint "No more bottles of beer on the wall!"

SectionEnd

Function .onGUIInit
	StrCpy $R9 "I'm going to sing the wonderful 99 bottles of beer
song!$\r$\n"
	StrCpy $R9 "$R9Press OK to start, then press 'Details' to see
the lyrics."
	MessageBox MB_OK $R9
FunctionEnd```