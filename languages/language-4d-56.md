
## Language 4D ##
---
- Author: Anonymous
- Date: 04/20/05
- Info: n/a
- Score:  (2.59 in 22 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-4d-56.html
---

```  `<A HREF="http://www.4d.com">4th Dimension</A> is a
  ` RDBMS development environment
  `available for Macintosh and Windows.

  ` 4D version of 99 bottles of bottels of beer on the wall
  ` 2003 (john.windberg@dwdev.com)

ON ERR CALL("")
C_STRING(1;$s)
C_INTEGER($beers;$tickCount;$delay)
$delay:=100
$s:="s";

For ($beers;4;0;-1)
MESSAGE(String($beers)+" bottle"+$s+" of beer on the
wall, ")
$tickCount:=Tickcount
While (Tickcount<($tickCount+$delay))
DELAY PROCESS(Current process;1)
End while 

MESSAGE(String($beers)+" bottle"+$s+" of beer, ")
$tickCount:=Tickcount
While (Tickcount<($tickCount+$delay))
DELAY PROCESS(Current process;1)
End while 

If ($beers=0)

MESSAGE("Go to the store, buy some more, ")
$tickCount:=Tickcount
While (Tickcount<($tickCount+$delay))
DELAY PROCESS(Current process;1)
End while 

MESSAGE("99 bottles of beer on the wall.")
$tickCount:=Tickcount
While (Tickcount<($tickCount+$delay))
DELAY PROCESS(Current process;1)
End while 

Else 
MESSAGE("Take one down, pass it around, ")
$tickCount:=Tickcount
While (Tickcount<($tickCount+$delay))
DELAY PROCESS(Current process;1)
End while 

If ($beers=2)
$s:=""
Else 
$s:="s"
End if 

MESSAGE(String($beers-1)+" bottle"+$s+" of beer on the
wall.")
$tickCount:=Tickcount
While (Tickcount<($tickCount+$delay))
DELAY PROCESS(Current process;1)
End while 

End if 

End for```