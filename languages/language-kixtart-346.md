
## Language KiXtart ##
---
- Author: Philipp Winterberg
- Date: 04/20/05
- Info: n/a
- Score:  (2.95 in 21 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-kixtart-346.html
---

```; KiXtart version of 99 Bottles of beer (Bottles.kix)
; Philipp Winterberg, http://www.winterbergs.de 
;
; KiXtart is a scripting language, see www.kixtart.org
;
cls                              
color w/n

$bob  = " bottles of beer"
$wall = $bob + " on the wall"
$take = "Take one down, pass it around, "

for $b = 99 to 1 step -1
  select 
    case $b = 1
      ? "One bottle of beer on the wall," ? "One bottle of beer."
      ? $take ? "No more" $wall "."
    case $b = 2
      ? $b $wall "," ? $b $bob "."
      ? $take ? "One bottle of beer on the wall."
    case $b > 2
      ? $b $wall "," ? $b $bob "."
      ? $take ? ($b - 1) $wall "."
  endselect
  ?
next
                     
color r+/n+
sleep 1

? "No more" $wall "," ? "No more" $bob "."
? "Go to the store and buy some more," ? "99" $wall "."

get $MoreBeer
quit```