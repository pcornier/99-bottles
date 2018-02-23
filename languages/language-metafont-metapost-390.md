
## Language MetaFont/MetaPost ##
---
- Author: Tomasz J. Cholewo
- Date: 04/20/05
- Info: http
- Score:  (3.00 in 5 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-metafont-metapost-390.html
---

```% MetaFont/MetaPost version of ``99 bottles'' by Tomasz J. Cholewo
% For more information see http://cm.bell-labs.com/who/hobby/MetaPost.html
for i:=99 downto 1:
  message decimal i & " bottle" if i>1: & "s" fi & " of beer on the wall,";
  message decimal i & " bottle" if i>1: & "s" fi & " of beer.";
  message "Take one down, pass it around.";
endfor;
message "No more bottles of beer on the wall.";
end```