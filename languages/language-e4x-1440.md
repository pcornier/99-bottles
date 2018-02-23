
## Language E4X ##
---
- Author: Ray Djajadinata
- Date: 04/07/07
- Info: http
- Score:  (3.00 in 17 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-e4x-1440.html
---

```// get the lyrics page. Rhino readUrl() method is particularly
// convenient.
var rawLyrics = readUrl("http://99-bottles-of-beer.net/lyrics.html");

// the html lyrics page (http://99-bottles-of-beer.net/lyrics.html) 
// is not well-formed, so we have to replace <br> with <br/>
var wellFormedRawLyrics = rawLyrics.replace(/<br>/gi, "<br/>");
var xmlLyrics = new XML(wellFormedRawLyrics);

// set the default namespace for convenience--don't hardcode
default xml namespace = xmlLyrics.namespace();

// First, we look for any elements in the page that contains an element 
// whose text starts with "99 bottles of beer". 
var songVerses = xmlLyrics..*.(/^99 bottles of beer/.test(p.text()));

// Then we print each verse, adding newlines as necessary
for each(var verse in songVerses.children()) { 
	var verseText = verse.text().toString().replace("\.", ".\n");
	print(verseText + "\n");
}```