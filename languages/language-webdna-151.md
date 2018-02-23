
## Language WebDNA ##
---
- Author: Rob Marquardt
- Date: 04/20/05
- Info: http
- Score:  (2.92 in 13 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-webdna-151.html
---

```[!]

WebDNA is a webserver-side language used in
the product of the same name by Smith Micro Software
<http://www.smithmicro.com/>
Code by Rob Marquardt, 5/17/2002

[/!]

<HTML>

[loop start=99&end=0&advance=-1]

[text]bottles=[index] bottle[showif [index]!1]s[/showif][/text]

[hideif [index]=99][bottles] of beer on the wall.<br><br>[/hideif]

[if [index]!0]
[then]
[bottles] of beer on the wall, [bottles] of beer<br>
Take one down, pass it around...<br>
[/then]
[else]
No more bottles of beer on the wall, no more bottles of beer<br>
Go to the store, buy some more...<br>
99 bottles of beer on the wall.
[/else]
[/if]

[/loop]

</HTML>```