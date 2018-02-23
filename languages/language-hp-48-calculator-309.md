
## Language HP 48 Calculator ##
---
- Author: Jeromy Carriere
- Date: 04/20/05
- Info: n/a
- Score:  (2.00 in 6 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-hp-48-calculator-309.html
---

```Courtesy Jeromy Carriere (jayc@bnr.ca)

<<
10 1 FOR k
IF k 1 == THEN
"1 bottle of beer on the wall."
"1 bottle of beer."
ELSE
"   bottles of beer on the wall."
1 k ->STR REPL
"   bottles of beer."
1 k ->STR REPL
END
"Take one down and pass it around."
IF k 1 == THEN
"No more bottles of beer on the wall."
ELSE
IF k 2 == THEN
"1 bottle of beer on the wall."
ELSE
"   bottles of beer on the wall."
1 k 1 - ->STR REPL
END
END
-1 STEP
>>```