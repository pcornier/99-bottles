
## Language var'aq ##
---
- Author: Rune Berge
- Date: 10/10/05
- Info: http
- Score:  (3.26 in 23 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-var%27aq-912.html
---

```(* 99 Bottles of Beer in var'aq *)
(* by Rune Berge                *)

~ bottles { 
  latlh 1 rap'a' "" tam 
    { woD "s" } ghobe'chugh 
  " bottle" tam tlheghrar tam woD 
  " of beer" tlheghrar 
} pong

~ print-verse { 
  latlh latlh bottles tlheghrar " on the wall" tlheghrar cha'
  latlh latlh bottles tlheghrar cha'
  "Take one down and pass it around" cha'
  wa'boqHa' latlh latlh  { "No" } ghobe'chugh latlh bottles tlheghrar " on the wall" tlheghrar cha'

  "" cha' 
  latlh { print-verse } HIja'chugh
} pong

99 print-verse```