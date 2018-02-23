
## Language Forte TOOL ##
---
- Author: Lee Fuller
- Date: 04/20/05
- Info: n/a
- Score:  (2.17 in 6 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-forte-tool-262.html
---

```//
//Forte TOOL. By Lee Fuller 06/02/2003
//
lBeerstring : string = '%1 Bottles of beer on the wall';
lBeerstring2 : string = '%1 bottles of beer';
lDrink : string = 'Take one down, pass it around.';

for i in 99 to 1 by -1 do

	task.lgr.putline(textdata().ReplaceParameters(lBeerstring, integerdata(value = i)));
	task.lgr.putline(textdata().ReplaceParameters(lBeerstring2, integerdata(value = i)));
	task.lgr.putline(lDrink);
	task.lgr.putline(textdata().ReplaceParameters(lBeerstring, integerdata(value = i-1)));
	task.lgr.putline();
end for;```