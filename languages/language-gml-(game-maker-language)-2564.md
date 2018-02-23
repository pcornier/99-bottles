
## Language GML (Game Maker Language) ##
---
- Author: Koen Timmermans
- Date: 12/12/10
- Info: http
- Score:  (2.00 in 5 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-gml-(game-maker-language)-2564.html
---

```
//Make sure your screen is higher than 3500 pixels for making it good readable
//Make a room, name it "room0" and put this code in creation code
if variable_global_exists("a")
{
instance_create(0,0,global.obj0)
}
else
{
global.a=1
global.font0=font_add("Arial",5,0,0,32,127)
room_set_height(room0,3500)
room_goto(room0)
global.obj0=object_add()
b='draw_set_font(global.font0);tx="";num=99;repeat 97{tx+=string(num)+" bottles of beer on the wa'
b+='ll#"+string(num)+" bottles of beer#take one down and pass it around#"+string(num-1)+" bottles '
b+='of beer on the wall##";num-=1;};tx+="2 bottles of beer on the wall#2 bottles of beer#take one '
b+='down and pass it around#1 bottle of beer on the wall##1 bottle of beer on the wall#1 bottle of'
b+=' beer#take one down and pass it around#no  bottles of beer on the wall";draw_text(1,1,tx)'
object_event_add(global.obj0,ev_draw,0,b)
}```