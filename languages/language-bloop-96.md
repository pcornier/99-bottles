
## Language BlooP ##
---
- Author: Laurent Vogel
- Date: 04/20/05
- Info: n/a
- Score:  (3.02 in 91 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-bloop-96.html
---

```#  BlooP version of 99 bottles of beer
#  Laurent Vogel,  http://lvogel.free.fr
#  (BlooP implementation found at the retrocomputing museum)
#  (remove comment lines starting with #)
#
define procedure ''p''[n,c]:
block 0: begin
    cell(0) <= 's ';
    if n = 1, then: cell(0) <= ' ';
    cell(1) <= n;
    if n = 0, then: cell(1) <= 'No more';
    print[cell(1), ' bottle', cell(0), 'of beer', c];
    output <= n;
block 0: end.

define procedure ''pred''[n]:
block 0: begin
    loop at most n times:
    block 1: begin
        if output + 1 = n, then:
        abort loop 1;
        output <= output + 1;
    block 1: end;
block 0: end.

define procedure ''beer''[n]:
block 0: begin
    output <= n;
    loop n times: 
    block 1: begin
        output <= p[output, ' on the wall,'];
        output <= p[output, '.'];
        print['Take one down, pass it around,'];
        output <= pred[output];
        output <= p[output, ' on the wall.'];
        print[' '];
    block 1: end;
    output <= ' '
block 0: end.

beer[99].```