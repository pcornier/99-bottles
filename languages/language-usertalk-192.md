
## Language Usertalk ##
---
- Author: Anonymous
- Date: 04/20/05
- Info: n/a
- Score:  (2.95 in 19 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-usertalk-192.html
---

```on ninetyNineBottles() {
  local {
    lyrics = "";
    bottleStartCount = 99;
    bottleString = "";
    eol = "\r"};

  on numBottles(theCount) {
    local {
      s = ""};
    case theCount {
      0 {
        s = "No more bottles"};
      1 {
        s = "1 more bottle"}}
    else {
      s = theCount + " bottles"};
    return(s)};

  on finishVerse(theCount) {
    local {
      s = "Take one down and pass it around, " + eol};
    s = s + numBottles(theCount - 1) + " of beer on the wall."\
    + eol + eol;
    return(s)};

  for bottleCount = bottleStartCount downto 1 {
    bottleString = numBottles(bottleCount);
    lyrics = lyrics + bottleString + " of beer on the wall, "\
    + bottleString + " of beer." + eol + finishVerse(bottleCount)};
  lyrics = lyrics + "No more bottles of beer on the wall, "\
  + "no more bottles of beer." + eol\
  + "Go to the store and buy some more." + eol\
  + "99 bottles of beer on the wall.";
  return(lyrics)};

theLyrics = @workspace.lyrics99;

if not defined (theLyrics^) {
  new (wptextType, theLyrics)};

target.set (theLyrics);

wp.setText(ninetyNineBottles());

edit (theLyrics); �open it in a window

window.zoom("workspace.lyrics99")```