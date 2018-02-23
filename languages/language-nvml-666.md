
## Language NVML ##
---
- Author: Thomas J. Hruska
- Date: 05/18/05
- Info: http
- Score:  (2.71 in 14 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-nvml-666.html
---

```<nvmlmode type="binary">
<nvdebug type="off">
<nvrestart>

<nv!> Deal with primary cases. </nv!>
<nvfor var="Loop1" initial="99" condition="<Loop1> > 2" increment="-1">
  <nvdirect var="TempVar" processtags><nv-math operation="round" value="<Loop1>" places="0"> bottles
of beer on the wall,
<nv-math operation="round" value="<Loop1>" places="0"> bottles of beer.
Take one down, pass it around,
<nv-math operation="round" value="<Loop1> - 1" places="0"> bottles of beer on the wall.

</nvdirect>
  <nvbinary var="TempVar">
</nvfor>

<nv!> Deal with pathological cases. </nv!>
<nvdirect var="TempVar" processtags>2 bottles of beer on the wall,
2 bottles of beer.
Take one down, pass it around,
1 bottle of beer on the wall.

</nvdirect>
<nvbinary var="TempVar">

<nvdirect var="TempVar" processtags>1 bottle of beer on the wall,
1 bottle of beer.
Take one down, pass it around,
No more bottles of beer on the wall.
(You hurry to the store but return to find your bar burninated).
(Oh well, have 99 bottles of beer to yourself).
</nvdirect>
<nvbinary var="TempVar">```