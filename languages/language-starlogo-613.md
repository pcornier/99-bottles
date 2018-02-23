
## Language StarLogo ##
---
- Author: Uwe Kaessner
- Date: 04/20/05
- Info: n/a
- Score:  (2.33 in 6 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-starlogo-613.html
---

```; StarLogo version of 99 bottles of beer 
; by Uwe Kaessner (ukblue@friendsinside.de)
; StarLogo (http://www.media.mit.edu/starlogo) is based on Logo

to 99bottles
  let [:i 99]
  repeat 99 [
    print se :i [bottle(s) of beer on the wall]
    print se :i [bottle(s) of beer]
    print [take one down, pass it around]
    print se (:i - 1) [bottle(s) of beer on the wall]
    print ""
    set :i (:i - 1)
  ]
end```