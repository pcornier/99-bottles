
## Language DM ##
---
- Author: Hiead
- Date: 10/27/07
- Info: http
- Score:  (4.50 in 4 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-dm-1617.html
---

```var/const
	linePause = 12
	endLinePause = 17
	endVersePause = linePause + endLinePause

client/New()
	..()
	var/bottleCt = 99
	var/bottleRef = "99 bottles"
	
	do
		src << "[bottleRef] of beer on the wall,\..."
		sleep(linePause)
		src << " [bottleRef] of <em>beer</em>."
		sleep(endLinePause)
		src << "Take one down and pass it around,\..."
		
		--bottleCt
		if(bottleCt == 0)
			bottleRef = "no more bottles"
		else if(bottleCt == 1)
			bottleRef = "1 bottle"
		else
			bottleRef = "[bottleCt] bottles"
			
		sleep(linePause)
		src << " [bottleRef] of beer on the wall.\n"
		sleep(endVersePause)
	while(bottleCt)
	
	src << "No more bottles of beer on the wall,\..."
	sleep(linePause)
	src << " no more bottles of <em>beer</em>."
	sleep(endLinePause)
	src << "Go to the store and buy some more,\..."
	sleep(linePause)
	src << " 99 bottles of beer on the wall."```