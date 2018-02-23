
## Language Impacto ##
---
- Author: Philipp Winterberg
- Date: 04/20/05
- Info: http
- Score:  (1.88 in 16 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-impacto-328.html
---

```\ Impacto version of 99 Bottles of beer (Bottles.imp) 
\ Philipp Winterberg, http://www.winterbergs.de       
\ See http://scorpius.spaceports.com/~esanto/
for(b = 1, 99, 1) {
  print(100-b " bottle(s) of beer on the wall,\n")	
  print(100-b " bottle(s) of beer.\n")
  print("Take one down, pass it around,\n")
  print(99-b " bottle(s) of beer on the wall.\n\n")
}
end()```