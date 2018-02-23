
## Language RNF2 ##
---
- Author: Dave Anderson
- Date: 10/05/08
- Info: n/a
- Score:  (2.00 in 1 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-rnf2-1883.html
---

```.TITLE The Bottles of Beer Song in RNF2

.REM This was a Runoff-style text formatter for the CDC Cyber mainframes
.REM Author: Dave Anderson, former UMass Amherst computing center employee

.NOJ .NOF               .REM turn off justification & fill
.P +0 1 4               .REM set pp, need at least 4 lines
.VAR $BTLS = 99         .REM the count of bottles

.MACRO BWORD bottle .IF $BTLS.NE.1 .X s      .REM generate bottle(s)

.MACRO TXT $BTLS .BWORD of beer              .REM # bottles of beer

.MACRO ONWALL 1 .TXT on the wall .X .ONWALL1 .REM put'em on the wall, with punct

.MACRO FIRST .ONWALL _,  .BR
.MACRO SECOND $TXT .X _, .BR                 .REM just the beer
.MACRO THIRD Take one down and pass it around, .BR
.MACRO FOURTH .ONWALL _. .PP

.MACRO LAST 1 No .BWORD of beer on the wall .X .LAST1  .REM special case for 0

.MACRO SONG .FIRST .SECOND .THIRD .FOURTH  $BTLS=$BTLS-1 .IF $BTLS.NE.0 .AGAIN

.SONG
.LAST _, .BR No .BWORD of beer, .BR
Go to the store and buy some more, .BR $BTLS=99 .ONWALL _.```