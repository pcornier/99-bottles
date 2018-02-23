
## Language CBOT ##
---
- Author: Jordan Wade
- Date: 05/30/05
- Info: n/a
- Score:  (3.25 in 4 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-cbot-719.html
---

```extern void object::BottlesOfBeer()
{

//99 Bottles of Beer on the Wall, by Jordan Wade in CBOT (the Colobot (a 
game from Epsitec) programming language)

int beers; //Number of bottles left

float speed = 1;

/* Speed settings:
0.125 - One message at a time... (54s per bottle, ~ 1.5 hours for song)
 0.25 - Quater speed
  0.5 - Half speed
    0 - DO NOT USE
    1 - Normal
    2 - Double speed
    4 - Quad speed
    8 - Near constant
   16 - Very close to constant
   32 - Constant
*/

//FYI: Any wait instructions can be removed, but since Colobot shows
//     only 4 messages at any one time, you will probably only see the
//     last bottle

for(beers = 99; beers > 0; beers--)
{

//These will display in green boxes

message(beers + " bottles of beer on the wall,", DisplayInfo);
wait(1 / speed);
message(beers + " bottles of beer!", DisplayInfo);
wait(1.75 / speed);
message("Take one down and pass it around,", DisplayInfo);
wait(1.5 / speed);
message((beers - 1) + " bottles of beer on the wall!", DisplayInfo);

wait(2.5 / speed); //Wait time between bottles (in seconds)

}

//And these will display in brown boxes

//Only one beer left!
message("1 bottle of beer on the wall,");
message("1 bottle of beer!");
message("Take one down and pass it around,");
message("No bottles of beer left on the wall!");

}```