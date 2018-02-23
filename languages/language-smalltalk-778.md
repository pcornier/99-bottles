
## Language Smalltalk ##
---
- Author: Jim Freeman
- Date: 07/03/05
- Info: http
- Score:  (3.99 in 209 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-smalltalk-778.html
---

```"Copy into a workspace, highlight the code and choose do it."
"Tested under Squeak 3.7 and VisualWorks 7.3"
| verseBlock |
verseBlock := [ :bottles  | | verse |
  verse := WriteStream with: (String new).
    bottles = 0 ifTrue: 
      [verse 	
        nextPutAll: 'No more bottles of beer on the wall. No more bottles of beer...'; cr;
        nextPutAll: 'Go to the store and buy some more... 99 bottles of beer.'; cr].
    bottles = 1 ifTrue: 
      [verse 
        nextPutAll: '1 bottle of beer on the wall. 1 bottle of beer...'; cr;
        nextPutAll: 'Take one down and pass it around, no more bottles of beer on the wall'; cr].
    bottles > 1 ifTrue: 
      [verse 
        nextPutAll: bottles printString; nextPutAll: ' bottles of beer on the wall. '; 
        nextPutAll: bottles printString; nextPutAll: ' bottles of beer...'; cr;
        nextPutAll: 'Take one down and pass it around, '; 
        nextPutAll: (bottles - 1) printString, ' bottle';
        nextPutAll: (((bottles - 1) > 1) ifTrue: ['s '] ifFalse: [' ']);
        nextPutAll: 'of beer on the wall'; cr].
  verse contents].

99 to: 0 by: -1 do: [: i | Transcript show: (verseBlock value: i); cr].```