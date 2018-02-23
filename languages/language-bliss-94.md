
## Language BLISS ##
---
- Author: Ron Brender
- Date: 04/20/05
- Info: n/a
- Score:  (2.80 in 5 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-bliss-94.html
---

```module NINTY_NINE_BOTTLES (main=BOTTLES) =
!
!   "99 Bottles of Beer on the Wall"
!   using BLISS on DIGITAL's Alpha OpenVMS
!   by Ron Brender, brender@zko.dec.com
!
begin

forward routine
    BOTTLES	    : novalue,	    ! Main routine
    BOTTLE_S	    : novalue,	    ! 'bottle<s>'
    BOTTLE_COUNT    : novalue;	    ! <n> or 'no'

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
    PUT_INT(N) =
	printf(uplit(%asciz '%*d'), if N lss 10 then 1 else 2, N)
	%,
    PUT_NL (dummy) =
	printf(uplit(%asciz %string(%char(10))))
	%;

global routine BOTTLES : novalue =
    begin

    ! Title
    !
    PUT_NL();
    PUT_TEXT('        "99 Bottles of Beer on the Wall"'); PUT_NL();
    PUT_NL();

    decr I from 99 to 1 do
	begin

	! <n> bottle<s> of beer on the wall; <n> bottle<s> of beer
	!
	BOTTLE_COUNT(.I); PUT_TEXT(' '); BOTTLE_S(.I);
	    PUT_TEXT(' of beer on the wall; ');
	BOTTLE_COUNT(.I); PUT_TEXT(' '); BOTTLE_S(.I); PUT_TEXT(' of beer');
	    PUT_NL();

	! Take <one|it> down and pass it around
	!
	PUT_TEXT('Take ');
	if .I eql 1 then PUT_TEXT('it') else PUT_TEXT('one');
	PUT_TEXT(' down and pass it around'); PUT_NL();

	! <n-1> bottle<s> of beer on the wall
	!
	BOTTLE_COUNT(.I-1); PUT_TEXT(' '); BOTTLE_S(.I-1);
	    PUT_TEXT(' of beer on the wall'); PUT_NL();

	! New stanza
	!
	PUT_NL();

	end;

    end;

routine BOTTLE_S (COUNT) : novalue =
    begin

    PUT_TEXT('bottle');
    if .COUNT neq 1 then PUT_TEXT('s');

    end;

routine BOTTLE_COUNT (COUNT) : novalue =
    if .COUNT eql 0 then PUT_TEXT('No') else PUT_INT(.COUNT);

end
eludom```