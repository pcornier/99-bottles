
## Language Cold Fusion ##
---
- Author: Steven Reich, Michael Dinowitz
- Date: 04/20/05
- Info: n/a
- Score:  (2.95 in 20 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-cold-fusion-139.html
---

```<!---  99 Bottles of Beer in Cold Fusion by Steven Reich tauman@earthlink.net --->
<!---  Additions by Michael Dinowitz --->

<HTML>
<HEAD>
<TITLE>Bottles of Beer</TITLE>
</HEAD>

<BODY>

<CFLOOP INDEX="idx" FROM="99" TO="2" STEP="-1">
<CFOUTPUT>
#idx# Bottles of Beer on the wall, #idx# Bottles of Beer,
<BR>Take one down, pass it around, #Evaluate(idx - 1)# Bottles of 
Beer on the wall
<P>
</CFOUTPUT>
</CFLOOP>
1 Bottle of Beer on the wall, 1 Bottle of Beer,
<BR>Take one down, pass it around, no Bottles of Beer on the wall

</BODY>
</HTML>```