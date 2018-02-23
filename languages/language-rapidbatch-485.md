
## Language RapidBATCH ##
---
- Author: Philipp Winterberg
- Date: 04/20/05
- Info: http
- Score:  (1.58 in 12 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-rapidbatch-485.html
---

```% RapidBATCH version of 99 Bottles of beer (Bottles.rb)
% http://www.jmksf.com/rbatch.html.
% Philipp Winterberg, http://www.winterbergs.de
Title 99 Bottles of Beer
Dec [b]
Let [b]=99
%next
EchoLn [b]
EchoLn bottle(s) of beer on the wall,
EchoLn [b]
EchoLn bottle(s) of beer.
EchoLn Take one down, pass it around,
CalcVar [b]=[b]-'1'
EchoLn [b]
EchoLn bottle(s) of beer on the wall.
If Not [b]='0' GoTo next
Wait
End```