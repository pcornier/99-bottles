
## Language POV-Ray 3.5 ##
---
- Author: Tobias Gruetzmacher
- Date: 05/28/05
- Info: n/a
- Score:  (3.00 in 16 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-pov-ray-3.5-700.html
---

```// POV-Ray 3.5 file for the 99 bottles of beer ...
// Author: Tobias Gruetzmacher <99bottles@portfolio16.de>
// This really renders 99 pictures with each stanza
// in it when started with:
//   povray -KI99.0 -KF1.0 -KFI1 -KFF99 99.pov
// For a nicer version use this:
//   povray -KI99.0 -KF1.0 -KFI1 -KFF99 -W640 -H480 99.pov

#declare Pl = " bottles"
#declare Line1 = " of beer on the wall,"
#declare Line2 = " of beer."
#declare Line3 = "Take one down and pass it around,"
#declare Line4 = " of beer on the wall."
#declare BeerS = ""

#macro MakeReadable( In, Out )
  #if (In = 1)
    #declare Out = "1 bottle"
  #else
    #if (In = 0)
      #declare Out = "No more bottles"
    #else
      #declare Out = concat(str(In,0,0),Pl)
    #end
  #end
#end

#declare Beer = clock;

MakeReadable(Beer, BeerS)
#declare Line1 = concat(BeerS, Line1)
#declare Line2 = concat(BeerS, Line2)

#declare Beer = Beer - 1;
MakeReadable(Beer, BeerS)
#declare Line4 = concat(BeerS, Line4)

sphere {
  <-10,0,0>
  15
  pigment { colour rgb <0,1,0> }
}

text {
  ttf "crystal.ttf" Line1 0.5, 0
  rotate <0,-90,0>
  translate <10,1.8,-8>
  pigment {color rgb <1,0,0>}
}

text {
  ttf "crystal.ttf" Line2 0.5, 0
  rotate <0,-90,0>
  translate <10,0.6,-8>
  pigment {color rgb <1,0,0>}
}

text {
  ttf "crystal.ttf" Line3 0.5, 0
  rotate <0,-90,0>
  translate <10,-0.6,-8>
  pigment {color rgb <1,0,0>}
}

text {
  ttf "crystal.ttf" Line4 0.5, 0
  rotate <0,-90,0>
  translate <10,-1.8,-8>
  pigment {color rgb <1,0,0>}
}


light_source { <30,0,0>, colour rgb 1 }

camera {
  perspective
  location <24,10,-8>
  look_at <0,0,0>
}```