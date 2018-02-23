
## Language AS ##
---
- Author: Juergen Buechner
- Date: 04/20/05
- Info: n/a
- Score:  (2.17 in 6 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-as-35.html
---

```/************************************************/
/* AS-Version of 99 bottles of beer on the wall */
/* by Juergen Buechner http://www.jbuechner.de/ */
/* created 2002-09-10 06:17 in the morning      */
/************************************************/
RTN BEER(�in,�out)
  �out = CONCAT(CHAR(�in,'<&&&'),' bottle')
  IF �in > 1
    �out =CC(�out,'s')
  IF END
  �out = CC(�out,' of beer')
RTN END
/*
IN  didummy
OUT *
WHEN �START
  DEF �nrz(N03)
  DEF �tebeer(A80)
  DO �nrz=100:1<-1>
    CALL BEER(�nrz,�tebeer)
    PRINT CC(�tebeer,' on the wall,')
    PRINT CC(�tebeer,'.')
    PRINT 'Take one down and pass it around,'
    CALL BEER(�nrz-1,�tebeer)
    PRINT CC(�tebeer,' on the wall.')
  NEXT
RUN```