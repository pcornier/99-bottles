
## Language Anduril ##
---
- Author: Ville Rantanen
- Date: 07/08/11
- Info: http
- Score:  (3.00 in 18 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-anduril-2699.html
---

```beers=99
verse1="of beer on the wall"
verse2="Take one down and pass it around, "
for x:std.range(beers,1) {
    if (x>1) s="s" else s=""
    std.echo("\n"+x+" bottle"+s,verse1+", "+x+" bottle"+s+" of beer.")
    if ((x-1)>1) s="s" else s=""
    if (x>1) 
        std.echo(verse2+(x-1)+" bottle"+s,verse1+".")
    else
        std.echo(verse2+"no more bottles",verse1+".")
}
std.echo("\nNo more bottles",verse1+", no more bottles of beer. \n"+
  "Go to the store and buy some more, "+beers+" bottles",verse1+".")```