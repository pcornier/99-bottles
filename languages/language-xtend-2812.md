
## Language Xtend ##
---
- Author: Sven Efftinge
- Date: 01/10/12
- Info: http
- Score:  (3.00 in 41 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-xtend-2812.html
---

```
class BottlesSong {
	
	def static void main(String[] args) {
		println(new BottlesSong().singTheSong(99))
	}
	
	def singTheSong(int bottles) '''
		�FOR i : bottles .. 1 �
			�i.Bottles� of beer on the wall, �i.bottles� of beer. 
			Take one down and pass it around, �(i - 1).bottles� of beer on the wall.
			
		�ENDFOR�
		No more bottles of beer on the wall, no more bottles of beer.
		Go to the store and buy some more, �bottles.bottles� of beer on the wall.
	'''
	
	def bottles(int i) {
		switch i {
			case 0 : 'no more bottles'
			case 1 : 'one bottle'
			default : '''�i� bottles'''
		}.toString
	}
	
	def Bottles(int i) {
		i.bottles.toFirstUpper
	}
}```