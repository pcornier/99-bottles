
## Language RXS ##
---
- Author: Morten B�gh
- Date: 01/13/06
- Info: http
- Score:  (3.00 in 1 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-rxs-1020.html
---

```)nop     RXS is a scripting language for IBM S/390 mainframe
)nop     Notice: This is a correct solution, establishing the full semantic richness of the song!
)nop

99 bottles of beer on the wall, 99 bottles of beer
)action
  do i = 98 to 0 by -1
    select
      when i = 1 then txt = '1 bottle'
      when i = 0 then txt = 'no more bottles'
      otherwise txt = i 'bottles'
    end
    'Take one down, pass it around, 'txt' of beer on the wall.'
    ' '
    translate(left(txt,1))''substr(txt,2) 'of beer on the wall, 'txt' of beer.'
  end
)endaction
Go to the store and buy some more, 99 bottles of beer on the wall.```