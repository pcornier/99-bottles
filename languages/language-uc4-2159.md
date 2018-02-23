
## Language UC4 ##
---
- Author: Noah Pratt
- Date: 08/14/09
- Info: http
- Score:  (2.00 in 1 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-uc4-2159.html
---

```! UC4 Operations Manager is an enterprise job scheduling system: http://www.uc4.com/
! "99 Bottles" example in pure UC4 Script
! Noah Pratt, 2009-08-13

:SET &BOTTLES# = "99"
:SET &PLURAL# = "s"
:SET &QUANT# = "one"

:WHILE &BOTTLES# > 0
:  PRINT "&BOTTLES# bottle&PLURAL# of beer on the wall,"
:  PRINT "&BOTTLES# bottle&PLURAL# of beer."
:  PRINT "Take &QUANT# down and pass it around,"
:  SET &BOTTLES# = SUB(&BOTTLES#,1)

!  Integers are always 16 digits, padded with leading zeros if necessary
!  -- the FORMAT() function strips 'em off.
:  SET &BOTTLES# = FORMAT(&BOTTLES#)

:  IF &BOTTLES# > 0
:    IF &BOTTLES# = 1
:      SET &PLURAL# = ""
:      SET &QUANT# = "it"
:    ENDIF
:    PRINT "&BOTTLES# bottle&PLURAL# of beer on the wall!"
:    PRINT ""
:  ELSE
:    PRINT "No more bottles of beer on the wall!"
:  ENDIF

:ENDWHILE```