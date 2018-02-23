
## Language Turing Machine ##
---
- Author: Henrik Theiling
- Date: 04/20/05
- Info: n/a
- Score:  (3.56 in 55 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-turing-machine-474.html
---

```% `99 Bottles of Beer' on a Turing Machine

% written 6/97 by Henrik Theiling <henrik@theiling.de>

%% This defines \delta, the transition function.  There are four entries
%% on each line:
%%   CurrentCharacter OldState    NewCharacterOrAction NewState
%%
%% Thus each line defines:
%%   \delta (CurrentCharacter,OldState) = (NewCharacterOrAction, NewState)
%%

% initialise tape with # cr "99" (#)
  #    0      ->    1
  #    1      cr    2
  cr   2      ->    3
  #    3      \9    3
  \9   3      ->    4
  #    4      \9    4
  \9   4      ->    10
  #    10     1000  10
  1000 10     <-    100

% write `bottle' or `bottles':
% check for `1'
  ?    100    ?    105
  \1   100    <-   102
  ?    102    ?    105
  cr   102    cr   120  % write `bottle', not `bottles'

% write `bottles' (first shift back to the left):
  {CODE}   105    ->   105
  \1   105    ->   105
  \2   105    ->   105
  \3   105    ->   105
  \4   105    ->   105
  \5   105    ->   105
  \6   105    ->   105
  \7   105    ->   105
  \8   105    ->   105
  \9   105    ->   105
  ?    105    ->   106
  #    106    b    106
  b    106    ->   107
  #    107    o    107
  o    107    ->   108
  #    108    t    108
  t    108    ->   109
  #    109    t    110
  t    110    ->   111
  #    111    l    111
  l    111    ->   112
  #    112    e    112
  e    112    ->   113
  #    113    s    200

% write `bottle' (first shift back to the left):
  \1   120    ->   120
  cr   120    ->   120
  ?    120    ->   121
  #    121    b    121
  b    121    ->   122
  #    122    o    122
  o    122    ->   123
  #    123    t    123
  t    123    ->   124
  #    124    t    124
  t    124    ->   125
  #    125    l    125
  l    125    ->   126
  #    126    e    200

% return subroutine 1:
  ?    200    <-   200
  1000 200    #    1000
  2000 200    _    2000
  3000 200    _    3000
  5000 200    #    5000
  6000 200    _    6000
  7000 200    cr   7000
  9100 200    #    9100
  9200 200    _    9200
  9300 200    _    9300
  #    200    #    stop

% return subroutine 2:
  ?    210    ->   210
  4000 210    cr   4000
  8000 210    cr   8000
  9000 210    #    9000
  9400 210    cr   9400

%
% This is the main loop:
%
% 1000 is the return state for the first line after `bottle' or `bottles'
% has been written.
  #    1000   ->   1001
  ?    1001   ->   1001
  #    1001   2000 1002
  2000 1002   ->   300   % write `of beer'

  ?    2000   ->   2000
  #    2000   3000 2000
  3000 2000   ->   400   % write `on the wall'

  ?    3000   ->   3000
  #    3000   4000 500   % copy number

  ?    4000   ->   4000
  #    4000   5000 4000
  5000 4000   <-   100   % write `bottle' or `bottles'

  #    5000   ->   5001
  ?    5001   ->   5001
  #    5001   6000 5002
  6000 5002   ->   300   % write `of beer'

  ?    6000   ->   6000
  #    6000   7000 6000
  7000 6000   ->   700   % write `Take one away and pass it around,'

  ?    7000   ->   7000
  #    7000   8000 500   % copy number

  ?    8000   ->   8000
  #    8000   _    8001
  _    8001   ->   8001
  #    8001   9000 8001
  9000 8001   <-   8002   % decrement number
  _    8002   <-   800

  cr   9000   ->   9004   % zero: all zeros have been eliminated...
  #    9000   <-   9000
  _    9000   #    9001
  #    9001   <-   9000
  ?    9000   ->   9002
  #    9002   9100 9002
  9100 9002   <-   100   % write `bottle' or `bottles'

  #    9004   {CODE}   9004
  {CODE}   9004   ->   9000

  #    9100   ->   9101
  ?    9101   ->   9101
  #    9101   9200 9101
  9200 9101   ->   300    % write `of beer'

  ?    9200   ->   9200
  #    9200   9300 9200
  9300 9200   ->   400   % write `on the wall'

  ?    9300   ->   9300
  #    9300   .    9300  % write a full-stop
  .    9300   ->   9301
  #    9301   cr   9301  % and an additional newline
  cr   9301   ->   9302
  #    9302   9400 500   % copy number

  cr   9400   ->   9400
  {CODE}   9400   ->   9400
  ?    9400   ->   9401
  ?    9401   ->   9401
  #    9401   1000 9401
  1000 9401   <-   100  % start again
  #    9400   <-   9900 % write `Time to go to the store.' and stop

  {CODE}   9900   T    9900
  T    9900   ->   9901
  #    9901   i    9901
  i    9901   ->   9902
  #    9902   m    9902
  m    9902   ->   9903
  #    9903   e    9903
  e    9903   ->   9904
  #    9904   _    9904
  _    9904   ->   9905
  #    9905   t    9905
  t    9905   ->   9906
  #    9906   o    9906
  o    9906   ->   9907
  #    9907   _    9907
  _    9907   ->   9908
  #    9908   g    9908
  g    9908   ->   9909
  #    9909   o    9909
  o    9909   ->   9910
  #    9910   _    9910
  _    9910   ->   9911
  #    9911   t    9911
  t    9911   ->   9912
  #    9912   o    9912
  o    9912   ->   9913
  #    9913   _    9913
  _    9913   ->   9914
  #    9914   t    9914
  t    9914   ->   9915
  #    9915   h    9915
  h    9915   ->   9916
  #    9916   e    9916
  e    9916   ->   9917
  #    9917   _    9917
  _    9917   ->   9918
  #    9918   s    9918
  s    9918   ->   9919
  #    9919   t    9919
  t    9919   ->   9920
  #    9920   o    9920
  o    9920   ->   9921
  #    9921   r    9921
  r    9921   ->   9922
  #    9922   e    9922
  e    9922   ->   9923
  #    9923   .    200   % go back to the beginning and halt

% write `of beer':
  #    300    o    300
  o    300    ->   301
  #    301    f    301
  f    301    ->   302
  #    302    _    302
  _    302    ->   303
  #    303    b    303
  b    303    ->   304
  #    304    e    304
  e    304    ->   305
  #    305    e    305
  e    305    ->   306
  #    306    r    200 % return <-

% write `on the wall':
  #    400    o    400
  o    400    ->   401
  #    401    n    401
  n    401    ->   402
  #    402    _    402
  _    402    ->   403
  #    403    t    403
  t    403    ->   404
  #    404    h    404
  h    404    ->   405
  #    405    e    405
  e    405    ->   406
  #    406    _    406
  _    406    ->   407
  #    407    w    407
  w    407    ->   408
  #    408    a    408
  a    408    ->   409
  #    409    l    409
  l    409    ->   410
  #    410    l    200 % return <-

% write `Take one away and pass it around,':
  #    700    T    700
  T    700    ->   701
  #    701    a    701
  a    701    ->   702
  #    702    k    702
  k    702    ->   703
  #    703    e    703
  e    703    ->   704
  #    704    _    704
  _    704    ->   705
  #    705    o    705
  o    705    ->   706
  #    706    n    706
  n    706    ->   707
  #    707    e    707
  e    707    ->   708
  #    708    _    708
  _    708    ->   709
  #    709    a    709
  a    709    ->   710
  #    710    w    710
  w    710    ->   711
  #    711    a    711
  a    711    ->   712
  #    712    y    712
  y    712    ->   713
  #    713    _    713
  _    713    ->   714
  #    714    a    714
  a    714    ->   715
  #    715    n    715
  n    715    ->   716
  #    716    d    716
  d    716    ->   717
  #    717    _    717
  _    717    ->   718
  #    718    p    718
  p    718    ->   719
  #    719    a    719
  a    719    ->   720
  #    720    s    720
  s    720    ->   721
  #    721    s    721
  s    721    ->   722
  #    722    _    722
  _    722    ->   723
  #    723    i    723
  i    723    ->   724
  #    724    t    724
  t    724    ->   725
  #    725    _    725
  _    725    ->   726
  #    726    a    726
  a    726    ->   727
  #    727    r    727
  r    727    ->   728
  #    728    o    728
  o    728    ->   729
  #    729    u    729
  u    729    ->   730
  #    730    n    730
  n    730    ->   731
  #    731    d    731
  d    731    ->   732
  #    732    ,    200 % return <-

% decrement decimal number in ASCII format (hangs on underflow):
  \2   800    \1   210
  \3   800    \2   210
  \4   800    \3   210
  \5   800    \4   210
  \6   800    \5   210
  \7   800    \6   210
  \8   800    \7   210
  \9   800    \8   210
  \1   800    {CODE}   802
  {CODE}   800    \9   801
  \9   801    <-   800
  {CODE}   802    <-   802
  ?    802    ->   210
  cr   802    ->   803
  {CODE}   803    \9   803
  \9   803    ->   803
  _    803    <-   804
  \9   804    _    210

% copy number:
  ?    500    <-   500
  #    500    _    501
  ?    501    <-   501
  cr   501    ->   502
  {CODE}   502    #    600
  \1   502    #    610
  \2   502    #    620
  \3   502    #    630
  \4   502    #    640
  \5   502    #    650
  \6   502    #    660
  \7   502    #    670
  \8   502    #    680
  \9   502    #    690
  _    502    ->   210 % return ->

% Copying ciphers:

% copy `0' to the right:
  #    600    ->   601
  ?    601    ->   601
  #    601    {CODE}   602
  ?    602    <-   602
  #    602    {CODE}   603
  {CODE}   603    ->   502 % next cipher

% copy `1' to the right:
  #    610    ->   611
  ?    611    ->   611
  #    611    \1   612
  ?    612    <-   612
  #    612    \1   613
  \1   613    ->   502 % next cipher

% copy `2' to the right:
  #    620    ->   621
  ?    621    ->   621
  #    621    \2   622
  ?    622    <-   622
  #    622    \2   623
  \2   623    ->   502 % next cipher

% copy `3' to the right:
  #    630    ->   631
  ?    631    ->   631
  #    631    \3   632
  ?    632    <-   632
  #    632    \3   633
  \3   633    ->   502 % next cipher

% copy `4' to the right:
  #    640    ->   641
  ?    641    ->   641
  #    641    \4   642
  ?    642    <-   642
  #    642    \4   643
  \4   643    ->   502 % next cipher

% copy `5' to the right:
  #    650    ->   651
  ?    651    ->   651
  #    651    \5   652
  ?    652    <-   652
  #    652    \5   653
  \5   653    ->   502 % next cipher

% copy `6' to the right:
  #    660    ->   661
  ?    661    ->   661
  #    661    \6   662
  ?    662    <-   662
  #    662    \6   663
  \6   663    ->   502 % next cipher

% copy `7' to the right:
  #    670    ->   671
  ?    671    ->   671
  #    671    \7   672
  ?    672    <-   672
  #    672    \7   673
  \7   673    ->   502 % next cipher

% copy `8' to the right:
  #    680    ->   681
  ?    681    ->   681
  #    681    \8   682
  ?    682    <-   682
  #    682    \8   683
  \8   683    ->   502 % next cipher

% copy `9' to the right:
  #    690    ->   691
  ?    691    ->   691
  #    691    \9   692
  ?    692    <-   692
  #    692    \9   693
  \9   693    ->   502 % next cipher```