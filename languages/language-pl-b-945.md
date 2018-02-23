
## Language PL/B ##
---
- Author: Brian J. Jackson
- Date: 11/18/05
- Info: http
- Score:  (1.67 in 3 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-pl-b-945.html
---

```./////////////////////////////////////////////////////////////////////////////.
.// ANSI Standard PL/B version of 99 bottles of beer                        //.
.//   Brian J. Jackson, Adjacency Consulting Group, Inc. (www.adjacency.net)//.
.//   17 NOV 2005                                                           //.
./////////////////////////////////////////////////////////////////////////////.
bottleCount     form    2
bottleString    dim     8
bottleString2   dim     8
./////////////////////////////////////////////////////////////////////////////.
start

.   // set our bottle counter to 99, then begin our descent
    move "99" to bottleCount
    loop
.       // logic to ensure our display is grammatically correct (although
.       //  I don't know why that would matter after drinking 98 bottles of
.       //  beer!)
        if (bottleCount = 1)
.           // 1 bottle of beer left
            move " bottle" to bottleString
            move " bottles" to bottleString2
        elseif (bottleCount = 2)
.           // 2 bottles left, then one bottle in the last stanza
            move " bottles" to bottleString
            move " bottle" to bottleString2
        else
.           // 3 or more bottles left
            move " bottles" to bottleString
            move " bottles" to bottleString2
        endif

.       // display the first three lines of the song
        display *ll,bottleCount,bottleString," of beer on the wall...":
                *n,bottleCount,bottleString," of beer...":
                *n,"take one down, pass it around...";

.       // now drink a bottle
        subtract "1" from bottleCount

.       // and finish the verse
        display *n,bottleCount,bottleString2," of beer on the wall.":
                *n,*n;
    repeat until (bottleCount = 0)

    stop
///////////////////////////////////////////////////////////////////////////////```