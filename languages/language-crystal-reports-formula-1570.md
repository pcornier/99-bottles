
## Language Crystal Reports Formula ##
---
- Author: Scott Ferguson
- Date: 08/11/07
- Info: n/a
- Score:  (1.75 in 8 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-crystal-reports-formula-1570.html
---

```Local NumberVar bottles := 99;
Local StringVar song;

while bottles > 1 do
(
    song := song & ToText(bottles, 0) & " bottles of bear on the wall";
    song := song & ChrW(13);
    song := song & ToText(bottles, 0) & " bottles of beer..."  & ChrW(13);

    bottles := bottles - 1;

    song := song & "Take one down pass it around "  & ChrW(13);
    if bottles > 1 then
    (
        song := song & ToText(bottles, 0) & " bottles of beer on the wall";
        song := song & ChrW(13) & ChrW(13);
    );
);

song := song & "1 bottle of beer on the wall"  & ChrW(13) & ChrW(13);

song := song & "1 bottle of bear on the wall" & ChrW(13);
song := song & "1 bottle of beer..."  & ChrW(13);
song := song & "Take one down pass it around "  & ChrW(13);
song := song & "No bottles of beer on the wall"  & ChrW(13) & ChrW(13);

song```