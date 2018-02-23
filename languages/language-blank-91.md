
## Language Blank ##
---
- Author: Andrew Turley
- Date: 04/20/05
- Info: http
- Score:  (3.00 in 6 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-blank-91.html
---

```This is a custom language project.  The compiler is available at 
<a href=http://www.sound.net/~aturley/blank.htm>http://www.sound.net/~aturley/blank.htm</a>

99 Bottles of Beer
Written in Blank
by Andrew Turley

[99] bottles of beer
{#} pop the last calling cell
[20]{>} call "x bottles of beer on the wall,"
[65]{>} call "x bottles of beer."
[98]{>} call "Take one down, pass it around,"
{:}[1]{-}{!}[7]{\}{|} if bottles of beer is not 1
[124]{>} call "x-1 bottles of beer on the wall!"
{?}[19]{-}{>} go back to the beginning of the program

[157]{>} otherwise goto "No bottles of beer on the wall!"

"x bottles of beer on the wall," :36+11
{:}{.} print bottles of beer
[0] string termination
[10] "\n"
[44][108][108][97][119][32][101][104][116][32][110][111][32] ",llaw
eht no " [114][101][101][98][32][102][111][32] "reeb fo "
[24]{^}[1]{-}[4]{\}{!}{|} [115] "s" [1]{>}{#}
[101][108][116][116][111][98][32] "elttob " [34]{>} call the printing
part of the program {<} return to calling cell

"x bottles of beer." :24+11
{:}{.} print bottles of beer
[0] string termination
[10] "\n"
[46][114][101][101][98][32][102][111][32] ".reeb fo "
[12]{^}[1]{-}[4]{\}{!}{|}
[115] "s"
[1]{>}{#}
[101][108][116][116][111][98][32] "elttob "
[34]{>} call the printing part of the program
{<} return to calling cell

"Take one down, pass it around" :35
[0] string termination
[10] "\n"
[44][100][110][117][111][114][97][32][116][105][32] ",dnuora ti "
[115][115][97][112][32][44][110][119][111][100][32] "ssap ,nwod "
[101][110][111][32][101][107][97][84] "eno ekaT" [38]{>} goto the
printing part of the program {<} return to calling cell

"x-1 bottles of beer on the wall!" :38
[1]{-}{:}{.} (print bottles of beer)-1
[0] string termination
[10] "\n"
[10] "\n"
[33][108][108][97][119][32][101][104][116][32][110][111][32] "!llaw
eht no " [114][101][101][98][32][102][111][32] "reeb fo "
[115][101][108][116][116][111][98][32] "selttob " [38]{>} goto the
printing part of the program {<} return to calling cell


"No bottles of beer on the wall!", terminating part of program :36 [0]
string termination [10] "\n"
[33][108][108][97][119][32][101][104][116][32][110][111][32] "!llaw
eht no " [114][101][101][98][32][102][111][32] "reeb fo "
[115][101][108][116][116][111][98][32][111][78] "selttob oN" [9]{>}
goto the printing part of the program {@} exit program

printing part of the program :13

{:}[7]{\}{!}{|}{#}{,}{?}[10]{-}{>} print the top of the stack until 0
{#} ppop the call {#} ppop the if {$} pop the 0 {<} return to calling
cell```