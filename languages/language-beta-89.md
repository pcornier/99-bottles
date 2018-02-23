
## Language BETA ##
---
- Author: Anonymous
- Date: 04/20/05
- Info: n/a
- Score:  (3.00 in 11 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-beta-89.html
---

```ORIGIN '~beta/basiclib/v1.4/betaenv';
--- program: descriptor ---
(* 99 bottles in BETA. Ole Villumsen, October 27, 1995. *)
(# putBottles: (# no: @integer;
               enter no
               do (if no//1 then '1 bottle' -> putLine;
                  else no -> putInt; ' bottles' -> putText;
                  if);
               #);
do (for i:99 repeat
     100-i -> putBottles; ' of beer on the wall,' -> putLine;
     100-i -> putBottles; ' of beer.' -> putLine;
     'Take one down, pass it around,' -> putLine;
     99-1 -> putBottles; ' of beer on the wall.' -> putLine; newLine;
   for)
#)```