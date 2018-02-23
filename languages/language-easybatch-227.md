
## Language EasyBatch ##
---
- Author: Philipp Winterberg
- Date: 04/20/05
- Info: http
- Score:  (2.29 in 21 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-easybatch-227.html
---

```' EasyBatch version of 99 Bottles of beer (Bottles.wsb)
' See http://www.gwsoftware.de/easybatch/index.htm
' Philipp Winterberg, http://www.winterbergs.de
'
GLOBALPROZEDUR(main)
	DIM(b;99)
	CONST(@A;STRCAT(" bottle";NUM2CHAR(40);"s";NUM2CHAR(41);" of beer"))	
	CONST(@C;STRCAT(@A;" on the wall"))
	CONST(@D;STRCAT(NUM2CHAR(13);NUM2CHAR(10)))
	CONST(@E;"Take one down, pass it around,")
	CONST(@K;",")
	CONST(@P;".")
	CONST(@T;"99 Bottles of Beer")
DOWHILE(%b%;>;0)
	DISPLAYSHOW(@T;STRCAT(CSTR(%b%);@C;@K;@D;CSTR(%b%);@A;@P;@D))
	WAIT(1)
	DEC(b)
	DISPLAYSHOW(@T;STRCAT(@E;@D;CSTR(%b%);@C;@P;@D))
	WAIT(1)
LOOP()
	DISPLAYCLOSE()
ENDSUB()```