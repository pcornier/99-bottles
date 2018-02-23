
## Language Processing ##
---
- Author: Brian C. Wilson
- Date: 02/11/06
- Info: http
- Score:  (2.50 in 8 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-processing-1049.html
---

```// dim window
size (1024, 768);
background (#ffcc00);

// dim vars
String a = " bottle";
String b = "s";
String c = "beer";
String d = "";
int e = 1;

// font class
PFont font;
font = loadFont ("Verdana-9.vlw");
textFont (font, 7);

// build strings
for (int i=99; i>0;) {
  String x = (i + a + b + " of " + c + " on the wall, " + i + a + b + " of " + c + ". ");
  String y = ("Take one down, pass it around, ");
  i--;
  if (i == 1) {b = "";} else {b = "s";} // one bottle; many bottles
  if (i == 0) {d = "no more ";} else {d = str(i);} // data conversion on d for last line
  String z = (d + a + b + " of " + c + " on the wall.");
  e++; // increment to set y coordinates of output
  text (x + y + z, 350, 7*e);  // output strings
}```