
## Language Matlab ##
---
- Author: Bill Becker
- Date: 04/20/05
- Info: http
- Score:  (2.67 in 12 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-matlab-380.html
---

```a href=http://www.mathworks.com>Click</a> for more information.

% MATLAB verion of 99 Bottles of beer
% by Bill Becker

function beer(n);
if nargin<1, n=99; end
for i=n:-1:1,
  disp([int2str(i) ' Bottles of beer on the wall,'])
  disp([int2str(i) ' Bottles of beer,'])
  disp('Take one down and pass it around,')
  if i>1, disp([int2str(i-1) ' Bottles of beer on the wall.']),end
  end
disp('No more bottles of beer on the wall!')```