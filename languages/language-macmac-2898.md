
## Language Macmac ##
---
- Author: Marinus Oosters
- Date: 06/12/12
- Info: http
- Score:  (3.00 in 2 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-macmac-2898.html
---

```<bottles>{exec(put(32),put(98),put(111),put(116),put(116),[bottles2])}
<bottles2>{exec(put(108),put(101),ifdiff(recall(),1,put(115)))}

<ofbeer>{exec(put(32),put(111),put(102),put(32),put(98),put(101),[ofbeer2])}
<ofbeer2>{exec(put(101),put(114))}

<onthewall>{exec(put(32),put(111),put(110),put(32),put(116),[onthewall2])}
<onthewall2>{exec(put(104),put(101),put(32),put(119),put(97),[onthewall3])}
<onthewall3>{exec(put(108),put(108))}

<takedown>{exec(put(84),put(97),put(107),put(101),put(32),[takedown2])}
<takedown2>{exec(put(111),put(110),put(101),put(32),put(100),[takedown3])}
<takedown3>{exec(put(111),put(119),put(110),put(32),put(97),[takedown4])}
<takedown4>{exec(put(110),put(100),put(32),put(112),put(97),[takedown5])}
<takedown5>{exec(put(115),put(115),put(32),put(105),put(116),[takedown6])}
<takedown6>{exec(put(32),put(97),put(114),put(111),put(117),[takedown7])}
<takedown7>{exec(put(110),put(100))}

<gostore>{exec(put(71),put(111),put(32),put(116),put(111),put(32),[gostore2])}
<gostore2>{exec(put(116),put(104),put(101),put(32),put(115),[gostore3])}
<gostore3>{exec(put(116),put(111),put(114),put(101),put(32),[gostore4])}
<gostore4>{exec(put(97),put(110),put(100),put(32),put(98),put(117),[gostore5])}
<gostore5>{exec(put(121),put(32),put(115),put(111),put(109),[gostore6])}
<gostore6>{exec(put(101),put(32),put(109),put(111),put(114),put(101))}

<nl>{exec(put(10),put(13))}

<nomore>{exec(put(78),put(111),put(32),put(109),put(111),put(114),put(101))}

<pnum>{ifsame(recall(),0,[nomore],ifless(recall(),0,[nn],exec([nhi],[nlo])))}
<nn>{exec(put(57),put(57))}
<nlo>{put(add(48,mod(recall(),10)))}
<nhi>{ifdiff(div(recall(),10),0,put(add(48,div(recall(),10))))}

<first>{exec([pnum],[bottles],[ofbeer],[onthewall],put(44),[nl])}
<second>{exec([pnum],[bottles],[ofbeer],put(44),[nl])}
<third>{exec(ifsame(recall(),0,[gostore],[takedown]),put(44),[nl])}
<fourth>{exec([pnum],[bottles],[ofbeer],[onthewall],put(46),[nl],[nl])}

<drink>{store(sub(recall(),1))}

<verse>{exec([first],[second],[third],[drink],[fourth])}

<sing>{exec([verse],ifless(recall(),0,0,[sing]))}

store(99)
[sing]```