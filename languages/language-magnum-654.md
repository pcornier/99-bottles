
## Language Magnum ##
---
- Author: Wim Roeling
- Date: 05/17/05
- Info: n/a
- Score:  (3.00 in 5 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-magnum-654.html
---

```! Magnum is a procedural language belonging to a DBMS, developed by Tymshare Inc. in the mid 70's.
! It is still in use today and supported by Allshare BV, The Netherlands
 
procedure bottles.of.beer
begin
  field x as '5z'
! Magnum Version of 99 Bottles of beer
  move 100 to x
  while x > 0 do
  begin
    type x," Bottle(s) of beer on the wall,"
                  ,x," bottle(s) of beer" ,@cr
                  ,"Take one down and pass it around," ,@cr
                  ,(x-1) as '5z'," bottle(s) of beer on the wall" ,@cr
    subtract 1 from x
  end
end```