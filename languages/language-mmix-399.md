
## Language MMIX ##
---
- Author: Jong-Won Choi
- Date: 04/20/05
- Info: n/a
- Score:  (2.94 in 16 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-mmix-399.html
---

```$ Programmed in a happy hour before our informatics exam about MMIX
$ by Hannes Hannak (hanhan@gmx.de) and Mathias Poths (poths@uni.de)
$ [comments by Thomas R�sner (roesner@informatik.uni-tuebingen.de)]
$ website at http://www.poths.com/99bottles.php *15th of July 2002*
$ Here is another line with exactly the same length as those above.

$ Our fluffy little strings have to live in the boring data segment
        LOC Data_Segment+#100
        GREG    @
A       BYTE    "   Bottle(s) of beer on the wall,",#a,0
        LOC     (@+3)&-4
B       BYTE    "   Bottle(s) of beer.",#a,0
        LOC     (@+3)&-4
C       BYTE    "Take one down, pass it around,",#a,0
        LOC     (@+3)&-4
D       BYTE    "   Bottle(s) of beer on the wall.",#a,#a,0

$ Our code - naturally - wants to sit in a truly executive position
        LOC #100

$ First we give our poor "I'm just a number"-registers a fancy name
i0      IS      $0      Our bottles!
i1      IS      $1      Invariant: there are i1*10+i0 bottles of beer on the
wall
a       IS      $2      Here the pointers to the strings above will reside
b       IS      $3
c       IS      $4
d       IS      $5
offset  IS      $6      This helps us printing 5 instead of 05
t       IS      $255    A sad global register holding nothing but tmp data

$ Second these registers get some very sophisticated initial values
Main    SET     i0,9    99 bottles of beer
        SET     i1,9
        LDA     a,A     Load address of strings
        LDA     b,B     (kindly sponsored by GREG@)
        LDA     c,C
        LDA     d,D

$ Welcome to the MAIN LOOP! Ye all who enter here, abandon all beer
1H      ADDU    t,i0,i1
        BZ      t,0F     i0+i1==0? No beer left. Go away.

$ The next part is about the dark side of MMIX: string manipulation
        ADDU    t,i1,'0' Convert i1 to a ASCII-digit and
        STBU    t,a      write it in our strings.
        STBU    t,b
        ADDU    t,i0,'0' The same for i0,
        STBU    t,a,1    but one byte behind.
        STBU    t,b,1

        SUBU    i0,i0,1  decrement i0 and
        BNN     i0,2F    watch for overflow
        SET     i0,9     and handle it.
        SUBU    i1,i1,1

2H      ADDU    t,i1,'0' again, write our new digits
        STBU    t,d
        ADDU    t,i0,'0' both of them
        STBU    t,d,1

$ While manipulation can be fun better remember to watch the result
        ADDU    t,a,offset      we shall never print a leading zero
        TRAP    0,Fputs,StdOut  bring forth the strings so I can sing them!
        ADDU    t,b,offset
        TRAP    0,Fputs,StdOut
        SET     t,c         <-- this is a boring constant string
        TRAP    0,Fputs,StdOut  we print it anyway

        ZSZ     offset,i1,1     Hm, time to think about a new offset
        ADDU    t,d,offset      so our last line will have a correct one
        TRAP    0,Fputs,StdOut  when printed

$ "Premature optimization is the root of all evil." Donald E. Knuth
        JMP     1B              sing(verse++);

0H      TRAP    0,Halt,0        Sorry, we're closed.```