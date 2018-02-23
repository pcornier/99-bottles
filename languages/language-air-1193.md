
## Language AIR ##
---
- Author: Takeshi-Okazaki
- Date: 06/25/06
- Info: http
- Score:  (2.64 in 14 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-air-1193.html
---

```#!/usr/local/bin/air

#############################################################################
# AIR - 99 Bottles of Beer ( Ver.1 )
#  > Name = Takeshi-Okazaki
#  > URL  = WWW.AIR-LANG.ORG
#############################################################################

for(i=99;i>=0;i--){
	sing(i)
	print("\n")
}

def sing(i){
	if(i==0){
		print("No more bottles of beer on the wall, no more bottles of beer.\n")
		print("Go to the store and buy some more, 99 bottles of beer on the wall.\n")
	}
	elif(i==1){
		print("1 bottle of beer on the wall, 1 bottle of beer.\n")
		print("Take one down and pass it around, no more bottles of beer on the wall.\n")
	}
	elif(i==2){
		print("2 bottles of beer on the wall, 2 bottles of beer.\n")
		print("Take one down and pass it around, 1 bottle of beer on the wall.\n")
	}
	else{
		print("%d bottles of beer on the wall, %d bottles of beer.\n",i,i)
		print("Take one down and pass it around, %d bottles of beer on the wall.\n",i-1)
	}
}```