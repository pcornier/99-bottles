
## Language TrueBASIC ##
---
- Author: R. Nuzzo
- Date: 06/02/05
- Info: http
- Score:  (3.00 in 19 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-truebasic-735.html
---

```!--------------------------------------------------------
! Say, what?
! A thoroughly demented way to
! render an old familliar tune.             Roy M. Nuzzo
! Uses lesser worked bits of TrueBASIC's  string library
!--------------------------------------------------------

declare def Say$, NotOne

let NTxt$ = " bottles of beer on the wall Take one down and pass it around"
let c1 = 16
let c2 = 28
let MaxBottles = 5
let English    = 1
let Latin      = 2


For L = English to Latin
    let BottleCount = MaxBottles
    clear
    do
      call SingPhrase(c2, "...")
      call SingPhrase(c1, "...")
      print NTxt$[c2+2:MAXNUM];"..."
      let BottleCount = BottleCount-1
      call SingPhrase(c2, "!")

      print
      pause .2
    loop while BottleCount > 0

    print "press any key"
    get key kk
Next L


sub SingPhrase(p, p$)
      print Say$(L,BottleCount);
NTxt$[1:7];"s"[NotOne(BottleCount):NotOne(BottleCount)];NTxt$[9:p];p$
end sub


END !-------------------------------------



DEF NotOne(n)
    if n <> 1 then let NotOne = 1 else let NotOne = 0
END DEF


DEF Say$(L, BottleCount)
    LIBRARY "..\TBLibs\StrLib.TRC"
    declare def Roman$, EnglishNum$

    if L = 1 then
       let Say$ = EnglishNum$(BottleCount) 
    else
       if BottleCount = 0 then let Say$ = "No more" else let Say$ = Roman$(BottleCount)
    end if
END DEF


!====================================================================================

Output Samples
=========
 ENGLISH
=========
Ninety-nine bottles of beer on the wall...
...

Five bottles of beer on the wall...
Five bottles of beer...
Take one down and pass it around...
Four bottles of beer on the wall!


Four bottles of beer on the wall...
Four bottles of beer...
Take one down and pass it around...
Three bottles of beer on the wall!

Three bottles of beer on the wall...
Three bottles of beer...
Take one down and pass it around...
Two bottles of beer on the wall!

Two bottles of beer on the wall...
Two bottles of beer...
Take one down and pass it around...
One bottle of beer on the wall!

One bottle of beer on the wall...
One bottle of beer...
Take one down and pass it around...
Zero bottles of beer on the wall!

=======
 LATIN
=======
XCIX bottles of beer on the wall...
...

V bottles of beer on the wall...
V bottles of beer...
Take one down and pass it around...
IV bottles of beer on the wall!

IV bottles of beer on the wall...
IV bottles of beer...
Take one down and pass it around...
III bottles of beer on the wall!

III bottles of beer on the wall...
III bottles of beer...
Take one down and pass it around...
II bottles of beer on the wall!

II bottles of beer on the wall...
II bottles of beer...
Take one down and pass it around...
I bottle of beer on the wall!

I bottle of beer on the wall...
I bottle of beer...
Take one down and pass it around...
No more bottles of beer on the wall!```