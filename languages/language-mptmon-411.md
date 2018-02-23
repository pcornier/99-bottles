
## Language MPTMON ##
---
- Author: Anonymous
- Date: 04/20/05
- Info: n/a
- Score:  (4.00 in 2 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-mptmon-411.html
---

```; MPTMON (Multi Processor Test Monitor) is a debugging
; tool for telephonic exchanges from Alcatel.
; These two macros do the beer job..
REM MAC Bottle
DEF MAC Bottle
  WR %0,' Bottle',&
  IF %0<>1\'s',&
  END
  ' of Beer',&
  IF %1\' on the Wall',&
  END
  '%2'
EM
REM MAC Beer
DEF MAC Beer ; jr_31jan97
ADD SYM.I=99T
BAS=T
COU 99T
  Bottle:.I,TRUE,','
  Bottle:.I,FALSE,'.'
  '    Take one down, pass it around,'
  .I=.I-1
  Bottle:.I,TRUE,'.'
 ''
END
EM
Beer:```