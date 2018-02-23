
## Language jQuery ##
---
- Author: Vincent Battaglia
- Date: 12/27/06
- Info: http
- Score:  (2.84 in 19 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-jquery-1361.html
---

```function displayVerse(num) {
	switch(num) {
		case 0 : 	verse = "No more bottles of beer on the wall, ";
				verse += "no more bottles of beer.";
				verse += "<br />Go to the store and buy some more, "
				verse += "99 bottles of beer on the wall.";
				break;
		case 1 :	verse = num + " bottle of beer on the wall, ";
				verse += num + " bottle of beer.";
				verse += "<br />Take one down and pass it around, "
				verse += "no more bottles of beer on the wall.";
				break;
		case 2 :	verse = num + " bottles of beer on the wall, ";
				verse += num + " bottles of beer.";
				verse += "<br />Take one down and pass it around, ";
				verse += (num-1) + " bottle of beer on the wall.";
				break;
		default : 	verse = num + " bottles of beer on the wall, ";
				verse += num + " bottles of beer.";
				verse += "<br />Take one down and pass it around, ";
				verse += (num-1) + " bottles of beer on the wall.";
				break;
	}
	$("body").prepend("<p style=\"display:none;\">" + verse + "</p>");
	$("p").css("color","#CCC").css("font-family","Arial,sans-serif").css("font-weight","normal");
	$("p:nth-child(3)").css("color","#999");
	$("p:nth-child(2)").css("color","#666");
	$("p:nth-child(1)").css("color","#333");
	$("p:first-child").css("color","#000").css("font-weight","bold").show("slow");
}

$(document).ready(function() {
     	for(i=99;i>=0;i--)
     		setTimeout("displayVerse(" + i + ")",(99-i)*1000);
});```