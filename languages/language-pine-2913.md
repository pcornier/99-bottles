
## Language pine ##
---
- Author: uechi
- Date: 07/12/12
- Info: http
- Score:  (2.50 in 2 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-pine-2913.html
---

```i=99;
ary[0]=" bottle of beer on the wall, ";
ary[1]=" bottle of beer.\n";
ary[2]="Take one down and pass it around, ";
ary[3]=" bottles of beer on the wall.\n\n";

swary[0]="Take one down and pass it around, ";
swary[1]="Go to the store and buy some more, ";
str="no more";
for(i=i;0<=i;i--){
	if(i==1){
		print(i.ary[0].i.ary[1].swary[0].str.ary[3]);
	}elseif(i==0){
		print(str.ary[0].str.ary[1].swary[1]."99".ary[3]);
	}else{
		print(i.ary[0].i.ary[1].ary[2].(i-1).ary[3]);
	};
};```