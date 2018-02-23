
## Language Warcraft 3 Jass ##
---
- Author: AJ Savino
- Date: 10/20/06
- Info: http
- Score:  (2.62 in 13 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-warcraft-3-jass-1307.html
---

```function Trig_Bottles_Of_Beer_2_checkvalue1 takes nothing returns boolean
    if (not(udg_Bottles > 1)) then 
      return false
    endif
      return true
endfunction

function Trig_Bottles_Of_Beer_2_Actions takes nothing returns nothing
  set bj_forLoopAIndex = 1
  set bj_forLoopAIndexEnd = 99

  loop
      exitwhen bj_forLoopAIndex > bj_forLoopAIndexEnd

      set udg_Bottles = (100 - GetForLoopIndexA())

      if (Trig_Bottles_Of_Beer_2_checkvalue1()) then
          call DisplayTextToForce (GetPlayersAll(), ((("|c00800080" + I2S(udg_Bottles)) + (" Bottles
of beer on the wall. " + (I2S(udg_Bottles) + (" Bottles of beer!" + (" Take one down, pass it
around. " + (I2S(( udg_Bottles - 1 )) + " Bottles of beer on the wall!")))))) + "|r"))
      else
          call DisplayTextToForce (GetPlayersAll(), ((( "|c00800080" + I2S(udg_Bottles)) + (" Bottle
of beer on the wall. " + (I2S(udg_Bottles) + (" Bottle of beer!" + (" Take one down, pass it around.
" + " No more bottles of beer on the wall!"))))) + "|r"))
      endif

      set bj_forLoopAIndex = bj_forLoopAIndex + 1
  endloop

  call DisplayTextToForce (GetPlayersAll(), "|c00800080No more bottles of beer on the wall, no more
bottles of beer. Go to the store, and by you some more, 99 bottles of beer on the wall!|r")
endfunction

function InitTrig_Bottles_Of_Beer_2 takes nothing returns nothing
  set gg_trg_Bottles_Of_Beer_2 = CreateTrigger()

  call TriggerRegisterPlayerChatEvent (gg_trg_Bottles_Of_Beer_2, Player(0), "-99bottlesofbeer2",
true)
  call TriggerRegisterPlayerChatEvent (gg_trg_Bottles_Of_Beer_2, Player(1), "-99bottlesofbeer2",
true)
  call TriggerRegisterPlayerChatEvent (gg_trg_Bottles_Of_Beer_2, Player(2), "-99bottlesofbeer2",
true)
  call TriggerRegisterPlayerChatEvent (gg_trg_Bottles_Of_Beer_2, Player(3), "-99bottlesofbeer2",
true)
  call TriggerRegisterPlayerChatEvent (gg_trg_Bottles_Of_Beer_2, Player(4), "-99bottlesofbeer2",
true)
  call TriggerRegisterPlayerChatEvent (gg_trg_Bottles_Of_Beer_2, Player(5), "-99bottlesofbeer2",
true)
  call TriggerRegisterPlayerChatEvent (gg_trg_Bottles_Of_Beer_2, Player(6), "-99bottlesofbeer2",
true)
  call TriggerRegisterPlayerChatEvent (gg_trg_Bottles_Of_Beer_2, Player(7), "-99bottlesofbeer2",
true)
  call TriggerRegisterPlayerChatEvent (gg_trg_Bottles_Of_Beer_2, Player(8), "-99bottlesofbeer2",
true)
  call TriggerRegisterPlayerChatEvent (gg_trg_Bottles_Of_Beer_2, Player(9), "-99bottlesofbeer2",
true)
  call TriggerRegisterPlayerChatEvent (gg_trg_Bottles_Of_Beer_2, Player(10), "-99bottlesofbeer2",
true)
  call TriggerRegisterPlayerChatEvent (gg_trg_Bottles_Of_Beer_2, Player(11), "-99bottlesofbeer2",
true)

  call TriggerAddAction (gg_trg_Bottles_Of_Beer_2, function Trig_Bottles_Of_Beer_2_Actions)
endfunction```