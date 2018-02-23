
## Language Baan 3GL ##
---
- Author: Stark Springs
- Date: 04/20/05
- Info: n/a
- Score:  (3.25 in 4 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-baan-3gl-78.html
---

```|********************************************************
|* Run this from the Baan shell
|* By Stark Springs, 18th June 2002
|********************************************************
function main()
{
    long wnd,i

    wnd=new.window(22, 80, 1, 1)
    scroll(wnd)
    for i=99 to 1 step -1
        print i, " bottle(s) of beer on the wall,", cr$(), lf$()
        print i, " bottle(s) of beer.", cr$(), lf$()
        print i-1, " bottle(s) of beer on the wall.", cr$(), lf$(2)
        refresh(wnd)
    endfor
    message("")
}```