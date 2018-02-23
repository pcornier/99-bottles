
## Language Sisal ##
---
- Author: Pat Miller
- Date: 04/20/05
- Info: http
- Score:  (3.78 in 173 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-sisal-597.html
---

```% ------------------------------------------------------------
% The classic N bottles of beer problem.  The Sisal language
% is implicitly parallel and functional.  It is not really desigined
% for string processing (scientific numeric stuff is more like it!)
% The following program will run in parallel on Crays, the
% SGI Challenge, the Meiko, etc....  and run just swell on
% your average ordinary PC too.  More information on the Sisal
% language project can be found at
% 
% http://www.llnl.gov/sisal/SisalHomePage.html
%
% or contact sisal-info@sisal.llnl.gov
%
% Author: Pat Miller (patmiller@llnl.gov)
% 
% ------------------------------------------------------------

define main

type string = array[character];

% ------------------------------------------------------------
% OUCH -- have to really start from scratch
% ------------------------------------------------------------
function DigitToChar(d : integer returns character)
  character(integer('0')+d)
end function

% ------------------------------------------------------------
% Sisal has no I/O runtime library for strings so we
% can build up the ASCII representation a digit at a time
% The sign handling is there for completeness and is not needed
% to do the BEER problem
% ------------------------------------------------------------
function itoa(n : integer returns string)
  array_setl(
  let
    s := for initial
	   x := abs(n);
	   d := array[1: DigitToChar( mod(x,10) )];
         while x > 10 repeat
	   x := old x / 10;
	   d := array_addl(old d,DigitToChar(mod(x,10)));
	 returns
	   value of d
	 end for
  in
    if n < 0 then array_addl(s,'-') else s end if
  end let
  ,1)
end function

% ------------------------------------------------------------
% Produce one stanza of the 99 bottles of beer song.  Some care
% is taken to keep it grammatical
% ------------------------------------------------------------
function BottlesOfBeer(i : integer returns array[string])
  let
    s,bottles,preface,n,nextbottles :=
      if i = 1 then
	"1"," bottle","If that bottle","No more"," bottles"
      elseif i = 2 then
	itoa(2)," bottles","If one of those bottles",itoa(1)," bottle"
      else
	itoa(i)," bottles","If one of those bottles",itoa(i-1)," bottles"
      end if;
  in
    array[1:
      s || bottles || " of beer on the wall", 
      s || bottles || " of beer!",
      preface || " should happen to fall... ",
      n || nextbottles || " of beer on the wall!",
      ""
    ]
  end let
end function
  

% ------------------------------------------------------------
% This main loop executes in parallel stuffing the 4 lines
% of each stanza into an array holding the whole song
% ------------------------------------------------------------
function main(n : integer returns array[string])
  for i in 0,n-1
    howmany := n-i;
    stanza := BottlesOfBeer(howmany);
  returns value of catenate stanza
  end for ||
  array[1: "Time to buy more beer"]
end function```