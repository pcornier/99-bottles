
## Language LINC ##
---
- Author: igis
- Date: 01/02/07
- Info: http
- Score:  (2.00 in 4 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-linc-1364.html
---

```SD; SS-COUNT ED; N LE; 2
SD; SS-MESSAGE ED; A LE; 80

MV; (99)    SS-COUNT

BG;
    DW; SS-COUNT NOT = GLB.ZEROS
        MV; SS-COUNT                             SS-MESSAGE
    ELSE;
        MV; (No more)                            SS-MESSAGE
    END;
    DW; SS-COUNT NOT = (1)
        ATS; (bottles of beer on the wall,)      SS-MESSAGE
    ELSE; 
        ATS; (bottle of beer on the wall,)       SS-MESSAGE
    END;
    DW; SS-COUNT NOT = GLB.ZEROS
        MV; SS-COUNT                             SS-MESSAGE
    ELSE;
        MV; (No more)                            SS-MESSAGE
    END;
    DW; SS-COUNT > (1)
        ATS; (bottles of beer.)                  SS-MESSAGE
    ELSE; 
        ATS; (bottle of beer.)                   SS-MESSAGE
    END;
    ME; SS-MESSAGE
    
    DW; SS-COUNT NOT = GLB.ZEROS
        MV; (Take one down and pass it around,)  SS-MESSAGE
        SB; (1) SS-COUNT
    ELSE;
        MV; (Go to the store and buy some more,) SS-MESSAGE
        MV; (99) SS-COUNT
    END;
    DW; SS-COUNT > (1)
        ATS; SS-COUNT                            SS-MESSAGE
    ELSE;
        ATS; (no more)                           SS-MESSAGE
    END;
    ATS; (bottles of beer on the wall.)          SS-MESSAGE
    ME; SS-MESSAGE
END;```