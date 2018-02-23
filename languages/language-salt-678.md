
## Language SALT ##
---
- Author: Mike Gogulski
- Date: 05/22/05
- Info: http
- Score:  (1.23 in 26 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-salt-678.html
---

```// SALT version of 99 Bottles of beer
// By Mike Gogulski <mike@gogulski.com> 21 March 2005
// SALT is the scripting language of Telix, a terminal program for MS-DOS
//
// Tested with:
//   Telix v3.51 (http://www.telix.com/delta/deltacom/tfd/)
//   under Windows 2000 (http://www.microsoft.com/)
//
// Save as 99bottlz.slt in your Telix directory, compile with Ctrl-F9,
// start with Alt-G
 
main() {
 int c = 99;
 while (c > 0) {
  printn(c);
  prints(" bottle(s) of beer on the wall,");
  printn(c);
  prints(" bottle(s) of beer!");
  prints("Take one down, pass it around,");
  c = c - 1;
  printn(c);
  prints(" bottle(s) of beer on the wall!");
 }
}```