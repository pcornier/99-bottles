
## Language OOSL ##
---
- Author: Henrique Leme
- Date: 10/07/11
- Info: http
- Score:  (3.00 in 1 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-oosl-2770.html
---

```\bottle method
	exch dup 1 equal if out pop " bottle" out else
	dup 0 equal if pop if "N" else "n" endif "o more" concat else
	exch pop endif " bottles" concat out endif endmethod
\beer method
	bottle " of beer" out endmethod
\wall method
	beer " on the wall" out endmethod
\first method
	dup 1 wall ", " out 0 beer "." outcr endmethod
\second method
	dup 0 equal if "Go to the store and buy some more, " out
	pop 99 else "Take one down and pass it around, " out
	1 sub endif 0 wall "." outcr endmethod
99 do dup first dup second dup if "" outcr 1 sub continue endif enddo pop```