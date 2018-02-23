
## Language Saul ##
---
- Author: Anonymous
- Date: 04/20/05
- Info: http
- Score:  (3.00 in 3 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-saul-580.html
---

```;
; 99 Bottles of Beer in SAUL
;    (http://keaggy.intmed.mcw.edu/saul.html)
;
; RTK, rkneusel@post.its.mcw.edu, 10-Apr-97
;

       fixn(0)
       setn(n,99)
:loop, putn(n)
       disp(` bottles of beer on the wall, `)
       putn(n)
       disp(` bottles of beer.`)
       putc(13)
       disp(`Take one down, pass it around, `)
       subt(n,1,m)
       putn(m)
       comp(m,1)
       brne(:here)
       disp(` bottle of beer on the wall.`)
       jump(:there) 
:here, disp(` bottles of beer on the wall.`)
:there,putc(13)
       putc(13)
       comp(n,2)
       breq(:last)
       subt(n,1,n)
       jump(:loop)
:last, disp(`1 bottle of beer on the wall, 1 bottle of beer.`)
       putc(13)
       disp(`Take one down, pass it around, `)
       disp(`no more bottles of beer on the wall.`)  
       endp```