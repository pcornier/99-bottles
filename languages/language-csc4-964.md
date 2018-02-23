
## Language CSC4 ##
---
- Author: Christian Klauser
- Date: 11/28/05
- Info: http
- Score:  (2.32 in 19 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-csc4-964.html
---

```#Some meta information
meta Name: "99BottlesOfBeer"
meta Description: "Sample code in CSC4. Generates the lyrics to the Song \"99 Bottles of Beer\""
meta Author: "Christian Klauser"
meta Web: "http://klauser.ttcaarberg.ch"

#The entry point of the application
procedure main(){
	#Declaration of some local variables
	var n = 99
	var str
	var form
	
	#main loop
	while(n >= 0){
		#get the correct form of the noun beer
		form = bottle(n)
		echo(form & " of beer on the wall, " & form & " of beer.")
		n-=1
		if(n > 0){
			echo("Take one down and pass it around, " & bottle(n) & " of beer on the wall")
		}else{
			echo(" Go to the store and buy some more, 99 bottles of beer on the wall.")
		}
	}
}

procedure bottle(count:int32):string{
	if(count <= 0){
		return = "no more bottle"
	}elseif(count == 1){
		return = "one bottle"
	}else{
		return = count & " bottles"
	}
}```