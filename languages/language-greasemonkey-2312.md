
## Language Greasemonkey ##
---
- Author: Aaron Boodman
- Date: 02/13/10
- Info: http
- Score:  (2.93 in 15 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-greasemonkey-2312.html
---

```GM_xmlhttpRequest({
    method: 'GET',
    url: 'http://99-bottles-of-beer.net/lyrics.html',
    onload: function (e) {
        alert(99 + e.responseText.split('p>99')[1].split('</d')[0].replace(/<[^>]*>/g, '\n'))
    }
})```