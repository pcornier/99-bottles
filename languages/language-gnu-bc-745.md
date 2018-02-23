
## Language GNU bc ##
---
- Author: Laurent Le Brun
- Date: 06/12/05
- Info: http
- Score:  (2.95 in 104 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-gnu-bc-745.html
---

```/* Author: Laurent Le Brun <llb [at] fr.fm>
/*   few improvements by Micha�l Cadilhac <cadilhac-@t-lrde.epita.fr>
/* GNU bc version of 99 bottles of beer
 */

i = 100
while (i--) {
  print i, " bottle"; if (i != 1) "s"; print  " of beer on the wall, "
  print i, " bottle"; if (i != 1) "s"; print  " of beer.\n"
  print "Take one down, pass it around. "
  if (i == 1) break
  print i - 1; " bottle"; if (i != 2) "s"; print " of beer on the wall.\n\n"
}

print "no more bottles of beer on the wall.\n\n"
print "No more bottle of beer on the wall. No more bottles of beer...\n"
print "Go to the store and buy some more...99 bottles of beer.\n\n"
quit```