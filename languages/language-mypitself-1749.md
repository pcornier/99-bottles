
## Language MyPitSelf ##
---
- Author: Hugues de Fougieres
- Date: 03/31/08
- Info: http
- Score:  (3.00 in 2 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-mypitself-1749.html
---

``` Number Parent Position Name                                   Type CC Level
                                                            Children Count
      0     -1        0 0                                         I  1     0
      1      0        1 Tac                                       f  6     1
      2      1        1 SetVar                                    f  2     2
      3      2        1 ValueToLoop                               v  0     3
      4      2        2 Cst                                       f  1     3
      5      4        1 99                                        v  0     4
      6      1        2 LoopVar                                   f  3     2
      7      6        1 ValueToLoop                               v  0     3
      8      6        2 ind                                       v  0     3
      9      6        3 Do                                        f  1     3
     10      9        1 Tac                                       f  6     4
     11     10        1 SetVar                                    f  2     5
     12     11        1 NumberOfBot                               v  0     6
     13     11        2 Cst                                       f  1     6
     14     13        1 99                                        v  0     7
     15     10        2 SubVar                                    f  2     5
     16     15        1 NumberOfBot                               v  0     6
     17     15        2 Var                                       f  1     6
     18     17        1 ind                                       v  0     7
     19     10        3 Var                                       f  1     5
     20     19        1 NumberOfBot                               v  0     6
     21     10        4 Test                                      f  3     5
     22     21        1 Cond                                      f  1     6
     23     22        1 Greater                                   f  1     7
     24     23        1 2                                         v  0     8
     25     21        2 IfTrue                                    f  1     6
     26     25        1 Tac                                       f  4     7
     27     26        1 SetVar                                    f  6     8
     28     27        1 Message1                                  v  0     9
     29     27        2 Var                                       f  1     9
     30     29        1 NumberOfBot                               v  0    10
     31     27        3 Cst                                       f  1     9
     32     31        1  bottles of beer on the wall,             c  0    10
     33     27        4 Var                                       f  1     9
     34     33        1 NumberOfBot                               v  0    10
     35     27        5 Cst                                       f  1     9
     36     35        1  bottles of beer.                         c  0    10
     37     27        6 br                                        f  0     9
     38     26        2 SetVar                                    f  2     8
     39     38        1 NewCount                                  v  0     9
     40     38        2 Var                                       f  1     9
     41     40        1 NumberOfBot                               v  0    10
     42     26        3 SubVar                                    f  2     8
     43     42        1 NewCount                                  v  0     9
     44     42        2 Cst                                       f  1     9
     45     44        1 1                                         v  0    10
     46     26        4 SetVar                                    f  6     8
     47     46        1 Message2                                  v  0     9
     48     46        2 Cst                                       f  1     9
     49     48        1 Take one down and pass it around,         c  0    10
     50     46        3 Var                                       f  1     9
     51     50        1 NewCount                                  v  0    10
     52     46        4 Cst                                       f  1     9
     53     52        1  bottles of beer on the wall.             c  0    10
     54     46        5 br                                        f  0     9
     55     46        6 br                                        f  0     9
     56     21        3 IfFalse                                   f  1     6
     57     56        1 Tac                                       f  2     7
     58     57        1 Var                                       f  1     8
     59     58        1 NumberOfBot                               v  0     9
     60     57        2 Test                                      f  3     8
     61     60        1 Cond                                      f  1     9
     62     61        1 Equal                                     f  1    10
     63     62        1 2                                         v  0    11
     64     60        2 IfTrue                                    f  1     9
     65     64        1 Tac                                       f  4    10
     66     65        1 SetVar                                    f  6    11
     67     66        1 Message1                                  v  0    12
     68     66        2 Var                                       f  1    12
     69     68        1 NumberOfBot                               v  0    13
     70     66        3 Cst                                       f  1    12
     71     70        1  bottles of beer on the wall,             c  0    13
     72     66        4 Var                                       f  1    12
     73     72        1 NumberOfBot                               v  0    13
     74     66        5 Cst                                       f  1    12
     75     74        1  bottles of beer.                         c  0    13
     76     66        6 br                                        f  0    12
     77     65        2 SetVar                                    f  2    11
     78     77        1 NewCount                                  v  0    12
     79     77        2 Var                                       f  1    12
     80     79        1 NumberOfBot                               v  0    13
     81     65        3 SubVar                                    f  2    11
     82     81        1 NewCount                                  v  0    12
     83     81        2 Cst                                       f  1    12
     84     83        1 1                                         v  0    13
     85     65        4 SetVar                                    f  6    11
     86     85        1 Message2                                  v  0    12
     87     85        2 Cst                                       f  1    12
     88     87        1 Take one down and pass it around,         c  0    13
     89     85        3 Var                                       f  1    12
     90     89        1 NewCount                                  v  0    13
     91     85        4 Cst                                       f  1    12
     92     91        1  bottle of beer on the wall.              c  0    13
     93     85        5 br                                        f  0    12
     94     85        6 br                                        f  0    12
     95     60        3 IfFalse                                   f  1     9
     96     95        1 Tac                                       f  2    10
     97     96        1 Var                                       f  1    11
     98     97        1 NumberOfBot                               v  0    12
     99     96        2 Test                                      f  2    11
    100     99        1 Cond                                      f  1    12
    101    100        1 Equal                                     f  1    13
    102    101        1 1                                         v  0    14
    103     99        2 IfTrue                                    f  1    12
    104    103        1 Tac                                       f  2    13
    105    104        1 SetVar                                    f  6    14
    106    105        1 Message1                                  v  0    15
    107    105        2 Var                                       f  1    15
    108    107        1 NumberOfBot                               v  0    16
    109    105        3 Cst                                       f  1    15
    110    109        1  bottle of beer on the wall,              c  0    16
    111    105        4 Var                                       f  1    15
    112    111        1 NumberOfBot                               v  0    16
    113    105        5 Cst                                       f  1    15
    114    113        1  bottle of beer.                          c  0    16
    115    105        6 br                                        f  0    15
    116    104        2 SetVar                                    f  5    14
    117    116        1 Message2                                  v  0    15
    118    116        2 Cst                                       f  1    15
    119    118        1 Take one down and pass it around,         c  0    16
    120    116        3 Cst                                       f  1    15
    121    120        1 no more bottles of beer on the wall.      c  0    16
    122    116        4 br                                        f  0    15
    123    116        5 br                                        f  0    15
    124     10        5 Ech                                       f  1     5
    125    124        1 Var                                       f  1     6
    126    125        1 Message1                                  v  0     7
    127     10        6 Ech                                       f  1     5
    128    127        1 Var                                       f  1     6
    129    128        1 Message2                                  v  0     7
    130      1        3 SetVar                                    f  4     2
    131    130        1 Message1                                  v  0     3
    132    130        2 Cst                                       f  1     3
    133    132        1 No more bottles of beer on the wall,      c  0     4
    134    130        3 Cst                                       f  1     3
    135    134        1 no more bottles of beer.                  c  0     4
    136    130        4 br                                        f  0     3
    137      1        4 SetVar                                    f  5     2
    138    137        1 Message2                                  v  0     3
    139    137        2 Cst                                       f  1     3
    140    139        1 Go to the store and buy some more,        c  0     4
    141    137        3 Cst                                       f  1     3
    142    141        1 99 bottles of beer on the wall.           c  0     4
    143    137        4 br                                        f  0     3
    144    137        5 br                                        f  0     3
    145      1        5 Ech                                       f  1     2
    146    145        1 Var                                       f  1     3
    147    146        1 Message1                                  v  0     4
    148      1        6 Ech                                       f  1     2
    149    148        1 Var                                       f  1     3
    150    149        1 Message2                                  v  0     4```