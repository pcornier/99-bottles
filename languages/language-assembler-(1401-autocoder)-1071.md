
## Language Assembler (1401 Autocoder) ##
---
- Author: Van Snyder
- Date: 03/03/06
- Info: http
- Score:  (3.00 in 54 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-assembler-(1401-autocoder)-1071.html
---

```               job  99 Bottles of Beer
               ctl  6611
     *
     * Print lyrics for  ,,99 Bottles of Beer on the wall,, song
     *
               org  201
     bot1      dcw  #2
               dcw  @ bottles of beer on the wall, @
     bot2      dcw  #2
               dcw  @ bottles of beer, @
     dowhat    dcw  @take one down and pass it around,@
     *
               org  333
     switch    bce  shrink,count-1,0  Fewer than ten remaining?
               mcw  count,bot1
               mcw  count,bot2
               w    decr
     *
     * The GMWM is loaded into the print area here instead of
     * just put there as data, and then clobbered, because modern
     * simulators print it.
     *
     shrink    lca  gmwm,dowhat&1  Shrink
               mcm  bot1&1,bot1      each count
               mcm  bot2,bot2-1        field by two
               lca  @   @,dowhat&1  clobber inserted GMWM
               sbr  switch&3,small
     small     mn   count,bot1-1
               mn   count,bot2-2
               bce  zero,count,0
               w
     decr      s    k1,count
               mz   *-2,count  clobber zone that subtract creates
               b    switch
     zero      lca  nomore,dowhat-1
               w
               cc   1
     halt      h
               b    halt
     nomore    dcw  @go to the store and buy some more.@
     count     dcw  99
     k1        dcw  1 
     gmwm      dcw  @}@  GMWM
               end  switch

Object deck:

,008015,022026,030037,044,049,053053N000000N00001026                   0001     
L068116,105106,110117B101/I9I#071029C029056B026/B001/0991,001/001117I0?0002     
,008015,022029,036040,047054,061068,072/061039              ,00100110400003     
   BOTTLES OF BEER ON THE WALL,        L034234,203233,040040,04004010400004     
 BOTTLES OF BEER,                      L018252,040040,040040,04004010400005     
TAKE ONE DOWN AND PASS IT AROUND,      L033285,040040,040040,04004010400006     
B3594840M485202M4852342417L487286      L033365,341348,355359,04004010400007     
P203202P234233L490286H336394D485201    L035400,373380,387394,04004010400008     
D485232B43548502S486485Y428485B333     L034434,408416,417424,43104010400009     
L4832842F1.B445                        L015449,442443,445446,04004010400010     
GO TO THE STORE AND BUY SOME MORE.991} L038487,484486,487040,04004010400011     
                                       L003490,040040,040040,04004010400012     
                                       /333080                         0013     

Core dump (before the code modifies itself):

201:       BOTTLES OF BEER ON THE WALL,    BOTTLES OF BEER
        1 1                             1 1               
251:    , TAKE ONE DOWN AND PASS IT AROUND,               
          1                                               
301:                                    B3594840M485202M48
                                        1       1      1  
351:    52342417L487286P203202P234233L490286H336394D485201
            1   1      1      1      1      1      1      
401:    D485232B43548502S486485Y428485B333L4832842F1.B445G
        1      1       11      1      1   1      11 11   1
451:    O TO THE STORE AND BUY SOME MORE.991}             
                                         1 111```