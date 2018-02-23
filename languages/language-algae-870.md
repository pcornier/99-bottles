
## Language Algae ##
---
- Author: caminoix
- Date: 09/15/05
- Info: http
- Score:  (2.72 in 153 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-algae-870.html
---

```#Algae is a programming language for numerical analysis. It has been applied to problems
#in aerospace and related fields for more than a decade. - http://algae.sourceforge.net/

#If you like this script, I would be most grateful if you could visit
#http://p2p.info.pl/eng/index.php and click a Google ad ;)

for (count in 99:2){
  if (count>2) {s="s"; else s="";}
  printf(string(count)+" bottles of beer on the wall, "+string(count)+" bottles of beer.\n");
  printf("Take one down and pass it around, "+string(count-1)+" bottle"+s+" of beer on the wall.");
  printf("\n\n");
}
printf("1 bottle of beer on the wall, 1 bottle of beer.\n");
printf("Take one down and pass it around, no more bottles of beer on the wall.\n\n");
printf("No more bottles of beer on the wall, no more bottles of beer.\n");
printf("Go to the store and buy some more, 99 bottles of beer on the wall.\n\n");```