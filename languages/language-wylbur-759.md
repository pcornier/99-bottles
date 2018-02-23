
## Language WYLBUR ##
---
- Author: Richard L. Guertin
- Date: 06/22/05
- Info: http
- Score:  (3.00 in 14 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-wylbur-759.html
---

```xproc () begin
  declare number bottles
  bottles = 99
  while (bottles gt 1) begin  ;  Sing the song
     write '&(bottles) bottles of beer on the wall.  &(bottles) bottles of beer.'
     write 'Take one down, pass it around.'
     bottles = bottles - 1
     if (bottles gt 1) begin
        write '&(bottles) bottles of beer on the wall.'
        write ' '  ; print blank line
     end
     else begin  ;  only one left
        write 'Only 1 more bottle of beer on the wall!'
        write ' '  ; print blank line
        write 'Take it down, pass it around.'
        write 'No more bottles of beer on the wall  (Burp).'
        bottles = 0
     end
  end
  xreturn
end```