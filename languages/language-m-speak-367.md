
## Language M-Speak ##
---
- Author: Andy Goldberg
- Date: 04/20/05
- Info: n/a
- Score:  (2.50 in 2 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-m-speak-367.html
---

```M-Speak is a word-processing macro language created in the late 1970's for the 
Spellbinder word processor.

;-)   Spellbinder Macro to print "99 Bottles of Beer on the Wall"   (-;
; by Andy Goldberg
;
:%A="s"                                         ;set variable for plural
:%1=99                                          ;initialize counter
:%2=%1-1                                        ;decrement at top of loop
s//%1 bottle%A of beer on the wall</            ;lyric
s//%1 bottle%A of beer</<
s//Take one down and pass it around</
:on %2-1 /+4 / /+1                              ;check for last stanza
:%A=""                                          ;if last stanza clear plural
s//%2 bottle%A of beer on the wall.<</          ;last line and blank line
:%1=%1-1                                        ;check for end
:on -1 /-9                                      ;if not end then loop
s//No more bottles of beer on the wall.</       ;ending line  
/t/p/wo/song.txt/t/gd                           ;print, save and end (optional)```