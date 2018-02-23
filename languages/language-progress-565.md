
## Language Progress ##
---
- Author: Rich Uchytil
- Date: 04/20/05
- Info: http
- Score:  (2.50 in 8 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-progress-565.html
---

```/* Progress 4GL version of 99 Bottles of Beer.
 * programmer: Rich Uchytil  rich@cray.com
 * 10/30/95
 */

def var i as int no-undo format "z9".

do i = 99 to 1 by -1:
  disp i "bottles of beer on the wall," skip
       i @ x as int format "z9" "bottles of beer" skip
       "Take one down and pass it around," skip
       i - 1 format "z9" "bottles of beer on the wall."
  with no-labels no-box no-attr 1 down.
  pause 1 no-message.  /* needed otherwise it would run too fast */
end.```