
## Language MultiMUD  QuestEngine ##
---
- Author: Gronk aka Claus Kick
- Date: 07/31/06
- Info: http
- Score:  (3.30 in 27 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-multimud--questengine-1225.html
---

```#Atmosphere engine with a singing drunkard
#in the Feierling Brewery & Inn
ROOM 2123 ASSIGN

on ENTER_ROOM

if IS_MOB_IN_ROOM "2120" then
{
   {
         if not (VAR_ISSET "beercounter") then
         {
                 VAR_SET_INT["beercounter"] 99;
                 SET_CHECKPOINT "gronk_beer 1";
         }
         DELAY_ACTION "beer 2 1 1";
   }
}

on DELAYED_ACTION "beer"
{
   if REACHED_CHECKPOINT "gronk_beer" < 98 then
   {
      STR_TO_CHAR "The drunk sings, '%{beercounter} bottles of beer on the wall,'";  
      STR_TO_CHAR "The drunk sings, '%{beercounter} bottles of beer.'";
      VAR_SET_INT["beercounter"] (99 - (REACHED_CHECKPOINT "gronk_beer"));
      STR_TO_CHAR "The drunk sings, 'Take one down and pass it around,'";             
      STR_TO_CHAR "The drunk sings, '%{beercounter} bottles of beer on the wall.'";
      ADVANCE_CHECKPOINT "gronk_beer 1";
      DELAY_ACTION "beer 2 1 1";
   }
   else
   {
      STR_TO_CHAR "The drunk sings, 'One bottle of beer on the wall, one bottle of beer.'";
      STR_TO_CHAR "The drunk sings, 'Take one down and pass it around, no more bottles of beer on
the wall.'";
      DELAY_ACTION "beer2 2 1 1";
   }
}

on DELAYED_ACTION "beer2"
{
   STR_TO_CHAR "The drunk sings, 'No more bottles of beer on the wall, no more bottles of beer.'";
   STR_TO_CHAR "The drunk sings, 'Go to the store and buy some more, 99 bottles of beer on the
wall.'";
   VAR_RELEASE["beercounter"];
   CLOSE_QUEST "gronk_beer";
}```