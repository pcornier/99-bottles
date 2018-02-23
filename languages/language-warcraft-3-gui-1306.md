
## Language Warcraft 3 GUI ##
---
- Author: AJ Savino
- Date: 10/20/06
- Info: http
- Score:  (3.42 in 19 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-warcraft-3-gui-1306.html
---

```Bottles Of Beer
    Events
        Player - Player 1 (Red) types a chat message containing -99bottlesofbeer as An exact match
        Player - Player 2 (Blue) types a chat message containing -99bottlesofbeer as An exact match
        Player - Player 3 (Teal) types a chat message containing -99bottlesofbeer as An exact match
        Player - Player 4 (Purple) types a chat message containing -99bottlesofbeer as An exact
match
        Player - Player 5 (Yellow) types a chat message containing -99bottlesofbeer as An exact
match
        Player - Player 6 (Orange) types a chat message containing -99bottlesofbeer as An exact
match
        Player - Player 7 (Green) types a chat message containing -99bottlesofbeer as An exact
match
        Player - Player 8 (Pink) types a chat message containing -99bottlesofbeer as An exact match
        Player - Player 9 (Gray) types a chat message containing -99bottlesofbeer as An exact match
        Player - Player 10 (Light Blue) types a chat message containing -99bottlesofbeer as An exact
match
        Player - Player 11 (Dark Green) types a chat message containing -99bottlesofbeer as An exact
match
        Player - Player 12 (Brown) types a chat message containing -99bottlesofbeer as An exact
match
    Conditions
    Actions
        For each (Integer A) from 1 to 99, do (Actions)
            Loop - Actions
                Set Bottles = (100 - (Integer A))
                If (All Conditions are True) then do (Then Actions) else do (Else Actions)
                    If - Conditions
                        Bottles Greater than 1
                    Then - Actions
                        Game - Display to (All players) the text: (((|c00800080 + (String(Bottles)))
+ ( Bottles of beer on the wall.  + ((String(Bottles)) + ( Bottles of beer! + ( Take one down, pass
it around.  + ((String((Bottles - 1))) +  Bottles of beer on the wall!)))))) + |r)
                    Else - Actions
                        Game - Display to (All players) the text: (((|c00800080 + (String(Bottles)))
+ ( Bottle of beer on the wall.  + ((String(Bottles)) + ( Bottles of beer! + ( Take one down, pass
it around.  +  No more bottles of beer on the wall!))))) + |r)
        Game - Display to (All players) the text: |c00800080No more b...```