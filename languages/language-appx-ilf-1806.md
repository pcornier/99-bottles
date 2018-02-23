
## Language APPX ILF ##
---
- Author: Hugh Eckert
- Date: 06/20/08
- Info: http
- Score:  (3.00 in 12 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-appx-ilf-1806.html
---

```     *     99 Bottles of Beer
     *     This uses APPX ILF code to create an output file.  
     SET        --- STREAM OPEN TYPE        =       w
     SET        --- STREAM FILE PATHNAME    =       /temp/beer.txt
     GOSUB      --- STREAM OPEN
     *
     BEG LOOP   BI  =  99  TO  1  STEP  -1
     CNV TEXT   --- CDF CONVERT WORK        =   --- BI
     SET        --- STREAM BUFFER           =   --- CDF CONVERT WORK
     IF         --- BI                      =       1
T    SET        --- TEMP 79                 =       bottle of beer
F    SET        --- TEMP 79                 =       bottles of beer
-    APPEND     --- STREAM BUFFER           1   --- TEMP 79
-    APPEND     --- STREAM BUFFER           1       on the wall,
-    GOSUB      --- STREAM WRITE
-    SET        --- STREAM BUFFER           =   --- CDF CONVERT WORK
-    APPEND     --- STREAM BUFFER           1   --- TEMP 79
F    APPEND     --- STREAM BUFFER           1       ,
-    GOSUB      --- STREAM WRITE
-    SET        --- STREAM BUFFER           =       You take one down,
-    APPEND     --- STREAM BUFFER           1       pass it around,
-    GOSUB      --- STREAM WRITE
F    CALC       PI = BI - 1
F    CNV TEXT   --- CDF CONVERT WORK        =   --- PI
T    SET        --- PI                      =       0  
T    SET        --- CDF CONVERT WORK        =       No
-    SET        --- STREAM BUFFER           =   --- CDF CONVERT WORK
     IF         --- PI                      =       1
T    APPEND     --- STREAM BUFFER           1       bottle of beer on the
F    APPEND     --- STREAM BUFFER           1       bottles of beer on the
     APPEND     --- STREAM BUFFER           1       wall.
     GOSUB      --- STREAM WRITE
     END LOOP   BI
     GOSUB      --- STREAM CLOSE```