
## Language Spaghetti ##
---
- Author: Anonymous
- Date: 04/20/05
- Info: http
- Score:  (1.80 in 5 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-spaghetti-605.html
---

```1[*=99]800              '99 Bottles of beer   N=99  
809[283~9:400]810       'xx Bottle(s) of beer on the wall
813[283~13:814]815      'xx Bottle(s) of beer
805[283~5:600]806       'Take one down and pass it around 
812[283~12:600]813      'xx Bottle(s) of beer on the wall
821[283=0]822           '100 200 300 400 500 600
804[283~4:500]805       '100 200 300 400 600
806[283~6:100]807       '700 600
818[283~17:500]819      '100 200 300 400 500 600 600
800[283~0:100]801       
814[*-1]100             'N=N-1
808[283~8:300]809
810[283~10:600]811
817[283~16:400]818
803[283~3:400]804       
820[283~19:600]821
822[*~0:0]800           'IF N=0 THEN END
807[283~7:200]808       
819[283~18:600]820
802[283~2:300]803       
816[283~15:300]817
811[283~11:700]812
801[283~1:200]802       
815[283~14:200]816
103[284-10]104
101[285=0]102           'B=0
104[285+1]102
105[284+48]106
109[?284]110            'PRINT CHR$(B);
102[284<10:105]103      'A=A MOD B:B=A\10
106[285+48]107
108[?285]109
107[285~48:109]108      'IF A<>48 PRINT CHR$(A);
100[284=*]101           'A=N
110[283+1]800
207[283+1]800
206[?101]207
205[?108]206
204[?116]205
203[?116]204
202[?111]203
201[?98]202
200[?32]201             '200 PRINT " bottle";
302[283+1]800
301[?115]302 
300[*~1:302]301         '300 IF N<>1 THEN PRINT "s";
400[?32]401             '400 PRINT " of beer";
402[?102]403
401[?111]402
404[?98]405
403[?32]404
406[?101]407
405[?101]406
408[283+1]800
407[?114]408
500[?32]501             '500 PRINT " on the wall";
503[?32]504
502[?110]503
505[?104]506
504[?116]505
506[?101]507 
508[?119]509
511[?108]512 
507[?32]508
509[?97]510
512[283+1]800
510[?108]511
501[?111]502
601[?10]602
600[?13]601             '600 PRINT
602[283+1]800
700[?84]701             '700 PRINT "Take one down, pass it around";
703[?101]704
706[?110]707
709[?100]710
712[?110]713 
715[?112]716
718[?115]719
721[?116]722
724[?114]725
727[?110]728
701[?97]702
704[?32]705
707[?101]708
710[?111]711
713[?44]714
716[?97]717
719[?32]720
722[?32]723
725[?111]726
728[?100]729
702[?107]703
705[?111]706
708[?32]709
711[?119]712
714[?32]715
717[?115]718
720[?105]721
723[?97]724 
726[?117]727
729[283+1]800```