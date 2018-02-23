
## Language ARexx ##
---
- Author: Harry Sintonen
- Date: 11/13/05
- Info: http
- Score:  (3.00 in 30 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-arexx-939.html
---

```/* ARexx script version of 99 Bottles of Beer

   About ARexx: http://en.wikipedia.org/wiki/AREXX

   Written by Harry Sintonen <sintonen@iki.fi>.
*/

i = 99

do forever

  p = gen(i)
  say p 'on the wall,' p || '.'

  if i = 0 then leave

  i = i - 1

  say 'Take one down pass it around,' gen(i) 'on the wall.'

end

say 'Go to the store and buy some more, 99 bottles of beer on the wall.'
exit

gen: procedure
  a = arg(1)

  if a = 0 then m = 'no more bottles'
  else if a = 1 then m = a 'bottle'
  else m = a 'bottles'

  return m 'of beer'```