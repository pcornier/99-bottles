
## Language Notes@Formula ##
---
- Author: Brandon Zylstra
- Date: 05/28/05
- Info: n/a
- Score:  (2.45 in 11 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-notes@formula-701.html
---

```REM {ND6 version of 99 Bottles of Beer on the Wall};
REM { by Brandon Zylstra of ZebraFish Studios }; 
REM { www.zebrafishstudios.com }; 
REM { (see also kludgey R5 version) }; 
REM { put the following in computed text: };
@For(b := 99; b > 0; b := b - 1; Verses := Verses + @Text(b) + (word := @If(b = 1; " bottle ";
"bottles"))+ "of beer on the wall, " + @Text(b) + word + "of beer. " + (nl :=@NewLine) + "Take " +
@If(b = 1; "it" ; "one") + " down, pass itaround, " + @If(b = 1; "no" ;@Text(b-1)) + @If(b-1 = 1; "
bottle "; "bottles ") + "of beer on the wall." + nl); Verses```