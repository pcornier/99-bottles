
## Language CASL ##
---
- Author: Patrick Carroll
- Date: 01/12/06
- Info: http
- Score:  (2.89 in 9 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-casl-1016.html
---

```# Beer.csl
# 99 Bottles of Beer On the Wall in CASL or Palm OS, Windows Mobile, or Windows
# Compact Application Solution Language
# http://caslsoft.com/
# by Patrick Carroll, who hopes others will enhance it when they have the time
# Beer.csl is the total project. No need for any forms.
# Takes a few seconds to display on the Palm OS Emulator. Instant in Windows.

frame beers; foreground 0; background 16777215; display "99 Bottles of Beer On the Wall"; end;
text beerText,beers; position 2,14; foreground 0; background 16777215; pixel_size 150,145; scrollbar
top; no_input; end;

function startup;
variables;
	numeric i;#counter index
	numeric r;#a random number between 0 and 9 to add the occasional hickup after 80 beers downed
	string s;#string to display eventually
	string s2;#bottles, or bottle
	string s3=" of beer on the wall";
	string s4=" of beer."+char(10);
	string s5="Take one down and pass it around, ";
end;
	s="99 bottles"+s3+", 99 bottles"+s4+s5+"98 bottles"+s3+"."+char(10)+char(10);
	i=98;
	while i>0;
		if i>1;
			s2=" bottles";
		else;
			s2=" bottle";
		end_if;
		
		if i>2;
			s=s+string(i,"")+s2+s3+", "+string(i,"")+s2+s4+s5+string(i-1,"")+s2+s3+"."+char(10)+char(10);
		else_if i=2;
			s=s+string(i,"")+s2+s3+", "+string(i,"")+s2+s4+s5+"1 more bottle"+s3+"."+char(10)+char(10);
		else;
			s=s+string(i,"")+s2+s3+", "+string(i,"")+s2+s4+s5+"no more bottles"+s3+"."+char(10)+char(10);
		end_if;
		r=randomn(10);
		if r<3 and i<80;
			s=s+"HICK!"+char(10)+char(10);
		end_if;
		i=i-1;
	end_while;
	s=s+"No more bottles of beer on the wall, no more bottles of beer."+char(10)+
		"Go to the store and buy some more, 99 bottles of beer on the wall!!";
	beerText.display=s;
end;```