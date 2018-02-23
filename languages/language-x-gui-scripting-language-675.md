
## Language X-GUI scripting language ##
---
- Author: Marinus Oosters
- Date: 05/19/05
- Info: n/a
- Score:  (3.01 in 112 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-x-gui-scripting-language-675.html
---

```; 99.xsf
; Author: Marinus Oosters
; 99 Bottles of Beer in the X-GUI scripting language
; X-GUI can be found at:
; http://www.sepent.com/prog/basic/bguios/osreview.aspx?id=xgui
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;


SECTION INFO
WINX1 = 0
WINY1 = 0
WINX2 = 259
WINY1 = 116
WINTL = "99 bottles of beer"
END

SECTION REFRESHED
PRN 2,2,"Next>>",0,7
3DBOX 0,0,52,17,0,1,-1
PRN 1,20,"  ",7,7
PRN 1,20,BOTTLES%,0,7
PRN 24,20,W$,0,7
PRN 1,38,"  ",7,7
PRN 1,38,BOTTLES%,0,7
PRN 24,38,B$,0,7
PRN 1,56,T$,0,7
MOV V%,BOTTLES%
SUB V%,1
PRN 1,74,"  ",7,7
PRN 1,74,V%,0,7
PRN 24,74,X$,0,7
END

SECTION LOOPED
CMP BOTTLES%,0
JNE CONTINUE
MBX "No more bottles of beer on the wall!","Out of beer","Buy more","Stop drinking",R%
CMP R%,1
JE MORE
SYSTEM
MORE:
MOV BOTTLES%,99
CONTINUE:
MBP X%,Y%,B%,1
CMP X%,0
JB NOCLICK
CMP X%,52
JA NOCLICK
CMP Y%,0
JB NOCLICK
CMP Y%,17
JA NOCLICK
SUB BOTTLES%,1
CMP BOTTLES%,9
JNE NOCLICK
LINE 0,0,259,116,7,3
NOCLICK:
PRN 2,2,"Next>>",0,7
3DBOX 0,0,52,17,0,1,-1
PRN 1,20,"  ",7,7
PRN 1,20,BOTTLES%,0,7
PRN 24,20,W$,0,7
PRN 1,38,"  ",7,7
PRN 1,38,BOTTLES%,0,7
PRN 24,38,B$,0,7
PRN 1,56,T$,0,7
MOV V%,BOTTLES%
SUB V%,1
PRN 1,74,"  ",7,7
PRN 1,74,V%,0,7
PRN 24,74,X$,0,7
END

SECTION CLOSED
MBX "Hey! You still have to pay! Come back!","","No way!","",R%
END

SECTION DATA
W$ "bottles of beer on the wall,"
B$ "bottles of beer,"
T$ "Take one down, pass it around"
X$ "bottles of beer on the wall."
V% 0
X% 0
Y% 0
B% 0
R% 0
BOTTLES% 99
END```