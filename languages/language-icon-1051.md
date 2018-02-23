
## Language Icon ##
---
- Author: Frank J. Lhota
- Date: 02/13/06
- Info: http
- Score:  (2.67 in 15 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-icon-1051.html
---

```# Frank J. Lhota
link numbers   # uning spell procedure

#################################################################
#
# Returns a phrase indicating the beer inventory of the wall
#
#################################################################
procedure inventory(beercount)
  static lc, uc
  initial  {
    lc := string (&lcase)
    uc := string (&ucase)
    }

  return case beercount of  {
    0       : "No more bottles"
    1       : "One bottle"
    default : {
      # Capitalize the result of spell
      spell(beercount) ? (
        map (move (1), lc, uc) || tab (0) || " bottles" )
      }
    } || " of beer on the wall"
end

#################################################################
#
# Writes out the verse for beercount number of beers. Returns the
# number of beers on the wall at the end of the verse
#
#################################################################
procedure write_verse (beercount)
  local inv

  write (inv := inventory(beercount), ",")
  write (inv, ".")
  if beercount > 0 then {
    write ("Take one down and pass it around,")
    write (inventory(beercount -:= 1), ".")
    }
  else {
    write ("Go to the store and buy some more,")
    write (inventory(beercount := 99), ".")
    }
  write()

  return beercount
end

procedure main()
  local beercount
  static wall_capacity
  initial wall_capacity := 99

  # Start with wall fully stocked;
  # Keep writing verses until the wall is restocked
  beercount := wall_capacity
  until (beercount := write_verse (beercount)) = wall_capacity
  return
end```