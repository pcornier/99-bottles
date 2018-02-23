
## Language Game Maker Language ##
---
- Author: Scoochi2
- Date: 05/04/07
- Info: http
- Score:  (3.00 in 17 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-game-maker-language-1475.html
---

```/*
99 beer bottles by Scoochi2
start a new game, add a room, and put this entire code in the room creation event
...or add it as a script/code in an existing game. Run the script to go to bottles.
*/

/* ~~~~~~~~~~~~~~~ object startup ~~~~~~~~~~~~~~~ */

global.playbottles=object_add();     // add an object
global.scroller=0;                   // we need to see all verses...
global.scrollchange=1;               // multiplier for 'rotation'
global.count=99;                     // how many bottles to start with?
global.text='';                      // our 'poem' holder :)


object_event_add (global.playbottles,ev_create,'','
    while global.count >= 1
        {
        global.text+=string(global.count)+" bottle";
        if global.count != 1
        then
            global.text+="s";
        global.text+=" of beer on the wall, "+string(global.count)+" bottle";
        if global.count != 1
        then
            global.text+="s";
        global.text+=" of beer.#Take one down and pass it around, ";
        global.count-=1;
        if global.count != 0
        then{
            global.text+=string(global.count)+" bottle";
            if global.count != 1
            then
                global.text+="s";
            global.text+=" of beer on the wall.";
            }
        else global.text+="no more bottles of beer on the wall.";
        global.text+="##";
        }
    global.text+="No more bottles of beer on the wall, no more bottles of beer.#Go to the store and
buy some more, 99 bottles of beer on the wall.";
    ');

object_event_add (global.playbottles,ev_keyboard,vk_add,"global.scrollchange+=1");
object_event_add (global.playbottles,ev_keyboard,vk_subtract,"global.scrollchange-=1");
object_event_add (global.playbottles,ev_keypress,vk_home,"global.scroller=0");
    
object_event_add (global.playbottles,ev_keypress,vk_escape,"game_end();");
object_event_add (global.playbottles,ev_draw,'','
draw_text(10,10-global.scroller,global.text);    
	');

object_event_add
(global.playbottles,ev_step,ev_step_normal,"global.scroller+=global.scrollchange");

/* ~~~~~~~~~~~~~~~ game settings ~~~~~~~~~~~~~~~ */

window_set_cursor(cr_none);
global.bottlesgo=room_add();
room_set_width(global.bottlesgo,700);
room_set_height(global.bottlesgo,480);
room_set_background_color(global.bottlesgo,c_white,1);
room_set_caption(global.bottlesgo,"Press Esc to quit, plus key to increase speed, subtract key to
decrease speed and the home key to restart");

/* ~~~~~~~~~~~~~~~ change room and create instance ~~~~~~~~~~~~~~~ */

room_set_code(global.bottlesgo,"instance_create(0,0,global.playbottles);");
room_goto(global.bottlesgo);```