
## Language POV-Ray ##
---
- Author: Anonymous
- Date: 04/20/05
- Info: n/a
- Score:  (4.25 in 4 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-pov-ray-559.html
---

```POV-Ray is a ray-tracing program.

// povray 3 file for the 99 bottles of beer ...

#declare S1 = " bottles"
#declare L1 = " of beer on the wall,\n"
#declare L2 = " of beer.\n"
#declare L3 = "Take one down and pass it around,\n"
#declare L4 = " of beer on the wall.\n\n"

#declare Beer = 99
#declare S2 = concat(str(Beer,0,0),S1)

#render "\n"

#while (Beer > 0)
  #render concat(S2,L1)
  #render concat(S2,L2)
  #render L3

  #declare Beer = Beer - 1

  #if (Beer = 1)
    #declare S2 = "1 bottle"
  #else
    #if (Beer = 0)
      #declare S2 = "No more bottles"
    #else
      #declare S2 = concat(str(Beer,0,0),S1)
    #end
  #end

  #render concat(S2,L4)
#end

sphere { 0, 1 pigment { colour rgb <1,0,0> } }

light_source { x*2, colour rgb 1 }

camera {
  perspective
  location x*2
  look_at 0
}```