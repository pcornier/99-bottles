
## Language 1C Enterprize ##
---
- Author: Alexey Baranov
- Date: 07/22/05
- Info: http
- Score:  (2.96 in 47 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-1c-enterprize-805.html
---

```// calling by pressing button on form 
// Alexey Baranov wdayda@yahoo.com
Procedure bottles()
	s = "s";     
	beer = 99;
	While beer<>0 do
		Message(String(beer) + " bottle " + s + " of beer on the wall, " + String(beer) + " bottle" + s +
" of beer."); 
		Message("Take one and pass it around.");
		beer = beer - 1;
		s = ?(beer = 1,"","s");
	EndDo;
	Message("No more bottles of beer on the wall.");
	Message("No more bottles of beer...");
	Message("Go to the story and buy some more...");
	Message("99 bottles of beer.");
EndProcedure```