
## Language BCX � BASIC to C Transla ##
---
- Author: Joe Smuckatelly
- Date: 06/30/05
- Info: http
- Score:  (3.02 in 117 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-bcx-�-basic-to-c-transla-773.html
---

```'
'BCX sample for 99 Bottles of Beer
'BCX-32: BASIC to C/C++ Translator by Kevin Diggins (c) 1999-2005 Ver 5.06.191
'
'Generates the song lyrics to a listbox.

GUI "BCX99Bottles", PIXELS

$OPTIMIZER ON

CONST cTAKEONEDOWN = "Take one down and pass it around, "
CONST cONTHEWALL = " on the wall"
CONST cFINALVERSE = "Go to the store and buy some more...99 bottles of beer."

SUB Sing99Bottles
	DIM RAW i AS INTEGER
	DIM s AS STRING			'Song Text
	DIM b AS STRING			'nn Bottles Text
	
	For i = 99 to 0 Step -1
		if i = 0 then
			b = "No more"
		else
			b = TRIM$(str$(i))
		end if
		b = b & " Bottle"
		if i <> 1 then
			 b = b & "s"		'Make plural
		end if
		b = b & " of beer"
		
		if i < 99 then
			s = cTAKEONEDOWN & LCASE$(b) & cONTHEWALL & "."
			SendMessage(List1, LB_ADDSTRING, 0, s)		'Take one down....
			SendMessage(List1, LB_ADDSTRING, 0, "")		'Blank line between verses
		end if
		
		s = b & cONTHEWALL & ", " & LCASE$(b) & "."
		SendMessage(List1, LB_ADDSTRING, 0, s)			'nn Bottle(s) of ...
	Next
	' The final verse
  	SendMessage(List1, LB_ADDSTRING, 0, cFINALVERSE)
END SUB

'** Windows
GLOBAL Form1 AS HWND
GLOBAL List1 AS HWND
CONST ID_Form1 = 0
CONST ID_List1 = 1

SUB FORMLOAD
	DIM ListStyle AS INTEGER
	' removed LBS_STANDARD and LBS_SORT from default style for unsorted ListBox
	ListStyle = WS_CHILD | WS_VISIBLE | WS_VSCROLL | WS_TABSTOP | LBS_NOTIFY

	Form1 = BCX_FORM("BCX 99 Bottles of Beer", 10, 10, 500, 470)
	List1 = BCX_LISTBOX("", Form1, ID_List1, 4, 4, 490, 460, ListStyle)
	CENTER (Form1)
	SHOW (Form1)
	Call Sing99Bottles
END SUB

BEGIN EVENTS
	SELECT CASE CBMSG
		CASE WM_SIZE
			DIM RAW xClient% = LOWORD(lParam)-8
			DIM RAW yClient% = HIWORD(lParam)-8
			MoveWindow(List1, 4, 4, xClient%, yClient%, TRUE)
	END SELECT
END EVENTS```