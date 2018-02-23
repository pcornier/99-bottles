
## Language NVML ##
---
- Author: Thomas J. Hruska
- Date: 05/18/05
- Info: http
- Score:  (1.00 in 1 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-nvml-667.html
---

```<nvdebug type="off">

<nv!> Deal with primary cases. </nv!>
<nvfor var="Loop1" initial="99" condition="<Loop1> > 2" increment="-1">
  <nv-math operation="round" value="<Loop1>" places="0"> bottles of beer on the wall,<br>
  <nv-math operation="round" value="<Loop1>" places="0"> bottles of beer.<br>
  Take one down, pass it around,<br>
  <nv-math operation="round" value="<Loop1> - 1" places="0"> bottles of beer on the wall.<br>
  <br>

</nvfor>

<nv!> Deal with pathological cases. </nv!>
2 bottles of beer on the wall,<br>
2 bottles of beer.<br>
Take one down, pass it around,<br>
1 bottle of beer on the wall.<br>
<br>

1 bottle of beer on the wall,<br>
1 bottle of beer.<br>
Take one down, pass it around,<br>
No more bottles of beer on the wall.<br>
(You hurry to the store but return to find your bar burninated).<br>
(Oh well, have 99 bottles of beer to yourself).<br>```