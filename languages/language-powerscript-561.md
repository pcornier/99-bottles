
## Language PowerScript ##
---
- Author: Nathan Pralle, Ryan Grummer
- Date: 04/20/05
- Info: n/a
- Score:  (3.01 in 101 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-powerscript-561.html
---

```$PBExportHeader$f_99_bottlesofbeer.srf
global type f_99_bottlesOfBeer from function_object
end type

forward prototypes
global function integer f_99_bottlesofbeer ()
end prototypes

global function integer f_99_bottlesofbeer ();//PowerScript Version
//99 Bottles of Beer on the Wall
//PowerScript 8.x in PowerBuilder 8.x by Sybase
//www.sybase.com
//Written by:
//  Nathan Pralle http://tarsi.binhost.com
//  Ryan Grummer rgrummer@frontiernet.net

long ll_numBottles=99
string ls_message

do while(ll_numBottles>0)
         ls_message=string(ll_numBottles)+" bottle(s) of beer on the wall.~r~n"
         ls_message=ls_message+string(ll_numBottles)+" bottle(s) of beer.~r~n"
         ls_message=ls_message+"Take one down, pass it around.~r~n"
         ls_message=ls_message+string(ll_numBottles - 1)+" bottle(s) of 
beer on the wall."
         MessageBox("99 Bottles of Beer",ls_message)
         ll_numBottles=ll_numBottles - 1
loop
return 1

end function```