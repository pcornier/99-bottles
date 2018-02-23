
## Language SIMPLE ##
---
- Author: Laurent Vogel
- Date: 04/20/05
- Info: http
- Score:  (1.67 in 6 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-simple-594.html
---

```%  SIMPLE version of 99 bottles of beer
%  Laurent Vogel,  http://lvogel.free.fr
%  SIMPLE at http://www.eleves.ens.fr:8080/home/madore/simple.tgz

<def|p|[<if|@1@|0|No more|@1@>] bottle[<if|@1@|1||s>] of beer><def|r|
><def|i|99><def|loop|[<p|<i>>]<def|w| on the wall><w>,<r>[<p|<i>>].
Take one down, pass it around,[<def|i|<-|<i>|1>>]<r>[<p|<i>>]<w>.
[<if|<i>|0||<r>[<loop>]>]><loop>```