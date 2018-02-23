
## Language Ethos Basic ##
---
- Author: Philipp Winterberg
- Date: 04/20/05
- Info: http
- Score:  (2.17 in 23 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-ethos-basic-241.html
---

```rem 'Ethos Basic version of 99 Bottles of beer (Bottles.eto)'
rem 'See http://www.ethos.tv/show_downloads.asp'
rem 'Philipp Winterberg, www.winterbergs.de'
     
for b = 99 to 1 step -1
 output b;" bottle(s) of beer on the wall,"
 output b;" bottle(s) of beer."
 output "Take one down, pass it around,"
 output b-1;" bottle(s) of beer on the wall." : output " "
next```