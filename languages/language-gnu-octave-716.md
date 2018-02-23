
## Language GNU Octave ##
---
- Author: Jan Pitann
- Date: 05/30/05
- Info: http
- Score:  (2.93 in 15 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-gnu-octave-716.html
---

```% 99 bottles for GNU Octave
% free alternativ for Mathlab
% see more: http://www.octave.org/
% Dec 4th 2004 - Jan Pitann

i=99;
str0='No more';
str1=' bottle';
str2='s';
str3=' of beer on the wall, ';
str4=' of beer\n';
str5='Take one down pass it around\n';
str6='go to the store an by one more...';

while (i>1)

disp([int2str(i) str1 str2 str3 int2str(i) str1 str2 str4 str5])
    i=i-1;
end

disp([int2str(i) str1 str3 int2str(i) str1 str4 str5])

disp([str0 str1 str2 str3 str6 '\n'])```