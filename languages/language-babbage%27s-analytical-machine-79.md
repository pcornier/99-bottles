
## Language Babbage's analytical machine ##
---
- Author: Greg Cook
- Date: 04/20/05
- Info: http
- Score:  (3.00 in 42 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-babbage%27s-analytical-machine-79.html
---

```his is an emulation of Babbage's original design.  
Details and the emulator may be found at 
<a href=http://www.fourmilab.ch/babbage/>http://www.fourmilab.ch/babbage/</a>

. 99 bottles of beer song
. written for Babbage's Analytical Engine with Attendant
. by Greg Cook 15/1/1998
. Attendant converts flow structure to conditional jumps

. No new line after number
A write in columns

. constants
N000  0
N001  1
N002  2

. bottle count
N003 99

(?
-
L003
P
. finish subtraction to compare bottles to 1
L002
{?
A write annotation  bottles
}{
A write annotation  bottle
}
A write annotation  of beer on the wall,
A write new line

. new subtraction card to clear mill
-
L003
P
L002
{?
A write annotation  bottles
}{
A write annotation  bottle
}
A write annotation  of beer,
A write new line
A write annotation Take one down and pass it around,
A write new line

. Still subtracting, update counter
L003
L001
S003
. compare for 0 this time
L003
L001
{?
. if <=0 then don't finish verse
-
L003
P
L002
{?
A write annotation  bottles
}{
A write annotation  bottle
}
A write annotation  of beer on the wall.
A write new line
A write new line
}
. if >0 then continue loop
L000
L003
)
A write annotation No more bottles of beer on the wall!
A write new line```