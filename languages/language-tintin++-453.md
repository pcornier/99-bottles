
## Language TinTin++ ##
---
- Author: Andrew Forster
- Date: 04/20/05
- Info: n/a
- Score:  (1.00 in 3 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-tintin++-453.html
---

```#nop 99 Bottles of beer for TinTin++ (Mud Client)
#nop Coded 1997, Andrew Forster <bluemeat@mono.org>
#var {do} {#showme}
#nop (can use say if you want to sing to the mud :-) )
#alias {beer %0} {#math {wang} {%%0-1}; $do %0 bottles of beer on the
wall; $do %0 bottles of beer; $do take one down, pass it around,;
beerloop; nobeer;}
#nop The initial part of the beer call
#alias {beerloop} {bl $wang}
#nop a weird way of doing it, but the only way I can see of getting the
#nop maths to propagate into the beer statement.
#alias {bl %0} {#loop {%%0, 2} {$do %0 bottles of beer on the wall; $do
-------; $do %0 bottles of beer on the wall; $do %0 bottles of beer; $do
take one down, pass it around; $do one bottle of beer on the wall}}
#nop The main loop of the beer passing
#alias {nobeer} {$do --------; $do one bottle of beer on the wall; $do
one bottle of beer; $do take one down pass it around; $do fuck me
there's no beer left; }
#nop No beer left. So give up :-)```