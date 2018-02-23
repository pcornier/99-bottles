
## Language Assembler (Singer Friden System 10) ##
---
- Author: Walter Lukhaup
- Date: 02/23/11
- Info: http
- Score:  (2.27 in 11 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-assembler-(singer-friden-system-10)-2605.html
---

```* 99 BOOTLES OF BEER 
* SINGER FRIEDEN SYSTEM TEN ASSEMBLER
* 
		ORG 	1000
COUNT	DM	N2	'99'
FSTME	DM	N1	'1'
LIN1	EQU	*(33)
BOT1	DM	C2
		DM	C1	' '
Z1		EQU	*+6(1)	
		DM	C30 'BOTTLES OF BEER ON THE WALL'
LIN2	EQU	*(33)
BOT2	DM	C2	
		DM 	C1	' '
Z2		EQU	*+6(1)
		DM	C30 'BOTTLES OF BEER'
TAKE	DM	C30 'TAKE ONE DOWN AND PASS IT AROUND'
NMORE	DM	C30 'NO MORE BOTTLES OF BEER ON THE WALL" 
*
*
*
LOOP	WC	=C'J',0										NEW LINE ON CRT
		MC	=C'XX',BOT1
		E	COUNT,BOT1
		MC	=C'XX',BOT2
		E	COUNT,BOT2
		W	LIN1(L:LIN1),0
		WC	=C'J'
		W	LIN2(L:LIN2)),0
		WC	=C'J',0
		W	TAKE(30),0
		WC	=C'J',0
		S	=N'1',COUNT
		BLE	BYE
		C	COUNT,=N'1'
		BNE	SKIP
		MC	=C' ',Z1
		MC	=C' ',Z2
SKIP	MC	=C'XX',BOT1
		E	COUNT,BOT1
		W	BOT1(33),0
		B	LOOP
BYE		WC	=C'J',0
		W	NMORE(L:NMORE),0
		EXIT	
		START	LOOP```