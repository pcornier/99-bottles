
## Language Terse ##
---
- Author: Anonymous
- Date: 04/20/05
- Info: http
- Score:  (2.79 in 34 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-terse-444.html
---

```\\\\\\\\
\ Beer \
\\\\\\\\
\
\   Program to print the lyrics to "99 Bottles of Beer on the Wall"
\   Runs under any version of DOS, 176 byte .COM file.
\
\   Written in TERSE by jim-neil@digital.net (Jim Neil).  TERSE is
\   an x86 specific language that has the same level of control as
\   assembly, with the look-and-feel and ease-of-use of a HLL.
\
\   For more information on TERSE, visit the TERSE website at:
\                      http://www.terse.com

main Group code,data;
Assume cs:main,ds:main;
O Equ <Offset main:>;

code Segment byte;
Org 0100h;

data Segment byte;
  ' m0 =" Bottle$";
  ' m1 =" of Beer on the Wall";
  ' nl =(10,13,'$');
  ' m2 =" of Beer", =(10,13);
  ' m3 ="Take one down and pass it around", =(10,13,'$');
data EndS;

Beer Proc;
  cx = 99;                      \ cx = number to do.
  {                             \ for cx = 99..1, do...
    dx = O(nl); ah = 9; !21h;   \ new line.
    al = cl; =.Bottles;         \ print number and "Bottle(s)".
    dx = O(m1); ah = 9; !21h;   \ output lyric line 1.
    al = cl; =.Bottles;         \ print number and "Bottle(s)".
    dx = O(m2); ah = 9; !21h;   \ output lyric lines 2-3.
    al = cl-; =.Bottles;        \ print number - 1 and "Bottle(s)".
    dx = O(m1); ah = 9; !21h;   \ output lyric line 4.
  }-.;                          \ loop till done...
  !20h;                         \ return to DOS.
Beer EndP;

\\\\\\\\\\\
\ Bottles \
\\\\\\\\\\\
\
\   Bottles prints "n Bottle(s)", controling plural based on the
\   value of n passed in al.
\
\   Entry Conditions:
\       al = n.
\       ah = Scratch;
\       dx = Scratch;
\
\   Exit Conditions:
\       ax = scratch.
\       dx = scratch.

Bottles Proc;
  =ax; =.BinDec;                \ print number of beers.
  dx = O(m0); ah = 9; !21h;     \ output "bottle".
  ax=; al - 1 ? <>              \ if not 1...
  { dl = 's'; ah = 2; !21h; };  \ make it plural.
  .=;                           \ and, return...
Bottles EndP;

\\\\\\\\\\
\ BinDec \
\\\\\\\\\\
\
\   BinDec prints a binary number (0-63h) in al to the screen
\   in decimal with leading zero supression.
\
\   Entry Conditions:
\       ah = scratch.
\       al = number to convert.
\       dx = scratch.
\
\   Exit Conditions:
\       ax = scratch.
\       dx = scratch.

BinDec Proc Near;
  "*; ax + '00'; dh = al;       \ split and convert, dh = save LSB.
  ah - '0' ? <>                 \ if MSB is non-zero...
  { dl = ah; ah = 2; !21h; };   \ then, output MSB.
  dl = dh; ah = 2; !21h;        \ output LSB.
  .=;                           \ and return...
BinDec EndP;

code EndS;
End Beer;```