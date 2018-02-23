
## Language Builder Script ##
---
- Author: Micka�l Pointier
- Date: 12/21/05
- Info: http
- Score:  (2.95 in 20 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-builder-script-984.html
---

```//
// 99 bottles of beer
// Builder version
// Micka�l Pointier - November 2005
// 
// Builder is a proprietary scripting language developped by Eden Games
// http://www.eden-games.com/
//
// Since this language lacks of two important features (subroutines and arrays)
// I had to devise a way to avoid repeting some code... the result is not 
// pretty but by Builder's scripting standard it is quite ok :)
//
// The 'Speak' instruction uses the built-in windows speach API. It is installed
// by default on Windows XP, but for Windows 2000 it must be installed 
// separately: http://www.microsoft.com/speech/download/sdk51/
//
// Formating is a bit weird in order to avoid having too long lines (not that 
// the langage actually care about, there is no limit (except memory) for the 
// lenght of individual lines)
//
DefVar bottle_counter=99
DefVar paragraf$
DefVar line$
DefVar song$
DefVar crlf$=Chr$(13)+Chr$(10)
DefVar count$
DefVar action$
DefVar flip=0

SetColorPaper BLUE
SetColorInk YELLOW
Cls

Print "99 bottles of beer"
Print "Builder singing version"

DefVar flag_speech
DefVar question$="Do you want the song to be also spoken out loud ?"
flag_speech=MessageBox("99 bottles",question$,BOX_YESNO)

SetColorInk WHITE
Print crlf$
Do
  Do
    line$=""
    If bottle_counter=-1
      action$="Go to the store and buy some more"
      count$="99 bottles "
    Else
      action$="Take one down and pass it around"
      If bottle_counter=0
        count$="no more bottles "
      ElseIf bottle_counter=1
        count$="1 bottle "
      Else
        count$=Str$(bottle_counter)+" bottles "
      EndIf
    EndIf
    count$=count$+"of beer"
  
    If flip=0
      line$=line$+count$+" on the wall, "
      line$=line$+count$+"."+crlf$
    Else
      line$=line$+action$+", "
      line$=line$+count$+" on the wall."+crlf$+crlf$
    EndIf

    // To ensure a upper case initial
    line$=Upper$(Left$(line$,1))+CutLeft$(line$,1)
    
    // Add the new line to the whole song
    song$=song$+line$
    
    // Display the line and eventually speak it out
    Print ;line$
    If flag_speech=BUTTON_YES
      Speak line$,3+Rand()*5
    EndIf
      
    bottle_counter=bottle_counter-1
    flip=1-flip
    ExitIf flip=0
  Loop
  bottle_counter=bottle_counter+1
  
  ExitIf bottle_counter=-1
Loop

// Ask if the use want to save the song file
question$="Do you want to save the song in a file ?"
If MessageBox("99 bottles",question$,BOX_YESNO)=BUTTON_YES
  // Then select the destination file
  DefVar filter$="All (*.*){*.*}Texts{*.TXT;*.DOC}"
  DefVar filename$=SelectOneFile$("Choose filename to save",filter$)
  If FileExist(filename$)
    DefVar message$="File "+filename$+" already exists"+crlf$
    message$=message$+"Are you sure you want to overwrite it ?"
    If MessageBox("99 bottles",message$,BOX_YESNO)=BUTTON_YES
      filename$=""
    EndIf
  EndIf 
  If filename$!=""
    SaveVar song$ filename$
  EndIf
EndIf

Pause "This song is now finished, press a key to quit."
End```