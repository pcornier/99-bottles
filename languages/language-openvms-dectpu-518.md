
## Language OpenVMS DECTPU ##
---
- Author: Anonymous
- Date: 04/20/05
- Info: n/a
- Score:  (2.00 in 10 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-openvms-dectpu-518.html
---

```! Under OpenVMS
! TPU command file.
! Usage: $ EDIT/TPU/NOSECTIO/COMMAND=BEER.TPU
!
PROCEDURE count_down( bottle_count )

LOCAL new_count

  MESSAGE( FAO("!ZL bottle!%S of beer on the wall",bottle_count) ) ;
  MESSAGE( FAO("!ZL bottle!%S of beer",bottle_count) ) ;
  MESSAGE( "Take one down, pass it around" ) ;
  new_count := bottle_count - 1 ;
  IF (new_count > 0)
  THEN
    MESSAGE( FAO("!ZL bottle!%S of beer on the wall",new_count) ) ;
    MESSAGE( "" ) ;
    count_down( new_count ) ;
  ELSE
    ! End recursion
    MESSAGE( "Go to the store for some more" ) ;
  ENDIF;

ENDPROCEDURE;

! This is the program:
count_down( 99 ) ;
			
MESSAGE("------------------");
MESSAGE(" ");
	
EXIT ;

!```