
## Language Biferno ##
---
- Author: Dalian IXIA
- Date: 01/29/11
- Info: http
- Score:  (3.33 in 3 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-biferno-2587.html
---

```<?biferno
    for(i=99; i+1; i--){
        j = i ? i.ToString() : "No more"
        k = i > 1 ? (i-1).ToString() : (i ? "no more" : "99")
        s = i != 1 ? "s" : ""
        $(j + " bottle" + s + " of beer on the wall, " + j.UpToLower() + " bottle" + s + " of
beer.<br>\n"
        + (i ? "Take one down and pass it around" : "Go to the store and buy some more")
        + ", " + k + " bottle" + (k != "1" ? "s" : "") + " of beer on the wall.<br><br>\n")
    }
?>```