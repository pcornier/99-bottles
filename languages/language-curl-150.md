
## Language Curl ##
---
- Author: Philipp Winterberg
- Date: 04/20/05
- Info: http
- Score:  (2.70 in 27 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-curl-150.html
---

```|| Curl version of 99 Bottles of beer (Bottles.curl)
|| http://www.curl.com/html/
|| Philipp Winterberg, http://www.winterbergs.de
||
{curl 1.7 applet}
{value
    let b:int=99
    let song:VBox={VBox}
    {while b > 0 do
        {song.add b & " bottle(s) of beer on the wall,"}
        {song.add b & " bottle(s) of beer."}
        {song.add "Take one down, pass it around,"}
        set b = b - 1
        {song.add b & " bottle(s) of beer on the wall."}
    }
    song
}```