
## Language DXL (DOORS Extension Language) ##
---
- Author: Paul Worrall
- Date: 10/06/05
- Info: http
- Score:  (2.30 in 20 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-dxl-(doors-extension-language)-907.html
---

```// Telelogic DOORS(R) Extension Language (DXL) version of 99 Bottles
// Paul Worrall - paul@basilisk.ukfsn.org

int i
for i in 99:1 by -1 do {
    print i " bottle" (i == 1 ? "" : "s") " of beer on the wall, "
    print i " bottle" (i == 1 ? "" : "s") " of beer.\n"
    print "Take one down and pass it around, "
    print ((i - 1) == 0 ? "no more" : (i - 1) "") " bottle" (i-1 == 1 ? "" : "s") 
    print " of beer on the wall\n\n"
}

print "No more bottle of beer on the wall, no more bottles of beer.\n"
print "Go to the store and buy some more, 99 bottles of beer on the wall.\n"```