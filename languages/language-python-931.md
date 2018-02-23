
## Language Python ##
---
- Author: Schizo
- Date: 11/06/05
- Info: http
- Score:  (3.02 in 485 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-python-931.html
---

```'''A more interesting way to get the lyrics to "99 Bottles of Beer on the Wall", in Python.
Is this considered cheating?'''
              
import re, urllib
print re.sub('</p>', '', re.sub('<br>|<p>|<br/> |<br/>','\n', re.sub('No', '\nNo', 
urllib.URLopener().open('http://www.99-bottles-of-beer.net/lyrics.html').read()[3516:16297])))```