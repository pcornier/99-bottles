
## Language CONNECT built-in script language ##
---
- Author: Dmitry Terentiev
- Date: 10/15/08
- Info: http
- Score:  (2.50 in 2 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-connect-built-in-script-language-1890.html
---

```take = "take on down and pass it around, "
ofbeer = " of beer"
wall = " on the wall"
cnt = 99

Loop:
GOSUB Gbottle
GOSUB GNum
str = CONCAT(CONCAT(num, bottle), ofbeer)
str = CONCAT(CONCAT(str, CONCAT(wall,  ", ")), CONCAT(str, ".^M"))
GOSUB Cap
PUTSTR(str);
cnt = cnt - 1
GOSUB Gbottle
GOSUB GNum
IF (cnt <> -1) THEN GOSUB Take; GOTO loop
PUTSTR("Go to the store and buy some more, 99 bottles of beer on the wall.")

STOP()

GBottle: bottle = " bottle"
IF (cnt <> 1) THEN bottle = CONCAT(bottle, "s")
RET

GNum: IF (cnt > 0) THEN num = FMTSTR(cnt, "d") ELSE num = "no more"
RET

Cap: str = CONCAT(UPCASE(COPY(str, 1, 1)), DELETE(str, 1, 1))
RET

Take:
str = CONCAT(take, CONCAT(num, CONCAT(bottle, CONCAT(wall, "."))));
GOSUB Cap;
PUTSTR(str)
PUTSTR("^M^M")
RET```