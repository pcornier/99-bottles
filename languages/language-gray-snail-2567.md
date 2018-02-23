
## Language Gray Snail ##
---
- Author: Marinus Oosters
- Date: 12/21/10
- Info: http
- Score:  (2.67 in 3 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-gray-snail-2567.html
---

```
POP H L 99
POP S X s
POP X OSTR ""

BEGIN
POP X OSTR "A[OSTR][H][L] bottle[S] of beer on the wall, "
POP X OSTR "A[OSTR][H][L] bottle[S] of beer, "
POP X OSTR "A[OSTR]Take one down and pass it around, "
GOTO MATH 0 0 
NEXT
GOTO CHECKPL 0 0
NEXT2
POP X OSTR "A[OSTR][H][L] bottle[S] of beer on the wall. "
OUTPUT [OSTR]
GOTO BEGIN 0 0

LAST
POP X OSTR "A[OSTR]No more bottles of beer on the wall. "
POP X OSTR "A[OSTR]No more bottles of beer on the wall, "
POP X OSTR "A[OSTR]No more bottles of beer, "
POP X OSTR "A[OSTR]Go to the store and buy some more, "
POP X OSTR "A[OSTR]99 bottles of beer on the wall. "
OUTPUT [OSTR]
GOTO END 0 0

CHECKPL
POP S X s
GOTO NEXT2 [H] 9
GOTO NEXT2 [H] 8
GOTO NEXT2 [H] 7
GOTO NEXT2 [H] 6
GOTO NEXT2 [H] 5
GOTO NEXT2 [H] 4
GOTO NEXT2 [H] 3
GOTO NEXT2 [H] 2
GOTO NEXT2 [H] 1
GOTO NEXT2 [L] 8
GOTO NEXT2 [L] 7
GOTO NEXT2 [L] 6
GOTO NEXT2 [L] 5
GOTO NEXT2 [L] 4
GOTO NEXT2 [L] 3
GOTO NEXT2 [L] 2
GOTO NEXT2 [L] 0
POP S X ""
GOTO NEXT2 0 0

MATH
GOTO L8 [L] 9
GOTO L7 [L] 8
GOTO L6 [L] 7
GOTO L5 [L] 6
GOTO L4 [L] 5
GOTO L3 [L] 4
GOTO L2 [L] 3
GOTO L1 [L] 2
GOTO L0 [L] 1
GOTO RL [L] 0

L8
POP L X 8
GOTO NEXT 0 0
L7
POP L X 7
GOTO NEXT 0 0
L6
POP L X 6
GOTO NEXT 0 0
L5
POP L X 5
GOTO NEXT 0 0
L4
POP L X 4
GOTO NEXT 0 0
L3
POP L X 3
GOTO NEXT 0 0
L2
POP L X 2
GOTO NEXT 0 0
L1
POP L X 1
GOTO NEXT 0 0
L0
GOTO LAST [H] ""
POP L X 0
GOTO NEXT 0 0 

RL
GOTO LAST [H] ""
POP L X 9

GOTO H8 [H] 9
GOTO H7 [H] 8
GOTO H6 [H] 7
GOTO H5 [H] 6
GOTO H4 [H] 5
GOTO H3 [H] 4
GOTO H2 [H] 3
GOTO H1 [H] 2
GOTO HX [H] 1

H8
POP H X 8
GOTO NEXT 0 0
H7
POP H X 7
GOTO NEXT 0 0
H6
POP H X 6
GOTO NEXT 0 0
H5
POP H X 5
GOTO NEXT 0 0
H4
POP H X 4
GOTO NEXT 0 0
H3
POP H X 3
GOTO NEXT 0 0
H2
POP H X 2
GOTO NEXT 0 0
H1
POP H X 1
GOTO NEXT 0 0
HX
POP H X ""
GOTO NEXT 0 0

END```