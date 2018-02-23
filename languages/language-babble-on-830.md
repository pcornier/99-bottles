
## Language Babble-On ##
---
- Author: Kevlar
- Date: 08/10/05
- Info: http
- Score:  (2.33 in 6 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-babble-on-830.html
---

```Simple version:

uses $npc_centric_script
// For more information, see 'help scripting'.
env "jump_limit" 120
set "%bottles" 99

label "top"
if equals %bottles 0
  stop
endif
start "verse"
pause 5 "minutes"
jump "top"

label "verse"
  say %bottles " bottles of beer on the wall ..."
  say %bottles " bottles of beer!"
  say "Yaaah take one down, pass it around!"
  decrement "%bottles"
  if equals %bottles 1
    say %bottles " bottle of beer on the wall!"
  elseif equals %bottles 0
    say "No more bottles of beer on ... the ... wall."
    social "sigh"
  else
    say %bottles " bottles of beer on the wall!"
  endif
finish

Randomized version:

uses $npc_centric_script
// For more information, see 'help scripting'.
env "jump_limit" 120
set "%bottles" 99

label "top"
if equals %bottles 0
  stop
endif
start "verse"
pause 1 "minute"
jump "top"

label "verse"
  start "verse_a"
  start "verse_b"
  start "verse_c"
  decrement "%bottles"
  if equals %bottles 1
    say %bottles " bottle of beer on the wall!"
  elseif equals %bottles 0
    say "No more bottles of beer on ... the ... wall."
    social "sigh"
  else
    say %bottles " bottles of beer on the wall!"
  endif
finish

label "verse_a"
  random "type" 4
  if equals %type 4
    say "Weeee .... got " %bottles " bottles of beeeer on the wall!"
  elseif equals %type 3
    say %bottles " bottles of beer on the wall ..."
  elseif equals %type 2
    do %npc ".drop to my knees and .sing out, \"" %bottles " bottles of beeeer on the wallllll!\""
  else
    say "Ooooh, theres " %bottles " bottles of beer on the wall!"
  endif
finish

label "verse_b"
  random "type" 4
  if equals %type 4
    say %bottles " bottles of beeeeer!"
  elseif equals %type 3
    say "Oh- " %bottles " bottles of beer!"
  elseif equals %type 2
    say %bottles " bottles of beer!"
  else
    say "Yeah, " %bottles " bottles of beer!"
  endif
finish

label "verse_c"
  random "type" 4
  if equals %type 4
    say "Yaaah take one down, pass it around!"
  elseif equals %type 3
    say "Yaaah twist the cap off, slam one down!"
  elseif equals %type 2
    say "Pour me a round, I'll drink it right down!"
  else
    say "Pass it around and drink it all down!"
  endif
finish```