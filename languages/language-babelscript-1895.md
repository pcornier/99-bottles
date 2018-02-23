
## Language babelscript ##
---
- Author: Stefan Zipproth
- Date: 10/25/08
- Info: http
- Score:  (3.00 in 19 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-babelscript-1895.html
---

```query 99 Bottles of Beer as {link}
load {link} as {foundpage}

loop
	find <a href="./{pagename}"> in {foundpage}
	load {link}{pagename} as {poempage}
	
	if {poempage} contains 50 bottles
	
		loop
			find <p>{line}</p> in {poempage}
			
			if {line} contains bottles
				striphtml {line}
				insert {line}{newline}{newline} into {poem}
			endif
		repeat
			
		print {poem}
		save {poem} as poem.txt
	 
		print {newline}Press [enter] to exit.
		pause
		quit
	
	endif
repeat```