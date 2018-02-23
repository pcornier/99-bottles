
## Language Panorama Pantalk ##
---
- Author: David Thompson
- Date: 10/23/07
- Info: http
- Score:  (2.92 in 13 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-panorama-pantalk-1612.html
---

```// PanTalk version of 99 Bottles of Beer
// PanTalk is the scripting language of Panorama
// This procedure requires Panorama 3.0 or later

Local OnePhrase
FileGlobal Lyrics

OnePhrase = "of beer on the wall, xx of beer."+�
    +"Take one down and pass it around, yy of beer on the wall."

ArrayFilter rep(�,99),Lyrics,�,pattern(100-seq(),"� bottle~ ")+
    replace(replace(OnePhrase,"xx",lower(pattern(100-seq(),"� bottle~"))),
    "yy",lower(pattern(100-seq()-1,"� bottle~")))+�

/* Delete "negative one bottle" line, and substitute "Go to the store" etc. */

Lyrics = strip(Lyrics)[1,"-"+�]
    +"Go to the store and buy some more, ninety nine bottles of beer on the wall."

ShowVariables Lyrics
FileSave folder(""),"Ninety_Nine_Bottles.txt","",Lyrics```