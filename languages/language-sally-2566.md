
## Language Sally ##
---
- Author: Marinus Oosters
- Date: 12/15/10
- Info: http
- Score:  (3.67 in 3 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-sally-2566.html
---

```char print proto
void input char proto
int int sub int proto
int int add int proto 
int int mul int proto
int int div int proto
int pop proto

int printnum int
   print as char if div $1 10 add 48 div $1 10 0
   print as char add sub $1 mul div $1 10 10 48
   0

void nomore int
   print 'N  print 'o
   print as char 32
   print 'm  print 'o  print 'r  print 'e
   0

void ninetynine int
   print '9  print '9
   0

int bottles
   pop if add $1 1 if $1 printnum $1 nomore ninetynine
   print as char 32
   print 'b  print 'o  print 't  print 't  print 'l  print 'e
   print if sub $1 1 's as char 0

void ofbeer
   print as char 32
   print 'o  print 'f
   print as char 32
   print 'b  print 'e  print 'e  print 'r

void onthewall
   print as char 32
   print 'o  print 'n
   print as char 32
   print 't  print 'h  print 'e
   print as char 32
   print 'w  print 'a  print 'l  print 'l

int firstline
   bottles $1 ofbeer onthewall print ',
   print as char 10

int secondline
   bottles $1 ofbeer print ',
   print as char 10

void takeone int 
   print 'T  print 'a  print 'k  print 'e
   print as char 32
   print 'o  print 'n  print 'e
   print as char 32
   print 'd  print 'o  print 'w  print 'n
   print as char 32
   print 'a  print 'n  print 'd
   print as char 32
   print 'p  print 'a  print 's  print 's
   print as char 32
   print 'i  print 't
   print as char 32
   print 'a  print 'r  print 'o  print 'u  print 'n  print 'd  print ',
   print as char 10
   0

void gostore int
   print 'G  print 'o
   print as char 32
   print 't  print 'o
   print as char 32
   print 't  print 'h  print 'e
   print as char 32
   print 's  print 't  print 'o  print 'r  print 'e
   print as char 32
   print 'a  print 'n  print 'd
   print as char 32 
   print 'b  print 'u  print 'y
   print as char 32
   print 's  print 'o  print 'm  print 'e
   print as char 32
   print 'm  print 'o  print 'r  print 'e  print ',
   print as char 10
   0

int fourthline
   bottles $1 ofbeer onthewall print '.
   print as char 10
   print as char 10

int verse
   firstline $1
   secondline $1
   pop if $1 takeone gostore
   fourthline sub $1 1

int verses int
   verse $1
   if $1 verses sub $1 1 0
   
void main
   pop verses 99```