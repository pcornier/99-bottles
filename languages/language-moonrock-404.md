
## Language MoonRock ##
---
- Author: Philipp Winterberg
- Date: 04/20/05
- Info: http
- Score:  (1.33 in 15 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-moonrock-404.html
---

```' MoonRock version of 99 Bottles of beer (Bottles.moo)
' See (http://www.rowan.sensation.net.au/moonrock.html
' Philipp Winterberg, http://www.winterbergs.de
'
$outstream _tty_str_direct
cls
a$ = "\h20\h62\h6F\h74\h74\h6C\h65\h28\h73\h29\h20\h6F_
\h66\h20\h62\h65\h65\h72"
b% = 99
c$ = "\h20\h6F\h6E\h20\h74\h68\h65\h20\h77\h61\h6C\h6C"
while b% > 0
print b%+a$+c$+"\h2C\n"+b%+a$+"\h2E\n\h54\h61\h6B\h65\_
h20\h6F\h6E\h65 \h64\h6F\h77\h6E\h2C \h70\h61\h73\h73 "
print "\h20\h69\h74 \h61\h72\h6F\h75\h6E\h64\h2C\h20\n"
b% = b% - 1
print " \h50\h48\h49\h4C\h49 \h0D"+b%+a$+c$+"\h2E\n \n"
wend```