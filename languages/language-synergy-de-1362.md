
## Language Synergy/DE ##
---
- Author: Chip Camden
- Date: 12/27/06
- Info: http
- Score:  (2.75 in 4 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-synergy-de-1362.html
---

```.main beer99

;Synergy/DE example of 99 bottles

.align
local record
	nmbottles	,D_NATINT, 99	;Native integer, initially 99
	group msg	,a30		;The longest line in the song
	  group msg2	,a18		;The abbreviated form
	    nmalpha	,a2		;Alpha version of the number
	    msg3	,a16, " bottles of beer"
	    the_s	,a1 @msg3+7	;The "s" in "bottles"
	  endgroup
	      		,a12, " on the wall"
	endgroup
.proc
	open(1,o,"TT:")			;Open stdout on channel 1
	nmalpha = nmbottles
	repeat
	  begin
    	    writes(1, msg + ",")
	    writes(1, msg2 + ",")
	    writes(1, "take one down, pass it around,")
	    if (!(nmbottles -= 1))
	      exitloop
	    if (nmbottles == 1)
	      clear the_s
    	    nmalpha = nmbottles
	    writes(1, msg + ".")
	    writes(1, "")		;Skip a line
	  end
	writes(1, "")
	writes(1, "Hey the beer's gone ... I'm outta here.")
	stop
.end```