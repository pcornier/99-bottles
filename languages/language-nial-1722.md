
## Language Nial ##
---
- Author: rahul
- Date: 03/16/08
- Info: n/a
- Score:  (4.33 in 3 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-nial-1722.html
---

```% A program in a languae with the pedigree of APL is not worth
% its bits if it does not make use of its arrays.
% surprisingly (or not) most of recursive functions can be transformed
% into a form using a stack of pre-computed arguments.
% this code transforms the initial array (created by count XXX)
% into verses. Along the way it makes use of transformers and
% demonstrates point free programming.

line is fork [
  0=, 'No more bottles of beer' first,
  1=, 'One bottle of beer' first, 
  link [string,' bottles of beer' first]
]

verse is link [
  line, ' on the wall, ' first,line,
  '. Take it down and pass it around, ' first,
  line (-1+),'on the wall. ' first
]

bottles is iterate (write verse) reverse count```