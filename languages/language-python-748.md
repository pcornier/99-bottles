
## Language Python ##
---
- Author: Emlyn Jones
- Date: 06/13/05
- Info: http
- Score:  (2.69 in 36 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-python-748.html
---

```a,t="\n%s bottle%s of beer on the wall","\nTake one down, pass it around"
for d in range(99,0,-1):print(a%(d,"s"*(not d-1==0))*2)[:-12]+t+a%(d-1 or 'No',"s"*(not d-2==0))```