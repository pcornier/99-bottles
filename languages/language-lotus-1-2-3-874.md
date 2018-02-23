
## Language Lotus 1-2-3 ##
---
- Author: Stelio Passaris
- Date: 09/16/05
- Info: n/a
- Score:  (3.00 in 14 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-lotus-1-2-3-874.html
---

```For use within a Lotus 1-2-3 spreadsheet. Copy the formula below into the required cell on an empty
worksheet, and copy down as far as you like. The song lyrics will appear with a line per cell, and
will repeat indefinitely with a blank cell between copies of the song.


American song version, to be entered into cell A4:

@IF(A3="","99 bottles of beer on the wall",@IF(@LEFT(A3,1)="N","",@IF(A2="2 bottles of
beer"#AND#A2<>"","1 bottle of beer on the wall",@IF(A2="1 bottle of beer"#AND#A2<>"","No more
bottles of beer on the
wall",@IF(@RIGHT(A3,1)="l"#AND#A3<>A2,A3,@IF(@RIGHT(A3,1)="l",@LEFT(A3,@LENGTH(A3)-12),@IF(@RIGHT(A3,1)="r","Take
one down and pass it around",@IF(@RIGHT(A3,1)="d",@STRING(@VALUE(@LEFT(A2,@FIND("
",A2,0)))-1,0)&@RIGHT(A1,@LENGTH(A1)-@FIND(" ",A1,0)),@ERR))))))))


British song version, to be entered into cell A3:

@IF(A2="","99 green bottles hanging on the
wall",@IF(@ISERR(@FIND("no",A2,0)),@IF(@LEFT(A2,1)="A","There'll be "&@IF(@LEFT(A1,2)="1
","no"&@REPLACE(@RIGHT(A1,33),13,2,"s h"),@IF(@LEFT(A1,2)="2
","1"&@REPLACE(@RIGHT(A1,34),12,2,"e"),@STRING(@VALUE(@LEFT(A1,2))-1,0)&@RIGHT(A1,@LENGTH(A1)-@FIND("
",A1,0)))),@IF(A1="",A2,@IF(@LEFT(A1,1)="T",A2,@IF(@ISERR(@VALUE(@LEFT(A1,2))+@VALUE(@LEFT(A2,2))),@IF(@LEFT(A2,1)="T",@REPLACE(A2,0,12,""),@NA),"And
if 1 green bottle should accidentally fall")))),""))


Note that the formula should have no line breaks when copied into Lotus 1-2-3.```