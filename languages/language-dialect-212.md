
## Language Dialect ##
---
- Author: Philipp Winterberg
- Date: 04/20/05
- Info: http
- Score:  (1.33 in 12 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-dialect-212.html
---

```# Dialect version of 99 Bottles of beer (Bottles.d) 
# See http://www.aristar.com/Downloads2.html
# Philipp Winterberg, http://www.winterbergs.de            

Import "outputs"
Output = outputs.screen()
Output.startDoc("99 Bottles of Beer")
for b = 1 to 99
  print (100-b), " bottle(s) of beer on the wall,", cr
  print (100-b), " bottle(s) of beer.", cr
  print "Take one down, pass it around,", cr
  print (99-b), " bottle(s) of beer on the wall.", cr, cr
endfor
Output.EndDoc()```