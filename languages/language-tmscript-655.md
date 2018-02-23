
## Language TMScript ##
---
- Author: Mike Gogulski
- Date: 05/17/05
- Info: http
- Score:  (1.71 in 7 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-tmscript-655.html
---

```; TMScript version of 99 Bottles of beer
; By Mike Gogulski <mike@gogulski.com> 21 March 2005
; TMScript is the scripting language of Telemate, a terminal program for MS-DOS
;
; Tested with:
;   Telemate 4.21 (http://www.acemile.ca/twtm/)
;   under MS-DOS 7.10 (http://newdos.yginfo.net/msdos71/)
;   under VMware Workstation 4.5.2-8848 (http://www.vmware.com/)
;   under Windows 2000 (http://www.microsoft.com/)
 
integer bottles
bottles = 99
while bottles > 0
 print bottles, " bottle(s) of beer on the wall,"
 print bottles, " bottle(s) of beer!"
 print "Take one down, pass it around,"
 bottles = bottles - 1
 print bottles, " bottle(s) of beer on the wall!"
endwhile```