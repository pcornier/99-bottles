
## Language uc4-script ##
---
- Author: Klaus Geigenberger
- Date: 03/05/08
- Info: http
- Score:  (2.92 in 12 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-uc4-script-1715.html
---

```!bottles of beer in uc4-script
!by Klaus Geigenberger - Bayreuth, Germany in March 2008

:SET &s#="s"
:SET &i#=FORMAT("99")

:WHILE &i# <> "no"
:      PRINT "&i# bottle&s# of beer standing on the wall, &i# bottle&s# of beer."
:      SET &i# = SUB(&i#,1)
:      SET &i# = FORMAT(&i#)
:      IF &i# = 1
:       SET &s# = ""
:      ENDIF
:      IF &i# = 0
:       SET &i# = "no"
:       SET &s# = "s"
:      ENDIF
:      PRINT "Take one down and pass it around, &i# bottle&s# of beer on the wall."
:      PRINT " "
:ENDWHILE

:PRINT "No more bottles of beer standing on the wall, no more bottles of beer."
:PRINT "Go to the store and buy some more, 99 bottles of beer on the wall."```