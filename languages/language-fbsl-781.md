
## Language FBSL ##
---
- Author: Cpilot
- Date: 07/06/05
- Info: http
- Score:  (3.00 in 34 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-fbsl-781.html
---

```option explicit
#dlldeclare kernel32("Sleep") 
dim %beer
beer = 99
'*99 bottles of beer on the wall*
'*FBSL Scripting Language       *
'*http://forum.fbsl.net/        *

While beer > 0
?
	?beer & " bottles of beer on the wall "_
				& beer & " bottles of beer"

	beer = beer - 1

			?"Take one down and pass it around "_
				& beer & " bottles of beer on the wall"

		Sleep(300)
	cls

		If beer = 0 then

?"No more bottle of beer on the wall. No more bottles of beer..."
?"Go to the store and buy some more...99 bottles of beer."

end if

wend
?
pause```