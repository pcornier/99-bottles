
## Language X++ ##
---
- Author: Tobias Nystrom
- Date: 04/20/05
- Info: n/a
- Score:  (3.00 in 43 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-x++-69.html
---

```/* 
X++ (Axapta) version of 99 Bottles of beer
Tobias Nystrom, http://www.gangstasoftware.com
*/
static void bottles99()
{
    str         lyrics1, lyrics2, lyrics3;
    str         s = "s";
    int         bottles;
    ;
    lyrics1 = "%1 bottle%2 of beer on the wall%3 ";
    lyrics2 = "%1 bottle%2 of beer. ";
    lyrics3 = "Take one down, pass it around, ";

    for (bottles = 99; bottles >= 1; bottles--)
    {
        info(strFmt(lyrics1, int2str(bottles), s, ","));
        info(strFmt(lyrics2, int2str(bottles), s));
        info(lyrics3);

        if (bottles == 2) s = "";
        if (bottles == 1) s = "s";

        info(strFmt(lyrics1, int2str(bottles - 1), s, "."));
    }
}```