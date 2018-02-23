
## Language Genero 4GL ##
---
- Author: Johan de Lange
- Date: 01/11/06
- Info: http
- Score:  (2.29 in 7 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-genero-4gl-1015.html
---

```# Simple Genero 4GL program consisting of beer.4gl and beer_frm.per
# www.fourjs.com
# fgl2p beer.4gl
# fglform beer_frm.per
# FGLGUI=1;export FGLGUI
# FGLSERVER=`your ip`;export FGLSERVER
# fglrun beer.42m

# beer.4gl
main
    define
        lyrics string,
        verse string,
        i smallint

    close window screen
    open window beer_win with form "beer_frm"
        attributes(style="dialog")

    for i=99 to 0 step -1

        case i
            when 0
                let verse = "No more bottles of beer on the wall, no more bottles of beer.\n"
                let verse = verse.append("Go to the store and buy some more, 99 bottles of beer on
the wall.\n")
            when 1
                let verse = "1 bottle of beer on the wall, 1 bottle of beer.\n"
                let verse = verse.append("Take one down and pass it around, no more bottles of beer
on the wall.\n")
            otherwise
                let verse = sfmt("%1 bottles of beer on the wall, %1 bottles of beer.\n",i)
                let verse = verse.append(sfmt("Take one down and pass it around, %1",i-1))
                if i = 2 then
                    let verse = verse.append(" bottle")
                else
                    let verse = verse.append(" bottles")
                end if
                let verse = verse.append(" of beer on the wall.\n")
        end case
        let lyrics = lyrics.append(verse)
        display by name lyrics

    end for

    menu
        command "Ok"
            exit menu
    end menu

end main

# beer_frm.per
SCHEMA FORMONLY

LAYOUT(Text="Beer Song")
  VBOX
    GROUP(text="Lyrics")
      GRID
      {
      [A0                                                           ]
      [                                                             ]
      [                                                             ]
      [                                                             ]
      [                                                             ]
      [                                                             ]
      [                                                             ]
      [                                                             ]
      [                                                             ]
      [                                                             ]
      }
      END
    END
  END
END

ATTRIBUTES
TEXTEDIT A0 = formonly.lyrics;```