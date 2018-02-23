
## Language R4 script ##
---
- Author: Kang Seonghoon (Tokigun)
- Date: 06/24/05
- Info: http
- Score:  (2.33 in 3 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-r4-script-762.html
---

```<!--
99 Bottles of Beer in R4 Script (for network interface)
Written by Kang Seonghoon (Tokigun), 2005-06-24.
This program is in public domain.

1. Put this script in <R4root>\data\wwwroot\beersong.html.
2. Turn the network interface on.
3. Visit http://localhost:(port)/beersong.html with your favorite browser.

Tested with R4 1v06 and 1v20.
Note that the lines below should be put into a single line.
-->
### strcat(hide(set([x],[]),set([s],[99 bottles of
beer]),set([i],[99]),while([get([i])],[set([x],strcat(get([x]),get([s]),[ on the
wall,],newline(),get([s]),[.],newline(),[Take one down, pass it
around,],newline(),hide(set([i],round(sub(get([i]),[1]))),set([s],strcat(if(get([i]),[get([i])],[[No]]),[
bottle],if(sub(get[i],[1]),[[s]],[[]]),[ of beer]))),get([s]),[ on the
wall.],newline(),newline()))])),[<pre>],get([x]),[</pre>])```