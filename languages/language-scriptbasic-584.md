
## Language ScriptBasic ##
---
- Author: Philipp Winterberg
- Date: 04/20/05
- Info: http
- Score:  (1.80 in 10 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-scriptbasic-584.html
---

```' ScriptBasic version of 99 Bottles of beer (Bottles.bas)
' See http://script.basic.hu/html/index.html
' Philipp Winterberg, http://www.winterbergs.de

a$ = " \98\111\116\116\108\101\40\115\41\32\111\102\32\98\101\101\114"
c$ = " \111\110\32\116\104\101\32\119\97\108\108\99\32\32\8\8\8\8\108"
for b = 99 to 1 step -1
  print "\13\10",b,a$,c$,"\44\n",b,a$,"\46\n\84\97\107\101\32\111\110"
  print "\101\32\100\111\119\110", ",\32\112\97\115\115\32\105\116\32"
  print "\97\114\111\117\110\100\44\13\10",(b-1),a$,c$,"\46\32 \13\10" 
next b
end```