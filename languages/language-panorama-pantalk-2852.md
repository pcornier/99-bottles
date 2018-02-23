
## Language Panorama Pantalk ##
---
- Author: Kenneth I. Laws
- Date: 03/15/12
- Info: http
- Score:  (2.00 in 1 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-panorama-pantalk-2852.html
---

```// Written in 2007 after I saw David Thompson's version.
// A bit of a cheat, since it's just a big string replacement; could be
// coded in any language with replacemultiple() and arrayfilter functions.
// All the alphabetic and numeric symbols are just replacement targets.
// Pantalk does so much more: it's a full language, with primitives useful
// for manipulating database records and fields and for writing
// full database systems (such as the Panorama application itself).

Lyrics=replacemultiple(rep("1BSOW, 2BSO.�R, 3BSOW.��",97)
       +"1BSOW, 2BSO.�R, 3BOW.��1BOW, 2BO.�R, 3MBSOW.�"
       +"�1MBSOW, 2MBSO.�QM, 3BSOW.",
   "B|S|O|W|R|Q|M|�"," bottle|s| of beer| on the wall|"
   +"Take one down and pass it around|"
   +"Go to the store and buy some| more|"+�,"|")

arrayfilter Lyrics,Lyrics,�,replacemultiple(import(),"1|2|3|�",
   Pattern(100-seq(),"�")+"|"+lower(Pattern(100-seq(),"�"))+"|"
   +lower(Pattern((199-seq()) mod 100,"�"))+"|"+�,"|")```