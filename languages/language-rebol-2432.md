
## Language Rebol ##
---
- Author: Nicolas
- Date: 06/22/10
- Info: http
- Score:  (3.50 in 4 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-rebol-2432.html
---

```REBOL []

html: read http://99-bottles-of-beer.net/lyrics.html

parse html [  ;parse is a dialect of rebol
	thru "<h2>Lyrics of the song 99 Bottles of Beer</h2>" 
	copy it to "</div> <!-- main -->"
]

replace/all it"<p>" ""
replace/all it"</p>" "^/"
replace/all it"<br/>" "^/"
replace/all it"<br>" "^/"

it: trim it		;trim removes head and tail whitespace
insert find/case it "No more" "^/"		;remove abberations
remove find it " Go to the store"

print it
halt```