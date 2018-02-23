
## Language Python ##
---
- Author: Eric Moritz
- Date: 01/20/06
- Info: http
- Score:  (2.67 in 43 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-python-1028.html
---

```class Song:
    def __init__(self):
        self.n = 100

    def __iter__(self):
        return self

    def next(self):
        if self.n == 0:
            raise StopIteration
        self.n = self.n - 1
        return self._get_verse(self.n)
    
    def _get_verse(self,n):
        lines = []
        data  = []
        if n > 1:
            data.append(["%s bottles" % n,"%s bottles" % n])
            data.append(["Take one down pass it around","%s bottles" % (n-1)])
        elif n == 1:
            data.append(["%s bottle" % n,"%s bottle" % n])
            data.append(["Take one down pass it around","%s bottles" % "no more"])
        elif n == 0:
            data.append(["No more bottles","no more bottles"])
            data.append(["Go to the store and buy some more","%s bottles" % 99])
            
        lines.append("%s of beer on the wall, %s of beer" % tuple(data[0]))
        lines.append("%s, %s of beer on the wall" % tuple(data[1]))
        lines.append("")
        return "\n".join(lines)

song = Song()
for stanza in song:
    print stanza```