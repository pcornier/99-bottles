
## Language ACS ##
---
- Author: Randy Heit
- Date: 10/14/06
- Info: http
- Score:  (2.94 in 18 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-acs-1301.html
---

```script 1 (OPEN) {
str songwords = "bottles of beer on the wall";
for (int beer = 99; beer > 2; beer--) {
print(d:beer,s: "" songwords "" , d:beer s:" bottles of beer");
print(s:"Take one down and pass it around,",d: beer - 1, s: songwords);
}
print(s: "2" songwords "2 bottles of beer");
print(s:"Take one down and pass it around, 1 bottle of beer on the wall")
print(s:"No more bottles of beer on the wall, no more bottles of beer");
print(s:"Go to the store and buy some more, 99 bottles of beer on the wall");
}```