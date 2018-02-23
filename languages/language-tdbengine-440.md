
## Language tdbengine ##
---
- Author: Horst Klier
- Date: 04/20/05
- Info: n/a
- Score:  (3.50 in 4 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-tdbengine-440.html
---

```// 99 bottles of beer - tdbengine version
// 03.06.2002 Horst Klier (www.klier.net)

procedure Main
  var nBottles : Integer
  var s : String
  CgiCloseBuffer
  nBottles:=99
  while nBottles>=0
    if nBottles=1
      s:=''
    else
      s:='s'
    end
    CgiWriteLn(Str(nBottles)+' bottle'+s+' of beer on the wall,')
    CgiWriteLn(Str(nBottles)+' bottle'+s+' of beer,')
    if nBottles=0
      CgiWriteLn('Go to the store, buy some more,')
      CgiWriteLn('99 bottles of beer on the wall.')
    else
      CgiWriteLn('Take one down and pass it around,')
      CgiWriteLn(Str(nBottles)+' bottle'+s+' of beer on the wall,')
    end
    nBottles--
  end
endproc```