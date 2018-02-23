
## Language Unique 4GL ##
---
- Author: ES
- Date: 01/22/07
- Info: http
- Score:  (3.00 in 4 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-unique-4gl-1380.html
---

```xtra="99_Beers"
on (@START)
  loop()
    if Bottles > 0
      if Bottles > 1
        assign(s = 's')
      else
        assign(s = '')
      endif
      assign(Outfield="Bottles"&' bottle'&&s1&& ' of beer on the wall, '&"Bottles"&' bottle'&&s1&&'
of beer. /,Take one down and pass it around,')
      if Bottles > 1
        if Bottles=2
          assign(s='')
        else
          assign(s='s')
        endif
        assign(Outfield = Outfield&&' '&("Bottles"-1))
      else
        assign(s = 's')
        assign(Outfield = Outfield&& ' no more')
      endif
      assign(Outfield = Outfield&& ' bottle'&&s1&&' of beer on the wall.')
    else
      assign(Outfield = 'No more bottles of beer on the wall, no more bottles of beer./,Go to the
store and buy some more, 99 bottles of beer on the wall.')
    endif
    decrement(bottles)
    print-form(BottleForm)
  until(Bottles = -1)
  endloop
endon

stream=OutputStream
  file-name('?')
  include-forms("BOTTLEFORM")

form="BOTTLEFORM"
  size(2.937,0)
  element="Outfield"
    type(OUTPUT)
    multi-line(ON)
    formatting(UNIQUE)
    connect("Outfield")
    position(0,1.25)
    size(2.75,76.375)

field=Outfield static() storage(A(255))
field=s        static() storage(A(1))
field=Bottles  static() storage(I4) initial(99)```