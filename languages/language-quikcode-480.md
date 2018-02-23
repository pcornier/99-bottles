
## Language Quikcode ##
---
- Author: Philipp Winterberg
- Date: 04/20/05
- Info: http
- Score:  (2.68 in 31 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-quikcode-480.html
---

```* Quikcode version of 99 Bottles of beer (Bottles.q)
* See http://www.quikcode.bizland.com/
* Philipp Winterberg, http://www.winterbergs.de

equate b wst1-2-I
move 99 to b
loop:
  display b ' bottle(s) of beer on the wall,'
  display b ' bottle(s) of beer.'
  display 'Take one down, pass it around,'
  subtract 1 from b
  display b ' bottle(s) of beer on the wall.'
  display
  if b < 1 
    go to done
  else
    go to loop
done: end.```