
## Language Oberon ##
---
- Author: Michael Griebling
- Date: 04/20/05
- Info: n/a
- Score:  (2.96 in 25 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-oberon-503.html
---

```MODULE BeerSong;

(* An object-oriented beer song in Oberon-2              *)
(* Contributed by Michael Griebling (mgriebling@bix.com) *)

IMPORT O:=Out;

TYPE
  WallObject* = RECORD beer-: SHORTINT END;

VAR
  BeerWall : WallObject;
  
  PROCEDURE (VAR wall: WallObject) LineEmUp*;
  BEGIN wall.beer := 99
  END LineEmUp;
  
  PROCEDURE (VAR wall: WallObject) PassOneAround*;
  BEGIN DEC(wall.beer)
  END PassOneAround;
  
  PROCEDURE (VAR wall: WallObject) HasMoreBeer* () : BOOLEAN;
  BEGIN RETURN wall.beer > 0
  END HasMoreBeer;
  
  PROCEDURE SingOf(beer: SHORTINT);
  BEGIN 
    IF beer = 0 THEN O.String("No more") ELSE O.Int(beer, 1) END; 
    O.String(" bottle"); IF beer#1 THEN O.Char("s") END; O.String(" of beer")
  END SingOf;
     
  PROCEDURE (VAR wall: WallObject) SingVerse*;    
  BEGIN 
    SingOf(wall.beer); O.String(" on the wall, "); SingOf(wall.beer); O.Ln;
    O.String("Take one down and pass it around,"); O.Ln;
    SingOf(wall.beer-1); O.String(" on the wall."); O.Ln; O.Ln
  END SingVerse;

BEGIN
  BeerWall.LineEmUp;
  WHILE BeerWall.HasMoreBeer() DO BeerWall.SingVerse; BeerWall.PassOneAround END
END BeerSong.```