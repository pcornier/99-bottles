
## Language DYL-280 ##
---
- Author: Anonymous
- Date: 04/20/05
- Info: n/a
- Score:  (2.89 in 9 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-dyl-280-224.html
---

```Here's one more example to add to the list.  It is in a language called
'DYL-280' (pronounced 'dial 280').

FILE INFILE INPUT FB
WORKAREA
 NUMOFBOTTLES  3  NU
REPORT 80 WIDE
NUMOFBOTTLES = 99
LOOP:
IF NUMOFBOTTLES EQ 0
   LIST 'NO MORE BEER ON THE WALL.'
   STOP
ENDIF
LIST NUMOFBOTTLES () 'BOTTLES OF BEER ON THE WALL,' AT NUMOFBOTTLES+4
LIST NUMOFBOTTLES () 'BOTTLES OF BEER.' AT NUMOFBOTTLES+4
LIST 'TAKE ONE DOWN PASS IT AROUND' AT NUMOFBOTTLES+4
NUMOFBOTTLES = NUMOFBOTTLES - 1
LIST NUMOFBOTTLES () 'BOTTLES OF BEER ON THE WALL.' AT NUMOFBOTTLES+4
LIST '   '
GOTO LOOP
FIN
/*```