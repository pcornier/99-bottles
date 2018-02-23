
## Language Mouse 83 ##
---
- Author: Lee Bradley
- Date: 11/24/07
- Info: http
- Score:  (3.50 in 2 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-mouse-83-1636.html
---

```
~ 99bot.mse - 3/13-16,19,20/2007 4/30/2007 - lrb

~ This is a 99 bottles of beer program in Mouse-83

~ Original version by Peter Grogono in "Mouse: A Language for
~ Microcomputers", Byte Magazine, July 1979, pp. 198 ff. and later revised
~ by David G. Simpson

"!Enter delay value [100,800] ? "?D:"!"

("How many verses? (99 max 0 to quit) "?s:"!"s.^100s.-[#V,s.;])

$V 1%[ ~ play a verse
 #N,1%;#B,1%;#W;",!"
 #N,1%;#B,1%;".!"
 #F;"!"
 #N,1%1-;#B,1%1-;#W;".!!"
 #D;
 #V,1%1-;
 ]@

$B " green bottle"1%1=0=["s"]" of Irish beer"@

$W " on the wall"@

$F "If one of those green bottles of Irish beer should happen to fall ..."@

$N ~ print bottle count in English
1%u:0w:
1%9>[
 1%10/w:1%10\v:
 w.1=[
  v.0=["Ten"@]
  v.1=["Eleven"@]
  v.2=["Twelve"@]
  v.3=["Thirteen"@]
  v.4=["Fourteen"@]
  v.5=["Fifteen"@]
  v.6=["Sixteen"@]
  v.7=["Seventeen"@]
  v.8=["Eighteen"@]
  v.9=["Nineteen"@]
  ]
 w.9=["Nine"]
 w.8=["Eigh"]
 w.7=["Seven"]
 w.6=["Six"]
 w.5=["Fif"]
 w.4=["For"]
 w.3=["Thir"]
 w.2=["Twen"]
 "ty"v.0=[@]"-"v.u:
 ]
u.9=[w.["n"]w.0=["N"]"ine"@]
u.8=[w.["e"]w.0=["E"]"ight"@]
u.7=[w.["s"]w.0=["S"]"even"@]
u.6=[w.["s"]w.0=["S"]"ix"@]
u.5=[w.["f"]w.0=["F"]"ive"@]
u.4=[w.["f"]w.0=["F"]"our"@]
u.3=[w.["t"]w.0=["T"]"hree"@]
u.2=[w.["t"]w.0=["T"]"wo"@]
u.1=[w.["o"]w.0=["O"]"ne"@]
u.0=["No"@]

$D ~ delay
D.w:(w.^D.v:(v.^v.1-v:)w.1-w:)@```