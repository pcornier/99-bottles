
## Language System 1032 ##
---
- Author: Anonymous
- Date: 04/20/05
- Info:  http
- Score:  (3.00 in 2 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-system-1032-620.html
---

```Procedure CountTheBottles Trigger Open Enabled Secure
var bottles integer
for (bottles from 99 to 1 step -1) do
if bottles eq 1 then
print bottles (" bottle of beer on the wall")
print bottles (" bottle of beer...");
 else
print bottles (" bottles of beer on the wall")
print bottles (" bottles of beer...");
 end_if

print ("Take one down and pass it around...")
end_for

print ("No Bottles of beer on the wall")
End_Procedure

Call CountTheBottles```