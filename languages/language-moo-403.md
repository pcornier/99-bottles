
## Language MOO ##
---
- Author: Malcolm Gin-Hopwood
- Date: 04/20/05
- Info: n/a
- Score:  (3.50 in 4 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-moo-403.html
---

```@args #230:"@99" none none none
@chmod #230:@99 rxd
@program #230:@99
"Programmed by Malcolm Gin-Hopwood y Silva (perigee@dgsys.com)";
"Runs on LambdaMOO core 1.7.9 and 1.8.0";
"This one spares any standers by the terror of 99 bottles of beer on the wall,
and does numbers to english passing as well.  Woo woo.";
count = 99;
while (count > 0)
  $command_utils:suspend_if_needed(0);
  this:_round_of_beer(count);
  count = count - 1;
endwhile
player:tell("Time to buy more beer.");
.

@args #230:"_round_of_beer" this none this
@program #230:_round_of_beer
beer = args[1];
player:tell(($string_utils:capitalize($string_utils:english_number(beer)) +
((beer == 1) ? " bottle " | " bottles ")) + "of beer on the wall.");
player:tell(($string_utils:capitalize($string_utils:english_number(beer)) +
((beer == 1) ? " bottle " | " bottles ")) + "of beer...");
player:tell("Take one down and pass it around.");
player:tell(($string_utils:capitalize($string_utils:english_number(beer - 1))
+ (((beer - 1) == 1) ? " bottle " | " bottles ")) + "of beer on the wall.");
player:tell();
.```