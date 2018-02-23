
## Language Navel ##
---
- Author: Greg Michaelson
- Date: 04/20/05
- Info: n/a
- Score:  (2.50 in 12 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-navel-420.html
---

```# Bottles of beer in Navel
  Greg Michaelson
  greg@cee.hw.ac.uk #

def itos n = if n=0 then "0" else itos1 "" n;
def itos1 l n = if n=0 then l else itos1 (char (n%10+'0')):l n/10;
def verse n = {(itos n) " bottle(s) of beer on the wall\n"
               (itos n) " bottle(s) of beer on the wall\n"
               "Take one down and pass it around\n"
               (itos n-1) " bottle(s) of beer on the wall\n"};
def verses n = 
 if n=0
 then ()
 else
  let v = write (?(verse n))
  in verses n-1;```