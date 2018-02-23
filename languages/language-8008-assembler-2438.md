
## Language 8008 Assembler ##
---
- Author: barrym
- Date: 07/06/10
- Info: http
- Score:  (3.47 in 15 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-8008-assembler-2438.html
---

```; Don't change these top four lines if you want to use this file in  ;
; Steve Loboyko's 8008 Emulator (line 0001 must start at byte 220 of ;
; the input file and it doesn't like tab characters either).  Enjoy! ;
;*
0001   000 000                      ;      Beer Song for the Intel 8008 microprocessor
0002   000 000                      ;               by barrym 2010-06-30
0003   000 000                      ; Printing out the official lyrics of the song seems to
0004   000 000                      ; be an 8-bit kind of activity, so I wrote a version
0005   000 000                      ; that runs on the first 8-bit microprocessor ever!
0006   000 000                      ; Functioning 8008 machines were rare in the 1970s, and
0007   000 000                      ; are practically non-existent now, but thanks to a few
0008   000 000                      ; wise men like Steve Loboyko, Jim Kearney, and Bryan
0009   000 000                      ; Blackburn, some hardware, software and documentation
0010   000 000                      ; have survived.
0011   000 000                      ;                
0012   000 000                      ; This program prints the official Beer Song lyrics to
0013   000 000                      ; the console of Steve Loboyko's 8008 Emulator, which
0014   000 000                      ; is found at 'http://juliepalooza.com/sl/8008em.htm'.
0015   000 000                      ; Save this listing with a .lst extension so that the
0016   000 000                      ; emulator can directly load and execute it!  If you
0017   000 000                      ; are one of the lucky few to own a working Mark-8 or
0018   000 000                      ; Scelbi, it would be a trivial exercise to key in the
0019   000 000                      ; 213 bytes and get the output subroutine set properly.
0020   000 000                      ;
0021   000 000                      ; The program assumes that it's alone in the emulator's
0022   000 000                      ; memory, so it doesn't depend on any external system
0023   000 000                      ; calls.  This is my first 8008 program, so I apologize
0024   000 000                      ; for any newbie inefficiencies.
0025   000 000                      ;
0026   000 000                      ; reg a is for char i/o and manipulation
0027   000 000                      ; reg b helps output and integer-to-ascii conversion
0028   000 000                      ; reg c is the beer counter
0029   000 000                      ; reg d is the sub-phrase type
0030   000 000                      ; reg e is another i-to-a helper
0031   000 000                      ; reg h is zeroed because the lyric string is in page 0
0032   000 000                      ; reg l is the string pointer
0033   000 000                      ;
0034   000 000                      ;
0035   000 000                      maxbeer equ  99             ; must be in (0 .. 99)
0036   000 000                      ; -----------------------------------------------------
0037   000 000                      ; main: initialize, sing the song, and halt
0038   000 000                      ; -----------------------------------------------------
0039   000 000  026 143             rst0:   lci  maxbeer        ; c = maxbeer
0040   000 002  015                         rst  1              ; sing the entire song
0041   000 003  000                         hlt                 ; halt
0042   000 004                      ; -----------------------------------------------------
0043   000 004                      ; print everything except for the last sentence
0044   000 004                      ; -----------------------------------------------------
0045   000 004  366                 beerme: lll                 ; print "Take .. around, ";
0046   000 005  106 034 000                 cal  prbob          ; print c;" bott ... wall."
0047   000 010  036 377             rst1:   ldi  -1             ; d = -1
0048   000 012  066 262                     lli  nline          ; print ""
0049   000 014  106 034 000                 cal  prbob          ; print c;" bott ... wall";
0050   000 017  066 215                     lli  comma          ; print ", ";
0051   000 021  106 034 000                 cal  prbob          ; print c;" bott ... beer."
0052   000 024  021                         dcc                 ; c = c - 1
0053   000 025  120 004 000                 jfs  beerme         ; if c >= 0 then beerme
0054   000 030                      ; -----------------------------------------------------
0055   000 030                      ; set up the last sentence and fall through
0056   000 030                      ; -----------------------------------------------------
0057   000 030  066 154                     lli  store          ; print "Go to ... more,";
0058   000 032  026 143                    lci  maxbeer        ; c = maxbeer
0059   000 034                      ; -----------------------------------------------------
0060   000 034                      ; print properly punctuated bottle of beer sub-phrase
0061   000 034                      ; -----------------------------------------------------
0062   000 034  106 137 000         prbob:  cal  puts           ; print the pre string;
0063   000 037  302                         lac                 ; a = c
0064   000 040  260                         ora
0065   000 041  150 077 000                 jtz  prnone         ; if a = 0 then prnone
0066   000 044  016 377                     lbi  -1
0067   000 046  010                 div10:  inb
0068   000 047  024 012                     sui  10
0069   000 051  120 046 000                 jfs  div10          ; b = int (a / 10)
0071   000 054  340                         lea
0072   000 055  301                         lab
0073   000 056  064 260                     ori  "0"|128
0074   000 060  074 260                     cpi  "0"|128
0075   000 062  112 141 000                 cfz  putch          ; if b then print b;
0076   000 065  304                         lae
0077   000 066  004 012                     adi  10
0078   000 070  064 060                     ori  "0"            ; print a mod 10;
0079   000 072  066 225                     lli  bottl
0080   000 074  104 112 000                 jmp  prbott
0081   000 077  066 217             prnone: lli  omore
0082   000 101  006 116                     lai  "N"
0083   000 103  030                         ind
0084   000 104  031                         dcd                 ; if d < 0 then print "N";
0085   000 105  160 112 000                 jts  prbott         ;    else print "n";
0086   000 110  004 040                     adi  32             ; print "o more";
0087   000 112  106 141 000         prbott: cal  putch          ; print " bottle";
0088   000 115  021                         dcc
0089   000 116  110 122 000                 jfz  plural
0090   000 121  060                         inl                 ; if c <> 1 then print "s";
0091   000 122  020                 plural: inc
0092   000 123  106 141 000                 cal  puts           ; print " of beer";
0093   000 126  031                         dcd
0094   000 127  030                         ind                 ; if d <> 0 then
0095   000 130  112 137 000                 cfz  puts           ;    print " on the wall";
0096   000 133  030                         ind                 ; d = d + 1
0097   000 134  053                         rtz                 ; if d = 0 then return
0098   000 135  066 261                     lli  dotnl          ; print ".": return
0099   000 137                      ; -----------------------------------------------------
0100   000 137                      ; puts: emit a hi-bit-terminated string to the display
0101   000 137                      ;       (modifies regs a and b, leaves reg l pointing
0102   000 137                      ;       to the beginning of the next string in memory)
0103   000 137                      ; -----------------------------------------------------
0104   000 137  307                 puts:   lam                 ; grab a string char
0105   000 140  060                         inl                 ; advance the string ptr
0106   000 141  056 000             putch:  lhi  0              ; everything is in page 0
0107   000 143  310                         lba                 ; save original char in b
0108   000 144  064 200                     ori  128            ; set the high bit
0109   000 146  121                         out  0              ;    and send it
0110   000 147  251                         xrb                 ; did we hit the end?
0111   000 150  110 137 000                 jfz  puts           ; if not then keep going
0112   000 153  007                         ret                 ; return
0113   000 154                      ; -----------------------------------------------------
0114   000 154                      ; optimized song lyric string
0115   000 154                      ; -----------------------------------------------------
0116   000 154  107 157 040 164     store:  db   "Go to the store and buy some more"
                157 040 164 150
                145 040 163 164
                157 162 145 040
                141 156 144 040
                142 165 171 040
                163 157 155 145
                040 155 157 162
                145
0117   000 215  054 240             comma:  db      ",", 160
0118   000 217  157 040 155 157     omore:  db      "o more"
                162 145
0119   000 225  040 142 157 164     bottl:  db      " bottl", 229, "s of bee", 242
                164 154 345 163
                040 157 146 040
                142 145 145 362
0120   000 245  040 157 156 040             db      " on the wal", 236
                164 150 145 040
                167 141 154 354
0121   000 261  056                 dotnl:  db      "."
0122   000 262  215                 nline:  db      141
0123   000 263  124 141 153 145             db      "Take one down and pass it around,"
                040 157 156 145
                040 144 157 167
                156 040 141 156
                144 040 160 141
                163 163 040 151
                164 040 141 162
                157 165 156 144
                054
0124   000 324  240                         db      160
0125   000 325                              end```