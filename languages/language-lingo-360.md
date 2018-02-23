
## Language Lingo ##
---
- Author: John R. Nyquist
- Date: 04/20/05
- Info: n/a
- Score:  (2.95 in 22 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-lingo-360.html
---

```Lingo is Macromedia's Director scripting language.

-- Lingo version of 99 Bottles of Beer 
-- programmer: John R. Nyquist SynapseDes@aol.com


on BottlesOfNABeer
  -- This handler outputs to the message window.
  
  set maxBottles to 99
  
  repeat with bottles = maxBottles down to 1
    set bottleString to WhichString(bottles)
    put bottleString & " of beer on the wall, " & bottleString & " of beer."
    put "Take one down, pass it around," 
    put WhichString(bottles - 1) & " of beer on the wall."
    put RETURN
  end repeat
  
  put "No bottles of beer on the wall, no bottles of beer."
  put "Go to the store and buy some more."
  put maxBottles & " bottles of beer on the wall."
  
end BottlesOfNABeer


on WhichString bottles
  
  if bottles > 1 then
    return bottles & " bottles"
  else if bottles = 1 then
    return "1 bottle"
  else
    return "No more bottles"
  end if
  
end WhichString```