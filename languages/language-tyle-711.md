
## Language Tyle ##
---
- Author: Michiel Visser
- Date: 05/30/05
- Info: n/a
- Score:  (2.92 in 126 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-tyle-711.html
---

```// 99 Bottles of beer, in Tyle (www.parkserver.net/michiel), using no libraries.

b = ?{" bottle",$!=1?"s"," of beer"};
c = ?{=$,!b};
puts{" on the wall, ".! { 99 .! $>0 ?! {!c,$2,!c,".\n Take one down, pass 
it around, ",$-=1;!c," on the wall.\n"}, 
  "No more",b(0),$2,"\ngo to the store and buy some 
more.\n",c(99),".\n"}};```