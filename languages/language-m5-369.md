
## Language M5 ##
---
- Author: Ron Franke-Polz
- Date: 04/20/05
- Info: n/a
- Score:  (3.50 in 2 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-m5-369.html
---

```!rem 99 bottles of beer in the M5 macro language
!rem programmer Ron Franke-Polz - ronaldFP@aol.com
!rem
!rem define a macro which contains the song
!rem
!macro song
[v $1] [if [eq $1 1] "bottle" "bottles"] of beer on the wall,
[v $1] [if [eq $1 1] "bottle" "bottles"] of beer,
take one down and pass it around,
[if [eq [- $1 1] 1] "No more" [- $1 1]] [if [eq [- $1 1] 1] "bottle" "bottles"] of beer on the
wall.

!endm
!rem
!rem sing the song 99 times
!rem
!eval [set count 99]
!while count
    !song (count)
    !eval [-- count]
!endwhile```