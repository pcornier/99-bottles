
## Language Genero BDL ##
---
- Author: Neil Martin
- Date: 01/17/06
- Info: http
- Score:  (3.00 in 12 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-genero-bdl-1025.html
---

```-- Simple Genero BDL program consisting of karaoke.4gl and frm.per
-- Based on Johan de Lange program.
-- fgl2p karaoke.4gl
-- fglform frm.per
-- FGLGUI=1;export FGLGUI
-- FGLSERVER=`your ip`;export FGLSERVER
-- fglrun karaoke.42m

-- karaoke.4gl:
DEFINE lyrics DYNAMIC ARRAY OF STRING

MAIN
  DEFINE
    line1,line2 STRING,
    i SMALLINT

  OPEN FORM frm FROM "frm"
  DISPLAY FORM frm

  FOR i= 99 TO 0 STEP -1
    CASE i
      WHEN 0
        LET line1 = "No more bottles of beer on the wall, no more bottles of beer."
        LET line2 = "Go to the store and buy some more, 99 bottles of beer on the wall."
      WHEN 1
        LET line1 = "1 bottle of beer on the wall, 1 bottle of beer."
        LET line2 = "Take one down and pass it around, no more bottles of beer on the wall."
      OTHERWISE
        LET line1 = sfmt("%1 bottles of beer on the wall, %1 bottles of beer.",i)
        LET line2 = sfmt("Take one down and pass it around, %1 bottle",i-1)
        IF i != 2 THEN
          LET line2 = line2.append("s")
        END IF
        LET line2 = line2.append(" of beer on the wall.")
    END CASE
    LET lyrics[ lyrics.getLength() + 1 ] = line1
    LET lyrics[ lyrics.getLength() + 1 ] = line2
  END FOR

  LET i = 1
  DISPLAY ARRAY lyrics TO arr.* ATTRIBUTE( COUNT=lyrics.getLength() )
    ON IDLE 1
      CALL fgl_set_arr_curr(i)
      LET i = i + 1
  END DISPLAY

END MAIN

-- frm.per:
LAYOUT ( TEXT="Karaoke", STYLE="dialog" )
TABLE
{
 Lyrics
[f001                                                   ]
[f001                                                   ]
[f001                                                   ]
[f001                                                   ]
[f001                                                   ]
[f001                                                   ]
[f001                                                   ]
[f001                                                   ]
[f001                                                   ]
[f001                                                   ]
[f001                                                   ]
[f001                                                   ]
[f001                                                   ]
[f001                                                   ]
[f001                                                   ]
[f001                                                   ]
}
END -- TABLE
END -- LAYOUT

ATTRIBUTES
f001 = FORMONLY.lyrics;
END
INSTRUCTIONS
SCREEN RECORD arr ( lyrics )
END```