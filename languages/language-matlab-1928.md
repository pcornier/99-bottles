
## Language MATLAB ##
---
- Author: William Rossi
- Date: 11/24/08
- Info: http
- Score:  (3.00 in 6 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-matlab-1928.html
---

```function b = bottles(A)
% Call this function by typing 'bottles(99)'
if A==2
    fprintf('2 bottles of beer on the wall, 2 bottles of beer.\n')
    fprintf('Take one down and pass it around, one bottle of beer on the wall.\n\n')
    fprintf('1 bottle of beer on the wall, 1 bottle of beer.\n')
    fprintf('Take one down and pass it around, no more bottles of beer on the wall.\n\n')
    fprintf('No more bottles of beer on the wall, no more bottles of beer.\n')
    fprintf('Go to the store and buy some more, 99 bottles of beer on the wall.\n\n')
else
    fprintf('%.0f bottles of beer on the wall, %.0f bottles of beer.\n',A,A)
    fprintf('Take one down and pass it around, %.0f bottles of beer on the wall.\n\n',(A-1))
    bottles(A-1);
end```