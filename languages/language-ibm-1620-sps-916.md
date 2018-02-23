
## Language IBM 1620 SPS ##
---
- Author: Chuck Guzis
- Date: 10/18/05
- Info: http
- Score:  (3.05 in 20 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-ibm-1620-sps-916.html
---

```       BOTTLES OF BEER PROGRAM FOR THE IBM 1620 MODEL I
*
*       HAMMERS THE WHOLE THING OUT ON THE CONSOLE TYPEWRITER.
*
*       A MISERABLE WASTE OF TIME ON 10/2005 BY
*              CHUCK GUZIS   CHUCK @ SYDEX.COM
*
*       THIS CODE IS SHOWN IN ASSEMBLY-LISTING FORMAT WITH SPS MNEMONICS.
*       I HAVE SPREAD THE SPS FIELDS OUT A BIT FOR READABILITY.
*
*       THERE ARE SOME SPECIAL NUMERIC CHARACTERS:
*               ] = FLAGGED 0
*               J-R = FLAGGED 1-9
*               | = RECORD MARK
*               [ = FLAGGED RECORD MARK (NOT USED HERE)
*
*       IF YOU'RE GOING TO RUN THIS ON THE CADET, YOU NEED TO HAVE AT LEAST
*       THE ADDITION TABLES LOADED.  INDIRECT ADDRESSING IS USEFUL, BUT NOT
*       ABSOLUTELY NECESSARY (SEE NOTE BELOW).
*
*       EXECUTION STARTS AT 00402.
*
00402 34 00000 00102    START           RCTY                    ,,, RETURN CARRIAGE
00414 17 00626 ]0426                    BTM     DBEERS,*+12     ,,, SHOW COUNT
00426 39 00783 00100                    WATY    MSG2            ,,, OF BEER ON...
00438 34 00000 00102                    RCTY                    ,,, RETURN CARR.
00450 17 00626 ]0462                    BTM     DBEERS,*+12     ,,, SHOW COUNT
00462 39 00827 00100                    WATY    MSG4            ,,, OF BEER.
00474 34 00000 00102                    RCTY                    ,,, ZZZZIP...
00486 39 00847 00100                    WATY    MSG6            ,,, TAKE ONE DOWN
00498 34 00000 00102                    RCTY                    ,,, ZZZIP...
00510 12 00745 ]0001                    SM      BEERS,1         ,,, A DEAD SOLDIER
00522 46 00578 01200                    BZ      EMPTY           ,,, IF ALL GONE
00534 17 00626 ]0546                    BTM     DBEERS,*+12     ,,, SHOW COUNT
00546 39 00783 00100                    WATY    MSG2            ,,, ON THE WALL
00558 34 00000 00102                    RCTY                    ,,, ZZZZZIP...
00570 49 00402                          B7      START           ,,, DO IT AGAIN
00577 0
00578 39 00911 00100    EMPTY           WATY    MSG8            ,,, NO MORE BEER
00590 34 00000 00102                    RCTY                    ,,, ZZZZIP...
00602 48 00000 00000                    H                       ,,, STOP
00614 49 00578                          B7      EMPTY           ,,, IN CASE RUN PUSHED
*
*       SUBROUTINE TO DISPLAY BOTTLE COUNT AND EITHER *BOTTLE* OR *BOTTLES*
*
*       THIS ASSUMES THAT THE INDIRECT ADDRESSING FEATURE IS PRESENT, BUT
*       IF NOT, SIMPLY USE A "BB"(42) INSTRUCTION IN PLACE OF THE INDIRECT
*       BRANCHES.
*
00621 00000             DBRET           DC      5,0             ,,, RETURN ADD
00626 14 00745 ]0010    DBEERS          CM      BEERS,10        ,,, DISPLAY BOTTLES
00638 46 00710 01300                    BNL     DBEER2          ,,, 10 OR MORE
00650 38 00745 00100                    WNTY    BEERS           ,,, 1 DIGIT
00662 14 00745 ]0001                    CM      BEERS,1         ,,, JUST 1?
00674 47 00722 01200                    BNE     DBEERS4         ,,, NO, *BOTTLES*
00686 39 00767 00100                    WATY    BTL             ,,, SAY *BOTTLE*
00698 49 ]062N                          B7      -DBRET          ,,, EXIT
00710 38 00744 00100    DBEER2          WNTY    BEERS-1         ,,, 2 DIGITS
00722 39 00749 00100    DBEER4          WATY    BTLS            ,,, SAY BOTTLES
00734 49 ]062N                          B7      -DBRET          ,,, EXIT
00741 ]0099             BEERS           DC      5,99            ,,, BOTTLE COUNT
00746 |                                 DC      1,@
00747 0
00748 0042566363534562  BTLS            DAC     8, BOTTLES
00764 0|                                DAC     1,@
00766 004256636353450|  BTL             DAC     8, BOTTLE@
00782 0056460042454559  MSG2            DAC     8, OF BEER
00798 0056550063484500                  DAC     8, ON THE
00814 66415353030|                      DAC     6,WALL.@
00826 0056460042454559  MSG4            DAC     8, OF BEER
00842 030|                              DAC     2,.@
00846 6341524500565545  MSG6            DAC     8,TAKE ONE
00862 00445666552300                    DAC     7, DOWN,
00876 5741626200496300                  DAC     8,PASS IT
00892 4159566455440020                  DAC     8,AROUND -
00908 0|                                DAC     1,@
00910 5556005456594500  MSG8            DAC     8,NO MORE
00926 42454559030|                      DAC     6,BEER.@```