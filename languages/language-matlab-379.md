
## Language Matlab ##
---
- Author: Rich Stein
- Date: 04/20/05
- Info: n/a
- Score:  (3.02 in 116 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-matlab-379.html
---

```% MATLAB *vectorized* version of "99 bottles of beer"
% Rich Stein (rich@cs.umbc.edu)

bottles = [98:-1:3]; % bottles 98 to 3 (99, 2 & 1 are treated as special case)
lines = 3; % need the number of bottles at the beginning of 3 lines

num_array = ones(lines,1) * bottles; % bottles is a (1x96) array

format_plural1 = '%d bottles of beer on the wall,\n%d bottles of beer,\n';
format_plural2 = 'Take one down, pass it around,\n%d bottles of beer on the wall.\n\n';
format_sing1 = '%d bottle of beer on the wall,\n%d bottle of beer,\n';
format_sing2 = 'Take one down, pass it around,\n%d bottle of beer on the wall.\n\n';
format_none2 = 'Take it down, pass it around,\nNo bottles of beer on the wall.\n';

% bottles 99, 2 & 1 are treated as special cases
fprintf([format_plural1 format_plural2], 99,99,num_array,2)
fprintf([format_plural1 format_sing2], 2,2,1)
fprintf([format_sing1 format_none2], 1,1)```