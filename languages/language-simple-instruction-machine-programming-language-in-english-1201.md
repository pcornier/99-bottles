
## Language Simple Instruction Machine Programming Language in English ##
---
- Author: Barry Hitchings
- Date: 07/01/06
- Info: n/a
- Score:  (3.01 in 77 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-simple-instruction-machine-programming-language-in-english-1201.html
---

```[::PROGRAM:99 Bottles of beer
[::IO:
SID::KYB
SOD::TTY
SED::NUL
SSD::NUL
]
[::VARS:
A EQL @1    ; set message pointer
B EQL @3    ; set message pointer
C EQL 99    ; assign variable C
D EQL 1     ; assign variable D
E EQL 0     ; assign variable E
]
C FOR 1     ; for C 99 to 1
D FOR 2     ; for D 1 to 2
RMP A       ; reset message pointer	
PRT C       ; print C
CHR SP      ; write ' '
WRT A       ; write [CR]'Bottle'
C TEQ 1     ; is C = 1
SIT         ; skip instruction if true 
CHR As      ; write 's'
WRT A       ; write ' of beer on the wall'
D TEQ 2     ; is D = 2
<           ; instruction block start
IIT	    ; if true
CHR A,      ; write ','
CHR SP      ; write ' '
HLT         ; halt instruction block
IIF         ; if false
CHR A.      ; write '.'
HLT         ; halt instruction block
>           ; instruction block end
LOP         ; repeat D loop
WRT A       ; write [CR]'Take one down and pass it around, '
E EQL C	    ; E = C		
E SUB 1     ; E - 1
E TEQ 0     ; is E = 0
<           ; instruction block start
IIT         ; if true
WRT B       ; write 'No '
HLT         ; halt instruction block
IIF         ; if false
PRT E       ; print E
CHR SP      ; write ' '
HLT         ; halt instruction block
>           ; instruction block end
WRT A       ; write 'more bottle'
E TEQ 1     ; is E = 1
SIT         ; skip instruction if true
CHR As      ; write 's'
WRT A       ; write ' of beer on the wall.'
LOP         ; repeat C Loop
A MAD 1	    ; A = Message pointer @2
WRT A       ; Write 'Go to the shops....'
END         ; End program 

{::DATA:Message Data
@1:T
$$JBottle$$X of beer on the wall$$X$$JTake one down and pass it around, $$X more bottle$$X of beer
on the wall.$$M
@2:T
$$JNo more bottles of beer on the wall. No more bottles of beer.$$JGo to the shop and buy some more,
99 Bottles of beer on the wall.$$J$$M
@3:T
No $$M
$$@
}```