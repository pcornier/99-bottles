
## Language ABC ##
---
- Author: Whitey
- Date: 04/20/05
- Info: n/a
- Score:  (2.87 in 23 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-abc-13.html
---

```<a href=http://www.cwi.nl/cwi/projects/abc.html>ABC</a> was developed 
at CWI in the Netherlands. 
PUT "by Whitey (whitey@netcom.com) - 10/13/96" IN author

HOW TO RETURN verse n:
   SELECT:
      n = 0:
         PUT "no more bottles of beer" IN s
      n = 1:
         PUT "1 bottle of beer" IN s
      ELSE:
         PUT "`n` bottles of beer" IN s
   RETURN s

HOW TO DRINK:
   PUT 99 IN num
   WHILE num > 0:
      WRITE verse num, " on the wall, ", verse num, "," /
      WRITE "take one down, pass it around," /
      PUT num - 1 IN num
      WRITE verse num, " on the wall." /

DRINK```