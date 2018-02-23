
## Language Model 204 ##
---
- Author: Kevin Giles
- Date: 04/20/05
- Info: n/a
- Score:  (2.97 in 32 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-model-204-400.html
---

```*Model 204 (or M204 as it's commonly called) is a proprietary
*database and language of Computer Corporation of America.
*It was first developed over 30 years ago by the NSA.
*Some claim that it's the fastest IBM Mainframe database.
*It is good for databases with large record counts.
*The Department of Social Security of Australian employs
*hundreds of M204 programmers.
*Add-on packages permit SQL and Web access.
*
* Written by Kevin Giles, NCI Information Systems Inc.
* e-mail: KGILES@USGS.GOV
*
* 100 bottles of beer / take one / action
*
*LOWER
BEGIN
DECLARE %S IS STRING LEN 1 COMMON
FOR %BOTTLE FROM 100 TO 0 BY -1
  CALL CHECKPLURAL(%BOTTLE)
  PRINT %BOTTLE AND 'bottle' WITH %S AND 'of beer on the wall.'
  PRINT %BOTTLE AND 'bottle' WITH %S AND 'of beer.'
  PRINT 'Take one down, pass it around.'
  CALL CHECKPLURAL(%BOTTLE-1)
  IF %BOTTLE-1 = +0 THEN PRINT 'No bottles of beer on the wall.'
      SKIP 1 LINE
      PRINT 'No bottles of beer on the wall.'
      PRINT 'No bottles of beer.'
      PRINT 'Go to the store, buy some more.'
      %BOTTLE = 101
      CALL CHECKPLURAL(%BOTTLE-1)
  END IF
  PRINT $UNBLANK(%BOTTLE-1) AND 'bottle' WITH %S AND -
                     'of beer on the wall.'
  SKIP 1 LINE
END FOR
SUBROUTINE CHECKPLURAL (%PASSVAL STRING DP 0 INPUT)
  IF %PASSVAL NE +1 THEN  %S = 's'
  ELSE                    %S = ''
  END IF
END SUBROUTINE
END```