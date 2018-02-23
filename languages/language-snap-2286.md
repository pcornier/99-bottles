
## Language SNAP ##
---
- Author: Rod Pullmann
- Date: 01/03/10
- Info: http
- Score:  (3.50 in 2 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-snap-2286.html
---

```n = 99
nbottles = (n:1:-1) $>"No more"
outa_beer = datatype.each(nbottles)!=INT
plural = ("s","")[`==='.each(nbottles,cast(INT,1))]
todolist = ("Take one down and pass it around"   ...
           ,"Go to the store and buy some more") ...
           [outa_beer]
song = "%s bottle%s of beer on the wall, %s bottle%s of beer.\n" ...
       "%s, %s bottle%s of beer on the wall.\n\n"
m = cat(cat(cat(lam(nbottles,plural)                   ...
               ,lam(lowercase_quant(nbottles),plural)) ...
           ,todolist)                                  ...
       ,lam(lowercase_quant(rot(1,nbottles))           ...
           ,rot(1,plural)))
displ sprintf(song,$>m)

//------------------
func lowercase_quant
{
  textmask = datatype.each(arg)!=INT
  return (merge(textmask            ...
               ,(sel(!textmask,arg) ...
                ,each(`xlat.lower',sel(textmask,arg)))))
}```