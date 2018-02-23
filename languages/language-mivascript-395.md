
## Language MivaScript ##
---
- Author: Darren Ehlers
- Date: 04/20/05
- Info: n/a
- Score:  (3.00 in 2 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-mivascript-395.html
---

```<MvCOMMENT> MivaScript version of 99 Bottles of beer</MvCOMMENT>
<MvCOMMENT> See http://www.miva.com/ </MvCOMMENT> 
<MvCOMMENT> Darren Ehlers, http://www.ehlersconsulting.net </MvCOMMENT> 

<MvASSIGN NAME = "l.b" VALUE = "{ 99 }">
<MvWHILE EXPR = "{ l.b LT 0 }">
  <MvEVAL EXPR = "{ l.b $ ' bottle(s) of beer on the wall,<BR>' }">
  <MvEVAL EXPR = "{ l.b $ ' bottle(s) of beer.<BR>' }">
  <MvEVAL EXPR = "{ 'Take one down, pass it around,<BR>' }">
  <MvASSIGN NAME = "l.b" VALUE = "{ l.b - 1 }">
  <MvEVAL EXPR = "{ l.b $ ' bottle(s) of beer on the wall.<BR><BR>' }">
</MvWHILE>```