
## Language hackMongo ##
---
- Author: Geza Gyuk
- Date: 04/20/05
- Info: n/a
- Score:  (2.29 in 28 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-hackmongo-299.html
---

```hackMongo is an extension of the Mongo plotting package

! Does the beer song... sends output to a postscript file
! Geza Gyuk - gyuk@oddjob.uchicago.edu

printer 1
erase

data beer.dat
setv rounds c1(1)                       ! get number of rounds
                                        ! from first line, first
setv container bottles                  ! column of file beer.dat
expand {5/rounds}
loop i {rounds} 2 -1
   relocate 0.1 {i*5/(5*rounds)}
   putlabel 6 {i} bottles of beer on the wall,
   relocate 0.1 {(i*5-1)/(5*rounds)}
   putlabel 6 {i} bottles of beer,
   relocate 0.1 {(i*5-2)/(5*rounds)}
   putlabel 6 take one down and pass it around,
   if ({i}=2) setv container bottle
   relocate 0.1 {(i*5-3)/(5*rounds)}
   putlabel 6 {i-1} {container} of beer on the wall.
   relocate 0.1 {(i*5-4)/(5*rounds)}
   putlabel 6
endloop

relocate 0.1 {5/(5*rounds)}
putlabel 6 1 bottle of beer on the wall,
relocate 0.1 {4/(5*rounds)}
putlabel 6 1 bottle of beer,
relocate 0.1 {3/(5*rounds)}
putlabel 6 take it down and pass it around,
relocate 0.1 {2/(5*rounds)}
putlabel 6 no more bottles of beer on the wall.

hardcopy
end```