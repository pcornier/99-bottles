
## Language ProvideX ##
---
- Author: Philipp Winterberg
- Date: 04/20/05
- Info: http
- Score:  (2.38 in 21 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-providex-567.html
---

```0010 ! ProvideX version of 99 Bottles of beer (Bottles.bbx)
0015 ! See http://www.pvx.com/down_pages/providex/windows/home.html
0020 ! Philipp Winterberg, http://www.winterbergs.de
0030  
0040 CLEAR    
0042 FOR b=99 TO 1 STEP -1
0050  ? b," bottle(s) of beer on the wall,"
0060  ? b," bottle(s) of beer."
0070  ? "Take one down, pass it around,"
0080  ? b-1," bottle(s) of beer on the wall."+$0A$+$0D$
0090 NEXT
0099 STOP```