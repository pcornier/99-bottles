
## Language JavaScript ##
---
- Author: Brian Patrick Lee
- Date: 04/20/05
- Info: n/a
- Score:  (2.73 in 22 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-javascript-5.html
---

```/**
 * 99 Bottles of Beer on the Wall in JavaScript
 * This program prints out the lyrics of an old pub song.
 * Copyright (C) 1996, Brian Patrick Lee (blee@media-lab.mit.edu)
 */
if (confirm("Are you old enough to read about beer\n" +
	    "according to your local community standards?")) {
  for (i = 99 ; i > 0 ; i--) {
    j = i - 1;
    if (i != 1) { 
      icase = "bottles"; 
    } else { 
      icase = "bottle";
    }
    if (j != 1) {
      jcase = "bottles";
    } else {
      jcase = "bottle";
    }
    document.writeln(i + " " + icase + " of beer on the wall,");
    document.writeln(i + " " + icase + " of beer,");
    document.writeln("Take 1 down, pass it around,");
    if (j != 0) {
      document.writeln(j + " " + jcase + " of beer on the wall.");
    } else {
      document.writeln("No more bottles of beer on the wall!");
    }
    document.writeln()
  }
} else {
  document.write("You might want think about moving to another community.")
}```