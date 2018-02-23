
## Language SPIRES ##
---
- Author: Richard L. Guertin
- Date: 06/21/05
- Info: http
- Score:  (3.00 in 6 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-spires-756.html
---

```* BOTTLES.99
; SPIRES Database Manipulation Language
! set noecho
  let bottles = $int(99)
  repeat  ;  Sing the song
     show eval #bottles ' bottles of beer on the wall.  ' #bottles ' bottles of beer.'
     show eval 'Take one down and pass it all around.'
     let bottles = #bottles - 1
     if #bottles > 1 then begin
        show eval #bottles ' bottles of beer on the wall.'
        show eval ' '  ; print blank line
     endb
     else begin  ;  only one left
        show eval 'Only 1 more bottle of beer on the wall!'
        show eval ' '  ; print blank line
        show eval 'Take it down an pass it all around.'
        show eval 'No more bottles of beer on the wall  (Burp).'
        leave  ; terminate the loop
     endb
  until #bottles <= 0
  return```