
## Language Mumps ##
---
- Author: Brian Buydens
- Date: 04/20/05
- Info: n/a
- Score:  (2.18 in 11 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-mumps-416.html
---

```BEER ;  99 bottles of beer song written in mumps (Brian Buydens)
  N STR,I,BOT
  S STR="bottle^bottles^of beer^on the wall^Take one down and pass it
around"
  F I=99:-1:1 D
  . S BOT=$P(STR,"^",2) I I=1 S BOT=$P(STR,"^",1)
  . W !,!,I_" "_BOT_" "_$P(STR,"^",3)_" "_$P(STR,"^",4)_"."
  . W !,I_" "_BOT_" "_$P(STR,"^",3)_"."
  . W !,$P(STR,"^",5)_", "
  . S BOT=$P(STR,"^",2) I I=2 S BOT=$P(STR,"^",1)
  . I I>1 W !,(I-1)_" "_BOT_" "_$P(STR,"^",3)_" "_$P(STR,"^",4)_"."
  . I I=1 W !,"No more bottles of beer on the wall."```