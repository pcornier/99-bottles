
## Language APL ##
---
- Author: John A. Estep
- Date: 05/22/05
- Info: n/a
- Score:  (2.54 in 13 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-apl-679.html
---

```    ' beer1;count;fc;s;s2
[1]   :for count :in ��99
[2]       fc".count � s"(count�1)/'s' � s2"(count�2)/'s'
[3]       fc,' bottle',s,' of beer on the wall, ',fc,' bottle',s,' of beer; take 1 down, pass it
around, ',(.count-1),' bottle',s2,' of beer on the wall.'
[4]   :endfor
    '```