
## Language GAP ##
---
- Author: Mike Hoolehan
- Date: 04/20/05
- Info: n/a
- Score:  (2.83 in 12 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-gap-275.html
---

```#########################################################################
# BottlesOfBeer.g by Mike Hoolehan (mike@sycamorehq.com)
# for GAP (http://www-groups.dcs.st-andrews.ac.uk/~gap/)
# this is a really silly way to do it, but I want to show off some GAP
# Jan 5, 2002
#########################################################################
NumBottles := 99;;
BottleRing := ZmodnZ(NumBottles+1);;
BottleGenerator := GeneratorsOfRing(BottleRing)[1];;

for i in Reversed([1..Size(BottleRing)-1]) do
    CurrentBottles:=Int(i*BottleGenerator);
    Print(CurrentBottles, " bottle(s) of residue class beer on the wall.\n");
    Print(CurrentBottles, " bottle(s) of residue class beer.\n");
    Print("Take one down, reduce the power of the ring generator.\n");
    Print(CurrentBottles-1, " bottle(s) of beer on the wall.\n\n");
od```