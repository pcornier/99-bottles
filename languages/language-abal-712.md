
## Language Abal ##
---
- Author: Hermann Winner
- Date: 05/30/05
- Info: n/a
- Score:  (2.59 in 39 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-abal-712.html
---

```* Abal version of 99 Bottles of beer
* Hermann Winner, http:
* Abal is an semi-interpreted language from PROLOGUE SA (french company)
* which runs on Prologue, DOS, Windows & most Unix systems
* the ancestor was BAL developped by R2E company during 70's who created
* one of the first personnal computer the MICRAL
* as you can see it looks pretty like Basic

program "bottles"

dcl i%
segment 0

	for i=100 to  1 step -1
		print=1:tabv(1),(zzz,x2,w33,zzz,x2,w17),i,"Bottle(s) of beer on the wall",i,"bottle(s) of beer"
		print=1:tabv(1),(w32),"Take on down and pass it around"
		print=1:tabv(1),(zzz,x2,w32),i-1,"Bottle(s) of beer on the wall"
	next i

eseg 0
end```