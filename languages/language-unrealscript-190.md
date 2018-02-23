
## Language UnrealScript ##
---
- Author: Dave Smith
- Date: 04/20/05
- Info: n/a
- Score:  (2.77 in 26 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-unrealscript-190.html
---

```// 99 Bottles of Beer, in UnrealScript. Sings to every player
// simultaneously. Written for UT2003, but would work on other Unreal
// Engine games with little to no modification.
// Probably works on a network. I haven't checked.

// Written by "Dezro" Dave Smith: dezro@mac.com

class MutBottlesBeer extends Mutator;

var int StartingBottles;
var int CurrentBottle;
var int SongLine;
var bool Begun;
var bool StopSong;

function ModifyPlayer(Pawn Other)
{
	Super.ModifyPlayer(Other);
	if (!Begun)
	{
		CurrentBottle = StartingBottles;
		SetTimer(1.5, true);
		Begun = true;
	}
}

function Timer()
{
	local Controller C;
	local bool PassAround;

	if (StopSong)
	{
		SetTimer(0.001, false);
		return;
	}

	for (C = Level.ControllerList; C != None; C = C.NextController)
	{
		Switch (SongLine)
		{
		Case 0:
			if (CurrentBottle == 1)
				C.Pawn.ClientMessage("One bottle of beer on the wall,");
			else
				C.Pawn.ClientMessage(CurrentBottle $ " bottles of beer on the wall,");
			Break;
		Case 1:
			if (CurrentBottle == 1)
				C.Pawn.ClientMessage("One bottle of beer.");
			else
				C.Pawn.ClientMessage(CurrentBottle $ " bottles of beer.");
			Break;
		Case 2:
			if (CurrentBottle == 1)
				C.Pawn.ClientMessage("Take it down, pass it around,");
			else
				C.Pawn.ClientMessage("Take one down, pass it around,");
			PassAround = true;
			Break;
		Default:
			if (CurrentBottle == 1)
				C.Pawn.ClientMessage("One bottle of beer on the wall.");
			else if (CurrentBottle < 1)
			{
				C.Pawn.ClientMessage("No more bottles of beer on the wall!");
				StopSong = true;
			}
			else
				C.Pawn.ClientMessage(CurrentBottle $ " bottles of beer on the wall.");
			Break;
		}
	}
	if (PassAround)
	{
		CurrentBottle--;
		PassAround = false;
	}
	SongLine++;
	if (SongLine > 3)
		SongLine = 0;
}

defaultproperties {
	FriendlyName="99 Bottles"
	Description="Sings to you during the battle."
	StartingBottles = 99
}```