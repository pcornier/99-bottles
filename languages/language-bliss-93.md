
## Language BLISS ##
---
- Author: Ron Brender
- Date: 04/20/05
- Info: n/a
- Score:  (4.33 in 3 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-bliss-93.html
---

```module NINTY_NINE_BOTTLES_CT (main=BOTTLES) =
!
!   "99 Bottles of Beer on the Wall"
!   using BLISS on DIGITAL's Alpha OpenVMS
!   by Ron Brender, brender@zko.dec.com
!
begin

external routine
    printf	    : novalue	    external_name('DECC$GXPRINTF');
		    !
		    ! To "port" this program to UNIX or WNT, use
		    ! external_name('printf') or the appropriate lower case
		    ! compilation option instead of the above.
		      

macro
    PUT_TEXT(T) =
	printf(uplit(%asciz '%s'), uplit(%asciz T))
	%,
    PUT_NL (dummy) =
	printf(uplit(%asciz %string(%char(10))))
	%;

compiletime
    TEMP = 0;

! In principle, the complete text can be constructed at compile-time and
! output with a single PUT_TEXT call, however, that runs up against a
! compile-time maximum string length. This implementation constructs a
! complete stanza at compile-time.
!
macro
    BOTTLE_S(COUNT) =
	%if COUNT eql 1 %then 'bottle' %else 'bottles' %fi
	%,

    BOTTLE_COUNT(COUNT) =
	%assign(TEMP, COUNT)
	%if TEMP eql 0 %then 'No' %else %string(%number(TEMP)) %fi
	%,

    BOTTLE_STANZA(COUNT) =
	PUT_TEXT(%string(
	    BOTTLE_COUNT(COUNT), ' ', BOTTLE_S(COUNT),
		' of beer on the wall; ',
	    BOTTLE_COUNT(COUNT), ' ', BOTTLE_S(COUNT), ' of beer', %char(10),
	    'Take one down and pass it around', %char(10),
	    BOTTLE_COUNT(COUNT-1), ' ', BOTTLE_S(COUNT-1),
		' of beer on the wall', %char(10),
	    %char(10)))
	%,

    BOTTLE_TEXT(COUNT)[] =
	BOTTLE_STANZA(COUNT);
	%if COUNT gtr 1 %then
	    BOTTLE_TEXT(COUNT - 1)
	    %fi
	%;

global routine BOTTLES : novalue =
    begin

    ! Title
    !
    PUT_NL();
    PUT_TEXT('        "99 Bottles of Beer on the Wall"'); PUT_NL();
    PUT_NL();

    BOTTLE_TEXT(99);

    end;

end
eludom```