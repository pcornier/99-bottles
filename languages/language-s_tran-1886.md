
## Language S_Tran ##
---
- Author: R. Stellingwerf
- Date: 10/12/08
- Info: http
- Score:  (2.67 in 3 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-s_tran-1886.html
---

```#---S_Tran Version of 99 Bottles of beer---
#   to get the recursive feature, store in the file "beer.s"
#   and open .s files with the s_tran.exe interpreter

for_i = 99 2 -1
  show_line @i " Bottles of beer on the wall, " @i " bottles of beer"
  show_line "Take one down and pass it around"
  if i=2 break
  show_line "   " @(i-1) " bottles of beer on the wall"
end_i

show_line "   1 bottle of beer on the wall"
show_line "1 Bottle of beer on the wall, 1 bottle of beer"
show_line "Take it down and pass it around"
show_line "No bottles of beer on the wall."
query ""       // pause for cr
show_line "Go to the store and buy some more"
show_line "  99 bottles of beer on the wall!"
query ""       // pause for cr

system beer.s   // do it again....```