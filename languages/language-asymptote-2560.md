
## Language Asymptote ##
---
- Author: Johannes Sch��n
- Date: 12/06/10
- Info: http
- Score:  (3.00 in 2 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-asymptote-2560.html
---

```// An Asymptote script for generating the lyrics of the song "99
// bottles of beer". For instant gratification, feed it to Asymptote
// with the command:
//
//   asy -V beer.asy
//
// If you have no postscript viewer, you may want to try:
//
//   asy -V -tex pdflatex beer.asy
//
// instead.
//
// copyright 2010 Johannes Sch��n
//
// (Despite all efforts, it still contains one goto statement.)

string int2verse(int n){
  // Converts the current number of beers on the wall into a string
  // containing the corresponding verse in the lyrics.

  if ((n <= 99) && (n > 2)) {
    return format("%i bottles of beer on the wall, ", n) +
      format("%i bottles of beer.\\", n) +
      "Take one down and pass it around, " +
      format("%i bottles of beer on the wall.", n - 1);

  } else if (n == 2) {
    return "2 bottles of beer on the wall, 2 bottles of beer.\\" +
      "Take one down and pass it around, one bottle of beer on the wall.";

  } else if (n == 1) {
    return "1 bottle of beer on the wall, 1 bottle of beer.\\" +
      "Take one down and pass it around, " +
      "no more bottles of beer on the wall.";

  } else if (n == 0) {
    return "No more bottles of beer on the wall, " +
      "no more bottles of beer.\\" +
      "Go to the store and buy some more, " +
      "99 bottles of beer on the wall.";

  } else {
    abort(format("Illegal input value given to int2verse: %i.", n));
    return "";
  };
};

// The following will display all but the final verse as a spiral...
int maxverse = 99;
for (int n = maxverse; n > 0; --n){
  real r = 100 + 700 * (0.2 + n/maxverse)**1.2;
  real a = 6 * 360 * (maxverse - n)/r;
  label(rotate(a) * minipage("\raggedright \tiny " + int2verse(n), 3cm),
        r * dir(a));
};

// ...with the last verse in the centre.
label(minipage("\raggedright \large " + int2verse(0), 8cm), (0,0), red);```