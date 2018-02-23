
## Language Turbo PL ##
---
- Author: Philipp Winterberg
- Date: 04/20/05
- Info: http
- Score:  (1.08 in 12 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-turbo-pl-472.html
---

```> Turbo PL version of 99 Bottles of beer (Bottles.tmc)
> See http://www.jmksf.de/turbo.html
> Philipp Winterberg, http://www.winterbergs.de
Clear.
Declare %b%.
Set %b%='99'.
Loop %b%>'1'.
  Pout %b%:
  Pout " bottle(s) of beer on the wall,".
  Pout %b%:
  Pout " bottle(s) of beer.".
  Pout "Take one down, pass it around,".
  %Calc %b%-'1'.
  Pout %b%:
  Pout " bottle(s) of beer on the wall.".
  Pout "".
Endloop.
Sec '1'.```