
## Language eathena Script ##
---
- Author: Filbert
- Date: 04/19/07
- Info: http
- Score:  (2.90 in 10 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-eathena-script-1457.html
---

```prontera,149,185,6    script    Drunken Sniper    1903,{
OnInit:
    set $@bb,99;
    while(1){
       npcwalkto(rand(149,162),rand(166,185)); 
       if($@bb == 0) {
         npctalk "No more bottles of beer on the wall, no more bottles of beer. ";
         sleep 1000;
         npctalk "Go to the store and buy some more, 99 bottles of beer on the wall.";
         set $@bb,99;
       } ellse {
         npctalk $@bb+" bottles of beer on the wall, "+$@bb+" bottels of beer.";
         sleep 1000;
         if($@bb>1){
           npctalk "Take one down and pass it around, "+$@bb+" bottles of beer on the wall.";
         } else {
           npctalk "Take one down and pass it around, no more bottles of beer on the wall.";
         }
         makeitem 713,1,$@mapn$,$@xcor,$@ycor; 
         set $@bb,$@bb-1;
       }
       sleep 15000; 
    }
end;
}```