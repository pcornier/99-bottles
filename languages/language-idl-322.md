
## Language IDL ##
---
- Author: Eric Korpela
- Date: 04/20/05
- Info: n/a
- Score:  (2.68 in 19 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-idl-322.html
---

```; The Bottles of Beer song (c) 1996 Eric Korpela (korpela@ssl.berkeley.edu)
; USAGE:  BOTTLES or BOTTLES, NUMBER
;
pro bottles, number
;
if not(keyword_set(number)) then begin
  number=99
  print,'BOTTLES: Defaulting to 99 bottles!'
endif
;
; Set up our song structure............
st1=replicate({n0:0,s1:' bottles of beer on the wall.',          $
               n1:0,s2:' bottles of beer.',                      $
               s3:'You take one down and pass it around.',       $
               n2:0,s4:' bottles of beer on the wall.'}, number)
;
; put in the appropriate numbers
i=(number-1)-indgen(number)
st1(*).n0=i+1
st1(*).n1=i+1
st1(*).n2=i
;
print,st1,format='(i3,a/i3,a/a/i3,a//)'
;```