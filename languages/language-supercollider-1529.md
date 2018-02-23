
## Language SuperCollider ##
---
- Author: sutashu
- Date: 06/21/07
- Info: http
- Score:  (2.33 in 3 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-supercollider-1529.html
---

```bottlefunction = {arg n; 
	Post << (n>0).if(n, {"no more"}) << " bottle" << (n>1 or: n==0).if({"s"}, {""}) << " of beer";
};

99.for(1,{arg i;
	bottlefunction.value(i);
	Post << "on the wall, ";
	bottlefunction.value(i);
	".".postln;
	Post << "Take one down and pass it around, ";
	bottlefunction.value(i-1);
	" on the wall.".postln;
});

"No more bottles of beer on the wall, no more bottles of beer".postln;
Post << "Go to the store and buy some more, ";
bottlefunction.value(99);
"on the wall".postln;```