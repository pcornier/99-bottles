
## Language ALGOL 60 ##
---
- Author: Paul Kimpel
- Date: 03/03/08
- Info: http
- Score:  (2.36 in 11 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-algol-60-1710.html
---

```% Unisys MCP Algol version of 99 Bottles, using remote file I/O.
begin
integer i;
file stdout(kind=remote);
for i:= 99 step -1 until 1 do
  write(stdout, <j3," bottle(s) of beer on the wall, ",
                 j3," bottle(s) of beer."/
                 "Take one down and pass it around,"/
                 j3," bottle(s) of beer on the wall.">, i, i, i-1);
end.```