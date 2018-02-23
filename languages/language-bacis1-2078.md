
## Language Bacis1 ##
---
- Author: Inch
- Date: 04/30/09
- Info: http
- Score:  (3.50 in 2 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-bacis1-2078.html
---

```-- 99 Bottles of beer song in Bacis1 (proprietary language for the Medusa
-- CAD system).
-- Just for illustration purposes it utilises subroutines for printing the bulk
-- of the output.
--
-- Medusa has been developed by a number of companies in the past including
-- Prime, Computervision and PTC. But is currently owned by CAD Schroer.

-- Initial values
let BotCnt=99
let BotStr="bottles"

-- Loop to iterate through the bottles
loop Wall
	-- Print the first line
	gosub 1000
	-- Exit when no more bottles
	break Wall if(BotCnt.eq.0)
	-- Print the second and blank lines
	gosub 2000
endloop Wall

-- Finish up
write "Take one down and pass it around, no more bottles of beer on the wall."
write " "
write "No more bottles of beer on the wall, no more bottles of beer."
write "Go to the store and buy some more, 99 bottles of beer on the wall."

-- Stop
endrun

1000 -- Subroutine to print the first line and decrement the number of bottles
write "@vBotCnt @vBotStr of beer on the wall, @vBotCnt @vBotStr of beer."
let BotCnt=(BotCnt-1)
if(BotCnt.eq.1)then
	let BotStr="bottle"
endif
return

2000 -- Subroutine to print the second line and the blank line
write "Take one down and pass it around, @vBotCnt @vBotStr of beer on the wall."
write " "
return```