
## Language Esofunk ##
---
- Author: Anonymous
- Date: 04/20/05
- Info: http
- Score:  (3.00 in 15 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-esofunk-239.html
---

```See http://www.azstarnet.com/~jeffryj/esofunk.html

'label, offset, memory positions used
int N  0
int X1 1
int X2 2
int X3 3
io     3
N=99
until N<=0 {
  call NUM : call SONGA : call SONGB
  output ",",0Dh,0Ah
  call NUM : call SONGA
  output ".",0Dh,0Ah,"Take one down, pass it around,",0Dh,0Ah
  N-=1
  call SONGA : call SONGB
  output ".",0Dh,0Ah
}
goto END
*NUM {
  X1=N : X2=X1 : X2/=10 : X3=X2 : X3*=10 : X1-=X3
  X1+="0" : X2+="0"
  output X1,X2
}
*SONGA { output " bottles of beer" }
*SONGB { output " on the wall" }
*END
'#AB,<CR>#AC#AB.<CR>
'99 bottles of beer on the wall,
'99 bottles of beer.
'Take one down, pass it around,
'98 bottles of beer on the wall.```