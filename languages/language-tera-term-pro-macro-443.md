
## Language Tera Term Pro Macro ##
---
- Author: Lance Yamada
- Date: 04/20/05
- Info: n/a
- Score:  (3.00 in 7 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-tera-term-pro-macro-443.html
---

```; 1. Open Tera Term Pro (free VT100 emulator)
; 2. Control -> Macro
; 3. choose 99b.ttl
; 
; it will run even if you close the app, to kill prematurely please open 
; taskmanager and kill the ttpmacro.exe
;
; 99 Bottles of Beer macro for Tera Term
; by Lance Yamada

for i 99 1
	j = i - 1
	int2str istr i
	int2str jstr j
        strconcat istr ' bottles of beer on the wall,'
	strconcat jstr ' bottles of beer on the wall!'

	if i = 1 then
		messagebox '1 bottle of beer on the wall,' 'Tera Term'
		messagebox 'time to get more beer!' 'Tera Term'
	else
		messagebox istr 'Tera Term'
		messagebox 'take one down pass it around,' 'Tera Term'
		messagebox jstr 'Tera Term'
	endif
next```