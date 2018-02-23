
## Language icarus ##
---
- Author: Jack Leunissen
- Date: 03/29/07
- Info: http
- Score:  (3.33 in 3 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-icarus-1431.html
---

```#
# ICARUS script of the (in)famous 99-bottles-of-beer
# Icarus is the parsing and indexing engine of SRS
# "Sequence Retrieval System", owned by biowisdom.com
#
# Jack Leunissen, 29-Mar-2007
#
$i=99
while:$i>0 {
   $Print:$i $Print:" bottle" if:$i!=1 $Print:"s" $Print:| of beer on the wall,
   $Print:$i $Print:" bottle" if:$i!=1 $Print:"s" $Print:| of beer.
   $i--
   $Print:|Take one down, pass it around.
   if:$i==0 $Print:"No more" else $Print:$i 
   $Print:" bottle" if:$i!=1 $Print:"s"
   $Print:| of beer on the wall.
          |
}```