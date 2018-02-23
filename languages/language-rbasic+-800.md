
## Language RBasic+ ##
---
- Author: DSig (David Tod Sigafoos)
- Date: 07/18/05
- Info: http
- Score:  (2.91 in 11 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-rbasic+-800.html
---

```function NintyNine_BottlesOfBeer( void )
/*
abstract:	simple rbasic program for the 99bottlesofbeer site
			nothing fancy .. can be run from editor or put
			in a text box .. or simple oswrite to disk
			
			Note .. this source is cross compatible with Advanced Revealtion
			and except for SWAP and function .. compatible with Revelation
			
author:		dsig (David Tod Sigafoos)
date:		17jul05
*/

*--	just equate some items .. 
equ TRUE$ to 1
equ FALSE$ to 0
equ NULL$ to ''
equ CRLF$ to char(13):char(10)

*-	build our default strings .. 
strSong = NULL$
line1 = '%%count1%% bottles of beer on the wall, %%count1%% bottles of beer ...'
line2 = 'take one down and pass it around, %%count2%% bottles of beer on the wall'
endSongLine1 = 'No more bottle of beer on the wall. No more bottles of beer...'
endSongLine2 = 'Go to the store and buy some more...99 bottles of beer.'

*--	simple for/next going backwards.  Use simple replacement text to 
*	stuff correct numbers and text
for bottlesOfBeer = 99 to 0 step -1
	begin case
	case bottlesOfBeer GT 1
		strSong := CRLF$ : line1 : CRLF$ : line2
		swap '%%count1%%' with bottlesOfBeer in strSong
		*	when we hit 2 bottles .. take one down should leave 1 BOTTLE
		if bottlesOfBeer = 2 then
			swap '%%count2%% bottles' with bottlesOfBeer-1:' bottle' in strSong
		end else
			swap '%%count2%%' with bottlesOfBeer-1 in strSong
		end
	case bottlesOfBeer = 1
		strSong := CRLF$:line1 : CRLF$ : line2
		swap '%%count1%% bottles' with bottlesOfBeer:' bottle' in strSong
		swap '%%count2%%' with 'no more' in strSong
	case bottlesOfBeer = 0
		strSong := CRLF$:endSongLine1 : CRLF$ : endSongLine2
	end case
	
	*-- need that space between verses
	strSong := CRLF$
next bottlesOfBeer	
		
return strSong```