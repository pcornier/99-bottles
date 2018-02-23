
## Language RPG II ##
---
- Author: Jesse McKay
- Date: 02/06/08
- Info: http
- Score:  (2.91 in 11 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-rpg-ii-1686.html
---

```     H                                                                    BOTTLE
     F*
     F* RPG II VERSION OF THE BOTTLES PROGRAM 
     F*
     FWORKSTN CD  F     128            WORKSTN
     IWORKSTN NS  01   1 CA
     I        NS
     C                     READ WORKSTN                  01
     C                     DO   99        W       30
     C           100       SUB  W         X       30
     C           X         COMP 1                        13
     C           X         SUB  1         Y              15
     C           Y         COMP 1                        14
     C                     EXCPTWRTFMT
     C                     END
     C                     SETON                     LR
     OWORKSTN E                WRTFMT
     O                                   K4 'FMT1'
     O                         X     1    3
     O                      N13          11 'BOTTLES'
     O                       13          10 'BOTTLE'
     O                                   26 'OF BEER ON THE'
     O                                   31 'WALL,'
     O                         X     1   36
     O                      N13          46 'BOTTLES'
     O                       13          45 'BOTTLE'
     O                                   54 'OF BEER,'
     O                                   76 'TAKE ONE DOWN AND PASS'
     O                                   87 'IT AROUND,'
     O                       15Y     1   93
     O                      N15          93 'NO'
     O                      N14         101 'BOTTLES'
     O                       14         100 'BOTTLE'
     O                                  116 'OF BEER ON THE'
     O                                  121 'WALL.'
     O        DR       LR```