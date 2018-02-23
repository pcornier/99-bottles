
## Language Michigan Algorithmic Decoder (MAD) ##
---
- Author: Dave Pitts
- Date: 09/28/10
- Info: n/a
- Score:  (2.00 in 1 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-michigan-algorithmic-decoder-(mad)-2513.html
---

```            INTEGER I
            THROUGH TAKEN, FOR I = 99, -1, I .L. 2
            PRINT FORMAT WALL, I, I
            PRINT FORMAT DOWN
            WHENEVER I - 1 .L. 2, TRANSFER TO ONE
            PRINT FORMAT LEFT, I - 1
            TRANSFER TO TAKEN
ONE         PRINT FORMAT LEFT1, 1
TAKEN       CONTINUE
            PRINT FORMAT WALL1, 1, 1
            PRINT FORMAT DOWN
            PRINT FORMAT LEFT0
            VECTOR VALUES WALL=$1H ,I2,30H BOTTLES OF BEER ON THE WALL,
          1 ,I2,17H BOTTLES OF BEER,*$
            VECTOR VALUES WALL1=$1H ,I2,29H BOTTLE OF BEER ON THE WALL,
          1 ,I2,16H BOTTLE OF BEER,*$
            VECTOR VALUES DOWN=$34H TAKE ONE DOWN AND PASS IT AROUND,*$
            VECTOR VALUES LEFT=$1H ,I2,17H BOTTLES OF BEER./*$
            VECTOR VALUES LEFT1=$1H ,I2,16H BOTTLE OF BEER./*$
            VECTOR VALUES LEFT0=$20H NO BOTTLES OF BEER./*$
            END OF PROGRAM```