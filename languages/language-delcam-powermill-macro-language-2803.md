
## Language Delcam PowerMILL Macro Language ##
---
- Author: Vitor Martins Augusto
- Date: 12/21/11
- Info: http
- Score:  (2.00 in 3 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-delcam-powermill-macro-language-2803.html
---

```//
// 99 Bottles for PowerMILL 2012
//
INT Bottles = 99
WHILE Bottles > 1 {
  STRING start_bottles = String(Bottles) + " green bottles sitting on the wall"
  PRINT $start_bottles
  $Bottles = $Bottles - 1
  PRINT "If 1 green bottle should accidentally fall"
  STRING bottles_left = "There will be " + string(Bottles) + " green bottles left sitting on the
wall"
  PRINT $bottles_left
}
STRING start_bottles = String(Bottles) + " green bottle sitting on the wall"
PRINT $start_bottles
PRINT "If 1 green bottle should accidentally fall"
$Bottles = $Bottles - 1
STRING bottles_left = "There will be " + string(Bottles) + " green bottle left sitting on the wall"
PRINT $bottles_left```