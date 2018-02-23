
## Language UniBasic ##
---
- Author: Stu Boydell
- Date: 09/23/05
- Info: http
- Score:  (2.97 in 31 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-unibasic-886.html
---

```program MORE.BEER

*// This one is only slightly different but I hope,
*// more interesting than the previous submission.
*// Stu Boydell 2005-09-23

equ MAX.BEERS   to 99
equ CONV        to 'MR%':len(MAX.BEERS) ;* zero filled - others might be: NR (roman numerals), MP
(packed decimal), MX (hex), MO (octal), MB (binary)
equ BOTTLE.TEXT to ' bottles of beer on the wall,':@am:' bottles of beer.':@am:'Take one down, pass
it around.'

enum = ''
for i = MAX.BEERS to 1 step -1
   enum<dcount(enum,@am)+1> = str(oconv(i,CONV):@am,2)
next

subj = str(BOTTLE.TEXT:@am,MAX.BEERS-1)
subj := change(BOTTLE.TEXT,'s ',' ',2)

crt convert(@am,char(10),cats(enum,subj))```