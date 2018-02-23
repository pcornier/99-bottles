
## Language QVT ##
---
- Author: Alexander Trenz
- Date: 05/10/10
- Info: http
- Score:  (2.00 in 2 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-qvt-2385.html
---

```/*
 *
 * M2M - Operational QVT - V2.0.1
 *
 */

transformation ninety_nine_bottles_of_beer();

main(){
	
	map startSong();	
}


mapping startSong(){

	var bottles : Integer := 99;
	
	while(bottles>0){
	
		if(bottles>2)
		then{
		
			log(bottles.repr() + ' bottles of beer on the wall, ' + bottles.repr() + 
								 ' bottles of beer.' + '\n' + 
								 'Take one down and pass it around, '+ 
								  (bottles-1).repr() + ' bottles of beer on the wall.' + '\n');
		}	
		endif;
		
		if (bottles=2) 
		then{
			log(bottles.repr() + ' bottles of beer on the wall, ' + bottles.repr() + 
								 ' bottles of beer.' + '\n' + 
			'Take one down and pass it around, '+  (bottles-1).repr() + 
			' bottle of beer on the wall.' + '\n');
		}
		else{
			 log(bottles.repr() + ' bottle of beer on the wall, ' + bottles.repr() + 
								  ' bottle of beer.' + '\n' + 
			 'Take one down and pass it around, no more bottles of beer on the wall.' + '\n');
		}
		endif;
		
		bottles := bottles-1;
	};
	
	map endSong();
}

mapping endSong(){

	log('No more bottles of beer on the wall, no more bottles of beer.' + '\n' + 
		'Go to the store and buy some more, 99 bottles of beer on the wall.');
}```