
## Language Unique Concept ##
---
- Author: Anonymous
- Date: 04/20/05
- Info: n/a
- Score:  (3.03 in 33 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-unique-concept-186.html
---

```This is the bottleApp written in Unique Concept, the programming language
made and used by Visma Unique here in Norway.
It gives a formatted report to an outunit when run.


xtra="HoevlerrietNeppaaStranda"
  on (@XTRA)
      loop()                   *-- Scroll until the wall is empty
        assign(Outfield="Bottles"&' bottle(s) of beer on the
wall,'&&"Bottles"&' bottles of beer. Take one down, pass it
around,'&"Bottles"&' bottle(s) of beer on the wall.')
        dec(bottles)
        print-form(Bottleform) *-- Print the chorus
      until(Bottles=0)         *-- Time to go home
      endloop
  endon

stream="Output"
  file-name('?')
  include-forms("BOTTLEFORM")

form="BOTTLEFORM"
  size(2.937,0)

  element="Outfield"
    type(OUTPUT)
    multi-line(ON)
    connect("Outfield")
    position(0,1.25)
    size(2.75,76.375)

field="Outfield" static() storage(A(255))
field="Bottles"  static() storage(I4) ini-val=99```