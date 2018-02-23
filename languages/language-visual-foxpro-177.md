
## Language Visual Foxpro ##
---
- Author: Richard Katz
- Date: 04/20/05
- Info: n/a
- Score:  (3.02 in 42 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-visual-foxpro-177.html
---

```********************************************
* TAKE1DN.PRG  (For Visual Foxpro)         *
* 99 Bottles: A simulation                 *
* Richard Katz                             *
* richkatz@earthlink.net                   *
********************************************

wall=createobject("dispcontainer")
wall.name="wall"
clear

**************************************
* First put the beer on the wall.
for i=1 to 99
    oname="b"+ltri(str(i))
    wall.addobject(oname,"bottle")
endfor

**************************************
* So we can get what's in the bottles...
obcont=wall.objects(1).content

***************************************
* And away we go.
do while wall.controlcount>0 
   ? wall.dispself(), "of",obcont,"on the",lower(wall.name)+","
   ? wall.dispself(), "of", obcont    
   wall.removeobject(wall.objects(wall.controlcount).name)
   ? wall.dispself(), "of", obcont
   if wall.controlcount>0
      ?? ",  Oh..."
   endif      
enddo   
define class dispcontainer as container
proc dispself

return ltri(str(this.controlcount))+" "+this.dispobj()
proc dispobj    
   if this.controlcount>0
      obout=lower(this.objects(1).class)
   else
      obout="nothing"
   endif
   if this.controlcount<>1
      obout=obout+"s"
   endif
return obout   
enddefine

define class bottle as custom
  content="beer"
  proc destroy
    ? "take one down, pass it around."
  endproc
enddefine```