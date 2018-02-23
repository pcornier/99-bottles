
## Language TSEPro Editor Macro ##
---
- Author: Sammy Mitchell
- Date: 04/20/05
- Info: n/a
- Score:  (4.00 in 2 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-tsepro-editor-macro-466.html
---

```/****************************************************************
  A TSE Pro editor macro that implements the beer song.

  Sammy Mitchell, Dec 9, 1998   www.semware.com
 ****************************************************************/

// return "n bottles", "1 bottle", or "no more..." based on num_bottles
string proc bottles(integer num_bottles)
    case num_bottles
        when 0    return ("no more bottles of beer")
        when 1    return ("1 bottle of beer")
    endcase
    return (Str(num_bottles) + " bottles of beer")
end

// display the verses
proc Sing()
    integer num_bottles

    for num_bottles = 99 downto 1
        WriteLine(bottles(num_bottles); "on the wall,")
        WriteLine(bottles(num_bottles), ".")
        WriteLine("You take one down, pass it around,")
        WriteLine(bottles(num_bottles - 1); "on the wall.")
        WriteLine("")
    endfor
end

// display the beer song in a pop-up window
proc main()
    if PopWinOpen(1, 1, 40, Query(ScreenRows),
                1, "Sing along...", Color(Bright Yellow on Blue))
        Set(Attr, Color(Bright Yellow on Blue))
        ClrScr()
        Sing()
        WriteLine("")
        WriteLine("Press a key...")
        GetKey()
        PopWinClose()
    endif
end```