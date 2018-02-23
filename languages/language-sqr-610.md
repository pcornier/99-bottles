
## Language SQR ##
---
- Author: Anonymous
- Date: 04/20/05
- Info: n/a
- Score:  (3.50 in 4 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-sqr-610.html
---

```! Ninety-Nine bottles of beer on the wall
! SQR version
! by Dan Arcari 11/04/2003
!
! SQR is a miserable, but useful report-writing language 
! often found in the Oracle world (PeopleSoft, especially).

begin-program
 let #numbottles = 99

 while #numbottles > 0
  do formatString(#numbottles,$phrase)
  let $string = to_char(#numbottles) || $phrase || ' on the wall, ' || to_char(#numbottles) ||
$phrase || ', '
  print $string (+1,1)

  let #numbottles = #numbottles - 1

  do formatString(#numbottles,$phrase)
  let $string = 'take one down, pass it around, ' || to_char(#numbottles) || $phrase || ' on the
wall.'
  print $string (+1,1)

  position (+2)
 end-while
end-program


begin-procedure formatString(#num,:$phrase)
 if #num <> 1
  let $phrase = ' bottles of beer'
 else
  let $phrase = ' bottle of beer'
 end-if
end-procedure```