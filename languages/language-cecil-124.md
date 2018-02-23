
## Language Cecil ##
---
- Author: David Eddyshaw
- Date: 04/20/05
- Info: n/a
- Score:  (3.00 in 6 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-cecil-124.html
---

```-- 99 Bottles of Beer in Cecil
-- by David Eddyshaw, david@jeddyshaw.freeserve.co.uk
-- See http://www.cs.washington.edu/research/projects/cecil/www/cecil-home.html

method bob(n@int) {
    if(n == 0, { "No more bottles".print },
  { if(n == 1, { "1 bottle".print },
               {  n.print; " bottles".print })})
}

do (99, &(i) {
  bob(99-i); " of beer on the wall,".print_line;
  bob(99-i); " of beer;".print_line;
  "Take one down and pass it around:".print_line;
  bob(98-i); " of beer on the wall.\n".print_line;
});```